import React from "react";
import { rest } from "msw";
import { render, screen, waitFor, server } from "test-utils";
import Calendar from "./calendar.component";

import { GetEventsQuery } from "../generated/api";

interface Response {
  data?: GetEventsQuery;
  errors?: { message: string }[];
}
const url = process.env.API_URI ?? "https://localhost:5000/graphql";

describe("Events Component", () => {
  describe("Verify API Comunication and UI Changes", () => {
    test("Verify event's title shows up", async () => {
      server.use(
        rest.post(url, (req, res, ctx) => {
          const response: Response = {
            data: {
              events: [
                {
                  id: "01",
                  name: "test-01",
                  start: new Date().toISOString(),
                  end: new Date().toISOString(),
                },
              ],
            },
          };
          return res(ctx.json<Response>(response));
        })
      );

      render(<Calendar />);

      expect(screen.getByText("Calendar app")).toBeInTheDocument();

      await waitFor(() => {
        expect(screen.getByText("Calendar app")).toBeInTheDocument();
      });
    });
  });
});
