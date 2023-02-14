import styled from "styled-components";
import { baseColors, linearGradient } from "../../global";

export const backgrounds = {
  gradient: linearGradient(baseColors.primary[2], baseColors.primary[1]),
  white: baseColors.light[1],
  calm: baseColors.light[2],
};

interface IBaseSectionWrapper {
  bg: keyof typeof backgrounds;
  height: string;
}

export const BaseSectionWrapper = styled.section<IBaseSectionWrapper>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: ${(height) => height.height};
  background: ${(bg) => backgrounds[bg.bg]};
`;
