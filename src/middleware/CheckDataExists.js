/* eslint-disable camelcase */
import 'regenerator-runtime';
import { MESSAGES } from '../constants/ResponceMessages';
import { STATUSES } from '../constants/ResponseStatuses';
import {
  User
} from '../db/models';

export default {
  // Pharmacy exists
  checkPharmacyExists: async (req, res, next) => {
    const ph_id = req.body.phid;

    let pharmacy = await Pharmacy.findOne({ where: { ph_id } });
    pharmacy = pharmacy?.dataValues;
    if (!pharmacy) {
      return res.status(STATUSES.NOTFOUND).send({
        status: STATUSES.NOTFOUND,
        message: `Pharmacy ${MESSAGES.NOT_FOUND}`,
      });
    }
    return next();
  }
}
