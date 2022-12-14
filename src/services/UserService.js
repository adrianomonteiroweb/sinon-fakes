const { firstElementByArray } = require("../utils/functions");

function UserService(userRepository) {
  async function getAll() {
    try {
      const result = await userRepository.find();

      return result;
    } catch (err) {
      if (err.message === "Could not connect to db.") {
        throw new Error("Unavailable service.");
      }

      throw err;
    }
  }

  async function getOneByEmail(email) {
    try {
      const result = await userRepository.find({ email });

      if (result === null) {
        throw new Error("User not found.");
      }

      return firstElementByArray(result);
    } catch (err) {
      if (err.message === "Could not connect to db.") {
        return Promise.reject(new Error("Unavailable service."));
      }

      return Promise.reject(err);
    }
  }

  return {
    getAll,
    getOneByEmail,
  };
}

module.exports = UserService;
