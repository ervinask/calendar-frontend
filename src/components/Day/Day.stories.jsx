import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import Day from "./Day";

export default {
  title: "Day",
  component: Day,
};

export const primary = () => (
  <ThemeProvider theme={theme}>
    <Day day="1" children="Labas" />
  </ThemeProvider>
);
