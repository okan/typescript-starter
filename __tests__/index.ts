import { sayHello } from "../src/index";

describe("[index.ts] Tests", () => {
  describe("sayHello()", () => {
    it('should return "Hello world!"', () => {
      const result = sayHello();

      expect(result).toEqual("Hello world!");
    });
  });
});
