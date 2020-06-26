import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { mySqlDatabase } from "../../../../config/MySQL";
import Color from '../../Domain/entities/Visit';

export class VisitModel extends Model implements Color{
  public id!: number;
  public ip!: string;
  public url!: string;
}

VisitModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    ip: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    url: {
        type: DataTypes.TEXT,
        allowNull: false
    }
  },
  {
    tableName: "visits",
    sequelize: mySqlDatabase // this bit is important
  }
);

VisitModel.sync({ force: false }).then(() => console.log("Visits table created"));