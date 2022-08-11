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

  async function getOneByEmail(email) {}

  return {
    getAll,
    getOneByEmail,
  };
}

module.exports = UserService;
