import styled from "styled-components";
import { baseColors } from "../../global";

export const PigzItensWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: ${baseColors.dark[2]};

  .title {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    width: 300px;

    @media (max-width: 420px) {
      width: 100%;
    }
  }

  .subtitle {
    font-size: 16px;
    text-align: center;
    width: 300px;
    margin-top: 1em;

    @media (max-width: 420px) {
      width: 100%;
    }
  }

  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5em;

    .content {
      width: 100%;
      height: 95%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .card-title {
        font-size: 20px;
        font-weight: bold;
      }

      .card-subtitle {
        font-size: 16px;
      }
    }
  }

  .pricing {
    font-size: 32px;
    text-align: center;
    font-weight: bold;
    width: 350px;

    @media (max-width: 420px) {
      width: 100%;
    }
  }

  .pricing-detail {
    font-size: 16px;
    text-align: center;
    font-weight: 400;
    width: 280px;
    margin-top: 1em;
  }

  .lines {
    display: flex;
    gap: 1em;

    @media (max-width: 420px) {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    .selected {
      background: ${baseColors.primary[1]};
    }

    hr {
      width: 85px;
      height: 5px;
      border: none;
      background: ${baseColors.light[4]};
      border-radius: 32px 32px 32px 32px;
    }
  }

  .marketplace {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      color: ${baseColors.light[1]};

      .card-text {
        font-size: 15px;
        width: 300px;
        text-align: center;
        margin-top: 2em;

        @media (max-width: 420px) {
          width: 100%;
        }
      }

      .phone-img {
        @media (max-width: 420px) {
          width: 100%;
        }
      }
    }
  }

  .payment {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2em;

    .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 1.8em;

      @media (max-width: 420px) {
        padding: 1.4em;
      }

      .top-area {
        width: 90%;
        height: 250px;
        display: flex;
        flex-direction: column;

        .title {
          text-align: start;
          font-size: 24px;

          @media (max-width: 420px) {
            width: 100%;
            font-size: 20px;
          }
        }

        .subtitle {
          text-align: start;
          margin-top: 0.3em;
          color: ${baseColors.dark[4]};
        }

        .list {
          margin-top: 1em;
          display: flex;
          flex-direction: column;
          gap: 0.5em;

          span {
            font-size: 14px;

            @media (max-width: 420px) {
              font-size: 12px;
            }
          }
        }

        .highlight {
          margin-top: 1.5em;
          padding: 1em;
          background: ${baseColors.light[1]};
          font-size: 20px;
          border-radius: 32px;
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .small {
          width: 160px;

          @media (max-width: 420px) {
            width: 100%;
          }
        }

        .large {
          width: 260px;

          @media (max-width: 420px) {
            width: 100%;
          }
        }
      }

      .bottom-area {
        width: 90%;
      }
    }
  }

  .call {
    font-size: 16px;
    font-weight: 600;

    .wpp {
      margin: 0 0.3em 0 1.2em;
    }

    .smaller {
      font-size: 12px;
    }
  }
`;
