/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable prefer-destructuring */
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { decodeToken, getErrorMessage, decodeJWT } from '../helpers';
import { User } from '../db/models';

dotenv.config();

const Auth = {
  verifyAccessToken: async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.sendStatus(401);
    const token = authorization.split(' ')[1];

    if (!token || token === 'undefined') return res.sendStatus(401);
    decodeJWT(token, async (err, decoded) => {
      const phonenumber = decoded?.phonenumber;

      if (err || !phonenumber) return res.sendStatus(403);
      let user = await User.findOne({ where: { phonenumber } });
      user = user?.dataValues;
      if (!user) return res.sendStatus(403);
      req.authUser = user;
      next();
    });
  },

  verifyUserVerificationToken: async (req, res, next) => {
    const { token } = req.params;
    if (!token || token === 'undefined') return res.sendStatus(401);
    decodeJWT(token, async (err, decoded) => {
      const u_email = decoded?.u_email;
      const type = decoded?.type;
      if (err || !u_email || !type || type !== 'userVerification') return res.sendStatus(403);
      let user = await User.findOne({ where: { u_email } });
      user = user?.dataValues;
      if (!user) return res.sendStatus(403);
      req.authUser = user;
      next();
    });
  },

  verifyUPasswordResetToken: async (req, res, next) => {
    const { token } = req.params;
    if (!token || token === 'undefined') return res.sendStatus(401);
    decodeJWT(token, async (err, decoded) => {
      if (err || !decoded) return res.sendStatus(403);
      const u_email = decoded?.u_email;
      const type = decoded?.type;
      if (!u_email || !type || type !== 'passwordReset') return res.sendStatus(403);
      let user = await User.findOne({ where: { u_email } });
      user = user?.dataValues;
      if (!user) return res.sendStatus(403);
      req.user = user;
      next();
    });
  },

  checkCredentials: async (req, res, next) => {
    const { user, body: { password } } = req;
    const isCorrectPassword = bcrypt.compareSync(password, user.password);
    if (!isCorrectPassword) {
      return res.status(401).send({
        error: getErrorMessage('password', 'Password is incorrect'),
      });
    }
    next();
  },
};

export default Auth;
