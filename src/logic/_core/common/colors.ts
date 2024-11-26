type season = "winter" | "spring" | "summer" | "fall"

interface Color {
  default?: string
  selection?: string
}

interface Colors {
  primaryText: Color;
  secondaryText?: Color;
  bg: Color;
}

const colorPicker = ( season: season ): Colors => {
  switch (season) {
    case "winter":
      return {
        primaryText: {
          default: "text-primary-600",
          selection: "selection:text-primary-50",
        },
        secondaryText: {
          default: "text-primary-600",
          selection: "selection:text-primary-50",
        },
        bg: {
          default: "",
          selection: "selection:bg-primary-500",
        }
      };
  
    case "spring":
      return {
        primaryText: {
          default: "",
          selection: "",
        },
        bg: {
          default: "",
          selection: "",
        }
      };

    case "summer":
      return {
        primaryText: {
          default: "",
          selection: "",
        },
        bg: {
          default: "",
          selection: "",
        }
      };
  
    case "fall":
      return {
        primaryText: {
          default: "",
          selection: "",
        },
        bg: {
          default: "",
          selection: "",
        }
      };
  }
}

console.log(colorPicker("winter"));