import { Text as ThemeText } from "theme-ui";

const Header = ({ children }) => (
  <ThemeText sx={{ fontFamily: "Abril Fatface, cursive" }}>
    {children}
  </ThemeText>
);

export default Header;
