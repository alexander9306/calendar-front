import React from "react";
import { create } from "react-test-renderer";
import NoDatos from "./no-datos.component";

describe("No Datos Component", () => {
  test("Verify component renders correctly", () => {
    const tree = create(<NoDatos />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
