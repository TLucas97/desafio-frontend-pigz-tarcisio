import styled from "styled-components";
import { baseColors } from "../../global";

export const InputWrapper = styled.div`
  label {
    font-size: 12px;
    font-weight: 600;
    color: ${baseColors.dark[2]};
  }

  .textfield {
    width: 100%;
    height: 48px;
    background: ${baseColors.light[1]};
    border: 1px solid ${baseColors.dark[7]};
    border-radius: 16px 16px 16px 16px;
    display: flex;
    align-items: center;
    margin-top: 0.3em;

    .phone-area {
        background: ${baseColors.light[5]};
        border-radius: 16px 16px 16px 16px;
        width: 100px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 0.5em;

        img {
            width: 25px;
        }

        select {
            border: none;
            background: transparent;
        }
    }

    input {
      width: 95%;
      margin: 0 1em;
      border: none;

      &:focus {
        outline: none;
      }

      &::placeholder {
        font-size: 14px;
        color: ${baseColors.dark[8]};
      }
    }
  }
`;
