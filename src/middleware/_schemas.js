import Joi from '@hapi/joi';

const schemas = {};

const email = Joi.string()
  .trim()
  .lowercase()
  .email()
  .required()
  .label('Email is required and should look like this : example@email.com!');
const password = Joi.string()
  .min(8)
  .required()
  .label('Password is required,  it must have at least 8 letters');

const name = Joi.string()
  .min(3)
  .required()
  .label('First or Last namec is required,  it must have at least 3 letters');
const phonenumber = Joi.string()
  .min(10)
  .required()
  .label('Phone is required,  it must have at least 10 digits');

const role = Joi.string()
  .min(2)
  .required()
  .label('Role is required,  it must have at least 2 characters');

const province = Joi.string()
  .min(3)
  .required()
  .label('Province is required');

const district = Joi.string()
  .min(3)
  .required()
  .label('District is required');

const sector = Joi.string()
  .min(3)
  .required()
  .label('Sector is required');

const cell = Joi.string()
  .min(3)
  .required()
  .label('Cell is required');

const village = Joi.string()
  .min(3)
  .required()
  .label('Province is required');

const stationname = Joi.string()
  .min(3)
  .required()
  .label('Station name is required');

schemas.login = Joi.object().keys({
  phonenumber,
  password,
});

schemas.createuser = Joi.object().keys({
  email,
  role,
  firstname: name,
  lastname: name,
  phonenumber,
});

schemas.createstation = Joi.object().keys({
  province,
  district,
  sector,
  cell,
  village,
  stationname,
  phonenumber,
});

export default schemas;
