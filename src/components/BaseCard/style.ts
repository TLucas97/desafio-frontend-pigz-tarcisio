import styled from "styled-components";
import { baseColors, linearGradient } from "../../global";

export const sizes = {
  base: {
    w: "270px",
    h: "243px",
  },
  medium: {
    w: "382px",
    h: "472px",
  },
  large: {
    w: "382px",
    h: "472px",
  },
};

export const colors = {
  base: baseColors.light[2],
  gradient: linearGradient(baseColors.primary[1], baseColors.primary[2]),
};

interface CardProps {
  size: keyof typeof sizes;
  color: keyof typeof colors;
}

export const BaseCardWrapper = styled.div<CardProps>`
  width: ${(props) => sizes[props.size].w};
  height: ${(props) => sizes[props.size].h};
  background: ${(props) => colors[props.color]};
  border-radius: 64px;
  padding: 0;
  margin: 0;

  @media (max-width: 420px) {
    width: 95%;
    margin: 0 auto;
  }
`;
