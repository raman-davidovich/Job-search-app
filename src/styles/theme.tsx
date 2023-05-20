import { MantineThemeOverride } from "@mantine/core";

export const Theme: MantineThemeOverride = {
  loader: "bars",
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
  spacing: {
    xxs: "8px",
    xs: "12px",
    sm: "16px",
    md: "20px",
    lg: "28px",
    xl: "32px",
  },
  colors: {
    grey: [
      "#FFFFFF",
      "#F5F5F6",
      "#F7F7F8",
      "#EAEBED",
      "#E5E5E5",
      "#D5D6DC",
      "#ACADB9",
      "#7B7C88",
      "#232134",
    ],
    blue: ["#DEECFF", "#C9E0FF", "#B7D6FF", "#92C1FF", "#5E96FC", "#3B7CD3"],
  },
};
// How to rewrite styles for standart components

{
  /* <MantineProvider
inherit
theme={{
  components: {
    InputWrapper: {
      styles: (theme) => ({
        label: {
          backgroundColor:
            theme.colorScheme === 'dark' ? 'rgba(255, 255, 255, .1)' : 'rgba(0, 0, 0, .1)',
        },
      }),
    },

    Input: {
      styles: (theme) => ({
        input: { borderColor: theme.colors.violet[theme.fn.primaryShade()] },
      }),
    },
  },
}}
> */
}
