import {version} from "../index.js";
import pkg from "../package.json";

describe("index", () => {
  beforeAll(() => {});

  beforeEach(() => {});

  afterEach(() => {});

  test("version should correct", ()=> {
    expect(version).toBe(pkg.version);
  })

  test("should defined popover element", () => {
    const ce = customElements.get("click-to-component-browser-popover");
    expect(ce).toBeTruthy();
  });

  test("should init popover correctly", () => {
    const event = new MouseEvent("contextmenu", {
      bubbles: true,
      cancelable: true,
      button: 2, // Right click
      altKey: true, // Option key
    });
    document.body.dispatchEvent(event);

    const el = document.querySelector("click-to-component-browser-popover");
    expect(el).toBeTruthy();
  });
});
