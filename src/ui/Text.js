import React from "react"
import { Text as ThemeText } from "theme-ui";

const Text = ({ sx, children }) => (
  <ThemeText sx={{ fontFamily: "Amaranth, sans-serif", ...sx }}>{children}</ThemeText>
);

export default Text;
