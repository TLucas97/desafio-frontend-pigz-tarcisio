import styled from "styled-components";
import { baseColors, linearGradient } from "../../global";

export const colors = {
  gradient: linearGradient(baseColors.primary[1], baseColors.primary[2]),
  primary: baseColors.primary[1],
};

interface ButtonProps {
  color: keyof typeof colors;
  shadow?: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 50px;
  background: ${(props) => colors[props.color]};
  color: ${baseColors.light[1]};
  border-radius: 16px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  box-shadow: ${(props) =>
    props.shadow ? `4px 20px 28px -10px ${baseColors.primary[1]}` : "none"};
`;
