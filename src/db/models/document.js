const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Document extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Document.init({
    documentnumber: DataTypes.STRING,
    documenttype: DataTypes.STRING,
    ownernames: DataTypes.STRING,
    ownercontact: DataTypes.STRING,
    stationid: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Document',
  });
  return Document;
};