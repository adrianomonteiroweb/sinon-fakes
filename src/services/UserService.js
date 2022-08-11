function UserService(userRepository) {
  function getAll() {
    return userRepository.find();
  }

  function getOneByEmail() {}

  return {
    getAll,
    getOneByEmail,
  };
}

module.exports = UserService;
