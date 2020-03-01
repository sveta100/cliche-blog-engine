import { shallowMount } from "@vue/test-utils";
import Button from "../src/components/common/ButtonComponent";

function getMountedComponent(Button, propsData) {
  return shallowMount(Button, {
    propsData
  });
}

describe("Button component", () => {
  test("renders correctly with props", () => {
    const btn = getMountedComponent(Button, {
      name: "Save"
    }).text();
    expect(btn).toBe("Save");
  });
});
