import { MantineThemeOverride } from "@mantine/core";

export const Theme: MantineThemeOverride = {
  fontFamily: "Inter, sans-serif",
  fontSizes: {
    xs: "14px",
    sm: "16px",
    md: "20px",
    lg: "24px",
    xl: "28px",
  },
  radius: {
    xs: "4px",
    sm: "8px",
    md: "12px",
  },
  colors: {
    grey: [
      "#FFFFFF",
      "#F5F5F6",
      "#F7F7F8",
      "#EAEBED",
      "#D5D6DC",
      "#ACADB9",
      "#7B7C88",
      "#232134",
    ],
    blue: ["#DEECFF", "#C9E0FF", "#B7D6FF", "#92C1FF", "#5E96FC", "#3B7CD3"],
  },
};
