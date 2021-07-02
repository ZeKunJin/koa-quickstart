import bcrypt from "bcrypt";
import jwt from "@/utils/jwt";
import User from "@/model/user";
import {
  LOGIN_ERROR,
  ACCOUNT_EXIST,
  ACCOUNT_NOT_EXIST,
} from "@/constant/string";

export interface ILoginParams {
  username: string;
  password: string;
}

export default {
  async login({ username, password }: ILoginParams): Promise<any> {
    try {
      const { id, password: hash } = await User.findOne({
        attributes: ["id", "password"],
        where: { username },
      });
      const _validate = bcrypt.compareSync(password, hash);

      return new Promise((resolve, reject) => {
        _validate ? resolve(jwt.generate({ id })) : reject(LOGIN_ERROR);
      });
    } catch (error) {
      return Promise.reject(error);
    }
  },

  register({ username, password }): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const _user = await User.findOne({
          attributes: ["id"],
          where: { username },
        });
        if (!_user || !_user.id) {
          await User.create({ username, password });
          resolve();
        } else {
          reject(ACCOUNT_EXIST);
        }
        return resolve();
      } catch (error) {
        return reject(error);
      }
    });
  },

  getUserInfo(id: string) {
    try {
      return new Promise(async (resolve, reject) => {
        const _user = await User.findOne({
          attributes: ["id", "username"],
          where: { id },
        });
        _user ? resolve(_user) : reject(ACCOUNT_NOT_EXIST);
      });
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
