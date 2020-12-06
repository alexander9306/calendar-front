import React from "react";
import { render, screen } from "test-utils";
import { create } from "react-test-renderer";
import OrdenStatusBadge from "./orden-estatus-badge.component";
import { OrdenEstatus } from "../generated/api";

describe("Orden Status Badge Component", () => {
  describe("Functionality Testing", () => {
    test("Verify badge with a pendiente text is rendered when number 0 is passed as an argument", () => {
      render(<OrdenStatusBadge estatus={OrdenEstatus.Pendiente} />);
      expect(screen.queryByText("pendiente")).toBeInTheDocument();
    });
    test("Verify badge with a pendiente text is rendered when a number different than 0 is passed as an argument", () => {
      render(<OrdenStatusBadge estatus={OrdenEstatus.Pendiente} />);
      expect(screen.queryByText("pendiente")).toBeNull();
    });
    test("Verify badge with a completado text is rendered when number 1 is passed as an argument", () => {
      render(<OrdenStatusBadge estatus={OrdenEstatus.Completada} />);
      expect(screen.queryByText("completado")).toBeInTheDocument();
    });
    test("Verify badge with a completado text is rendered when number 2 is passed as an argument", () => {
      render(<OrdenStatusBadge estatus={OrdenEstatus.Completada} />);
      expect(screen.queryByText("completado")).toBeInTheDocument();
    });
  });
  describe("Snapshot Testing", () => {
    test("Verify when a number 0 is passed as estatus prop", () => {
      const tree = create(
        <OrdenStatusBadge estatus={OrdenEstatus.Completada} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
    test("Verify when a number 1 is passed as estatus prop", () => {
      const tree = create(
        <OrdenStatusBadge estatus={OrdenEstatus.Pendiente} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
