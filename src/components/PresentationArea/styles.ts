import styled from "styled-components";
import { baseColors } from "../../global";

export const PresentationAreaContainer = styled.div`
  width: 100%;
  color: ${baseColors.light[1]};
  overflow: hidden;

  .first-text {
    display: flex;
    justify-content: flex-end;
    font-weight: bold;

    .message {
      position: absolute;
      width: 300px;
      margin-left: 1em;
      left: 0;
      margin-top: 2em;

      @media (max-width: 400px) {
        width: 250px;
      }

      @media (max-width: 320px) {
        width: 200px;
      }

      span {
        font-size: 40px;
        line-height: 1.2em;

        @media (max-width: 400px) {
          font-size: 30px;
        }

        @media (max-width: 320px) {
          font-size: 25px;
        }
      }
    }

    .burguer {
      width: 160px;
    }
  }

  .second-text {
    margin-top: 0.5em;
    margin-left: 1em;
    width: 90%;
  }
`;
