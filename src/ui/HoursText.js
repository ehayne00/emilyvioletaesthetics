import { Text as ThemeText } from "theme-ui";

const HoursText = ({ sx, children }) => (
  <ThemeText sx={{ fontFamily: "Julius Sans One, sans-serif", ...sx }}>
    {children}
  </ThemeText>
);

export default HoursText;
