import styled from "styled-components";
import { baseColors, linearGradient } from "./../../global";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  padding: 0 1em;

  button {
    background: ${linearGradient(baseColors.primary[2], baseColors.primary[1])};
    box-shadow: 4px 20px 28px -10px ${baseColors.primary[1]};
    color: ${baseColors.light[1]};
    font-weight: bold;
    font-size: 14px;
    width: 158px;
    height: 32px;
    border: none;
    border-radius: 17px;
  }
`;
