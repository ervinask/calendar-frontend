import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Primary = () => (
  <ThemeProvider theme={theme}>
    <Button>Button Text</Button>
  </ThemeProvider>
);
