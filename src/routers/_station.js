/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import express from 'express';
import Station from '../controller/StationController';
import Auth from '../middleware/Auth';
import Validator from '../middleware/_validator';
import UserMiddle from '../middleware/user';
import Paginate from '../middleware/Paginate';

const {
  verifyAccessToken,
  verifyUserVerificationToken,
  verifyUPasswordResetToken,
} = Auth;

const router = express.Router();

router.post('/createstation', Validator('createstation'), verifyAccessToken, UserMiddle.checkISAdmin, Station.createStation);

router.put('/updatestation/:id', Validator('createstation'), verifyAccessToken, UserMiddle.checkISAdmin, Station.updateStation);
router.get('/allstations', verifyAccessToken, Station.findAll);
router.get('/getonestation/:id', verifyAccessToken, Station.findOne);

export default router;