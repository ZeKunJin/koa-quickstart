import { DataTypes } from "sequelize/types";
import bcrypt from "bcrypt";
import sequelize from "@/utils/database";

export default sequelize.define(
  "user",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      set(value) {
        const _salt = bcrypt.genSaltSync();
        const _hash = bcrypt.hashSync(value, _salt);
        this.setDataValue("password", _hash);
      },
    },
  },
  {
    freezeTableName: true,
  }
);
