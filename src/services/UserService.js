function UserService(userRepository) {
  function getAll() {
    try {
      return userRepository.find();
    } catch (err) {
      if (err.message === "Could not connect to db.") {
        throw new Error("Unavailable service.");
      }

      throw err;
    }
  }

  function getOneByEmail() {}

  return {
    getAll,
    getOneByEmail,
  };
}

module.exports = UserService;
