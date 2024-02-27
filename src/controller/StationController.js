/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
/* eslint-disable prefer-destructuring */
import { v4 as uuid } from 'uuid';
import dotenv from 'dotenv';
import { STATUSES } from '../constants/ResponseStatuses';

import {
  Station,
} from '../db/models';
import { MESSAGES } from '../constants/ResponceMessages';

// const { Op } = require('sequelize');
// import { serverConfig } from '../config';

dotenv.config();

const StationController = {

  createStation: async (req, res) => {
    const { body } = req;
    const stationObject = {
      id: uuid(),
      province: body.province,
      district: body.district,
      sector: body.sector,
      cell: body.cell,
      village: body.village,
      belonginginstitution: body.stationname,
      contacts: body.phonenumber,
    };
    let newStation = await Station.create(stationObject);
    newStation = newStation?.dataValues;
    if (!newStation) return res.sendStatus(500);

    res.status(STATUSES.CREATED).json({ status: STATUSES.CREATED, message: MESSAGES.CREATED });
  },

  findAll: async (req, res) => {
    const stations = await Station.findAll({
      attributes: [
        'id',
        'province',
        'district',
        'sector',
        'cell',
        'village',
        'belonginginstitution',
        'contacts',
        'updatedAt',
        'createdAt',
      ],
    });
    res.status(200).json({
      stations,
    });
  },
  findOne: async (req, res) => {
    const {
      params: { id },
    } = req;
    let station = await Station.findOne({
      where: { id },
      attributes: [
        'id',
        'province',
        'district',
        'sector',
        'cell',
        'village',
        'belonginginstitution',
        'contacts',
        'updatedAt',
        'createdAt',
      ],
    });
    station = station ? station.dataValues : null;
    if (!station) return res.status(STATUSES.NO_CONTENT).json({ message: MESSAGES.NOT_CONTENT });
    res.json({
      station,
    });
  },

  updateStation: async (req, res) => {
    const { body } = req;
    const data = {
      province: body.province,
      district: body.district,
      sector: body.sector,
      cell: body.cell,
      village: body.village,
      belonginginstitution: body.stationname,
      contacts: body.phonenumber,
    };
    const user = await Station.update(data, { where: { id: req.params.id } });
    if (user[0] === 0) {
      return res.status(STATUSES.BAD_REQUEST).send({ status: STATUSES.BAD_REQUEST, message: MESSAGES.NOT_UPDATED });
    }
    return res.status(STATUSES.OK).send({ status: STATUSES.OK, message: MESSAGES.UPDATED });
  },
  //   deleteUser: async (req, res) => {
  //     const { id } = req.params;
  //     const user = await User.findOne({ where: { id } });
  //     if (!user) {
  //       return res.status(STATUSES.NOTFOUND).send({ status: STATUSES.NOTFOUND, message: MESSAGES.NOT_FOUND });
  //     }
  //     await user.destroy();
  //     return res.status(STATUSES.OK).send({ status: STATUSES.OK, message: MESSAGES.DELETED });
  //   },

};

export default StationController;
