import { sayHello } from "./index";

test("sayHello returns the correct greeting", () => {
  expect(sayHello()).toBe("Hello, World!");
});
