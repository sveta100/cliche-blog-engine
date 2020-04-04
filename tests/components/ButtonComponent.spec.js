import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Button from "../../src/components/common/ButtonComponent";

function getMountedComponent(Button, propsData) {
  return shallowMount(Button, {
    propsData
  });
}

describe("Button", () => {
  it("renders correctly with props", () => {
    expect(
      getMountedComponent(Button, {
        name: "Save"
      }).text()
    ).to.equal("Save");
  });
});

describe("Button", () => {
  it("renders correctly with props", () => {
    expect(
      getMountedComponent(Button, {
        name: "Save"
      }).text()
    ).to.equal("Save");
  });
});
