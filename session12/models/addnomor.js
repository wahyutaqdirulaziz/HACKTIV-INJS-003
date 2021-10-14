'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class addnomor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  addnomor.init({
    nomor_telpon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'addnomor',
  });
  return addnomor;
};