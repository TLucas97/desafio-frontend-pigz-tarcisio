import styled from "styled-components";
import { baseColors } from "../../global";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  width: 95%;
  color: ${baseColors.dark[3]};

  .content {
    margin-top: 3.5em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .title {
      font-size: 16px;
      font-weight: 600;
    }

    img {
      width: 80px;
    }

    .logo-text {
      font-size: 11px;
      margin-top: 0.8em;
    }

    .mobile-apps {
      margin-top: 2em;

      .apps {
        margin-top: 1em;
        display: flex;
        gap: 0.8em;
      }
    }

    .list {
      margin-top: 3.5em;
      display: flex;
      flex-direction: column;
      gap: 1.2em;
    }

    .contact {
      margin-top: 3.5em;
      display: flex;
      flex-direction: column;
      gap: 1.2em;

      .title {
        display: flex;
        align-items: center;
        gap: 0.5em;

        img {
          width: 24px;
        }
      }

      .social-media-title {
        font-weight: 600;
      }
    }

    .social-media {
      margin-top: 1.2em;
      display: flex;
      gap: 1.2em;

      img {
        width: 25px;
      }
    }
  }

  .divider {
    margin-top: 3.5em;
    margin-bottom: 1em;

    hr {
      width: 95%;
      height: 1px;
      margin: 0 auto;
    }
  }

  .footer {
    padding: 0 0.7em;

    .terms {
      display: flex;
      gap: 1.2em;
      font-size: 12px;
      font-weight: 600;
    }

    .copyright {
      margin: 3em 0;
      font-size: 10px;
      display: flex;
      justify-content: space-between;

      span {
        max-width: 300px;
      }
    }
  }
`;
