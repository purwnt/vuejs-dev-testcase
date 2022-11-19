import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ButtonMedium from "../ButtonMedium.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(ButtonMedium, { props: { title: "Sample Title" } });
    expect(wrapper.text()).toContain("Sample Title");
  });
});
