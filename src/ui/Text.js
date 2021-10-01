import { Text as ThemeText } from "theme-ui";

const Text = ({ children }) => (
  <ThemeText sx={{ fontFamily: "Amaranth, sans-serif" }}>{children}</ThemeText>
);

export default Text;
