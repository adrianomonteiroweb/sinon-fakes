const { fake } = require("sinon");
const UserService = require("../../src/services/UserService");

describe("UserService", () => {
  describe("#getAll:", () => {
    it("#getAll - Get all users.", async () => {
      const userList = [
        {
          name: "juan",
          email: "juan@email.com",
        },
      ];

      const find = fake.resolves(userList);
      const userService = UserService({ find });

      const result = await userService.getAll();

      expect(find.callCount).toBe(1);
      expect(find.firstArg).toBe(undefined);
      expect(result).toEqual(userList);
    });

    it("#getAll - Error a db connection.", async () => {
      const err = new Error("Could not connect to db.");
      const find = fake.rejects(err);

      try {
        const userService = UserService({ find });
        await userService.getAll();
      } catch (err) {
        expect(find.callCount).toBe(1);
        expect(find.firstArg).toBe(undefined);
        expect(err.message).toEqual("Unavailable service.");
      }
    });
  });

  describe("#getOneByEmail", () => {
    describe("#getOneByEmail - Get user by email.", () => {
      it("Should return a user by email.", async () => {
        const user = {
          name: "Juan",
          email: "jaun@email.com",
        };

        const find = fake.resolves([user]);
        const userService = UserService({ find });

        const result = await userService.getOneByEmail("jaun@email.com");

        expect(find.callCount).toBe(1);
        expect(find.firstArg).toBe({ email: "juan@email.com" });
        expect(result).toEqual(user);
      });
    });
  });
});
