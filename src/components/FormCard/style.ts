import styled from "styled-components";
import { baseColors } from "../../global";

export const FormCardContainer = styled.div`
  width: 92%;
  height: 557px;
  background: ${baseColors.light[1]};
  color: ${baseColors.dark[2]};
  border-radius: 32px;
  padding: 1.5em;
  display: flex;
  flex-direction: column;

  @media (max-width: 400px) {
    height: 100%;
    margin-bottom: 5em;
  }

  .title {
    font-size: 28px;
    font-weight: 600;
  }

  .subtitle {
    font-size: 13px;
    margin-top: 0.5em;
  }

  .disclaimer {
    font-size: 13px;
  }
`;
