const { firstElementByArray } = require("./utils/functions");

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
    const result = await userRepository.find({ email });

    return firstElementByArray(result);
  }

  return {
    getAll,
    getOneByEmail,
  };
}

module.exports = UserService;
