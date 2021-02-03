const bcrypt = require("bcrypt");
const jwt = require("@/utils/jwt");
const User = require("@/model/user");
const {
  LOGIN_ERROR,
  ACCOUNT_EXIST,
  ACCOUNT_NOT_EXIST,
} = require("@/constant/string");

const userService = {
  async login({ username, password }) {
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

  register({ username, password }) {
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

  getUserInfo(id) {
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

module.exports = userService;
