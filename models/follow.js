'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Follow extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Follow.init(
		{
			followedId: {
				type: DataTypes.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'users',
					key: 'id'
				}
			},
			followerId: {
				type: DataTypes.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'users',
					key: 'id'
				}
			}
		},
		{
			sequelize,
			modelName: 'Follow',
			tableName: 'follows'
		}
	);
	return Follow;
};
