const theme = {
  colors: {
    white: "#ffffff",
    gray: "#bdc0c2",
    lightgray: "#eee",
    darkgray: "#bdc0c2",
    darkergray: "#616d76",
    // use this text for buttons, and when you need to display white text on a colored background
    // teal base is the primary color for confirmation buttons and banners
    // use yellow base for text only. For a yellow background, use yellow accent paired with gray8 text
    base: {
      red: "#b5082a",
      orange: "#c63615",
      yellow: "#a26201",
      green: "#377a00",
      teal: "#007a4d",
      blue: "#1f6cd1",
      purple: "#7b59cf"
    },
    // use this for icons, borders and other accents
    accent: {
      red: "#ce273e",
      orange: "#f26545",
      yellow: "#ffb300",
      green: "#59a215",
      teal: "#14a46c",
      blue: "#468fec",
      purple: "#9574e7"
    },
    // use this for active and hover states
    hover: {
      red: "#900621",
      orange: "#9e2b10",
      yellow: "#814e00",
      green: "#2c6100",
      teal: "#00613d",
      blue: "#1856a7",
      purple: "#6247a5"
    },
    // use this for light backgrounds, such as tags. pair with text in either base shades or gray8
    light: {
      red: "#900621",
      orange: "#9e2b10",
      yellow: "#814e00",
      green: "#2c6100",
      teal: "#00613d",
      blue: "#1856a7",
      purple: "#6247a5"
    },
    grays: {
      gray8: "#181f25", // for primary text, input hover border
      gray7: "#333b45",
      gray6: "#434a54",
      gray5: "#656d78", // for secondary text
      gray4: "#8c96a3",
      gray3: "#ccd1d9", // for disabled text, secondary button border
      gray2: "#e6e9ed", // for dividers and disabled icons
      gray1: "#f5f7fa" // for page backgrounds
    }
  }
};

export default theme;
