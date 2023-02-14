import styled, { createGlobalStyle } from "styled-components";

export const BodyStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
`;

export const linearGradient = (color1: string, color2: string) => {
  return `linear-gradient(to right, ${color1}, ${color2})`;
};

const sizes = {
  small: "0.5em",
  medium: "1em",
  large: "2em",
};

interface SpreadSizes {
  size: keyof typeof sizes;
}

export const Spreader = styled.div<SpreadSizes>`
  margin: ${(props) => sizes[props.size]} 0;
`;

interface IBaseColors {
  primary: {
    1: string;
    2: string;
    3: string;
    4: string;
  };
  light: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  };
  dark: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
  };
}

export const baseColors: IBaseColors = {
  primary: {
    1: "#FA641E",
    2: "#FF881F",
    3: "#FF671F",
    4: "#FF671F52",
  },
  light: {
    1: "#FFFFFF",
    2: "#FAFAFA",
    3: "#00000014",
    4: "#EEEEEE",
    5: "#F0F0F0",
  },
  dark: {
    1: "#000000",
    2: "#333333",
    3: "#676767",
    4: "#666666",
    5: "#00000052",
    6: "#9F9F9F",
    7: "#999999",
    8: "#CCCCCC",
  },
};

export const AppWrapper = styled.div`
  .pigz-pigz {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 1015px;
  }

  .last-line {
    width: 100%;
    height: 8px;
    background-color: ${baseColors.primary[1]};
  }
`;
