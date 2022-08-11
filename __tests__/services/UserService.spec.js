const { fake } = require("sinon");
const UserService = require("../../src/services/UserService");

describe("UserService", () => {
  it("#getAll", () => {
    const userList = [
      {
        name: "juan",
        email: "juan@email.com",
      },
    ];

    const find = fake.returns(userList);
    const userService = UserService({ find });

    const result = userService.getAll();

    expect(find.callCount).toBe(1);
    expect(find.firstArg).toBe(undefined);
    expect(result).toEqual(userList);
  });

  it("#getOneByEmail", () => {});
});
