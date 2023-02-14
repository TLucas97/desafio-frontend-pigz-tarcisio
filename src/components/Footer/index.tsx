import { FooterWrapper } from "./style";
import { BaseSection } from "../BaseSection";
import pigzlogo from "../../assets/icons/pigz-uncolored.svg";
import appstore from "../../assets/icons/app-store.svg";
import googleplay from "../../assets/icons/google-play.svg";
import headset from "../../assets/icons/headset.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import youtube from "../../assets/icons/youtube.svg";
import orangeUncolored from "../../assets/icons/orange-uncolored.svg";

export const Footer = () => {
  return (
    <BaseSection bg="calm" height="100%">
      <FooterWrapper>
        <div className="content">
          <img src={pigzlogo} alt="pigz-uncolored" />
          <span className="logo-text">Tudo que você precisa</span>
          <div className="mobile-apps">
            <span className="title">Baixe o APP</span>
            <div className="apps">
              <img src={appstore} alt="app-store" />
              <img src={googleplay} alt="google-play" />
            </div>
          </div>
          <div className="list">
            <span className="title">Pigz</span>
            <span>Sobre o Pigz</span>
            <span>Portal do Parceiro</span>
            <span>Quero ser um Pigz Partner</span>
          </div>
          <div className="contact">
            <span className="title">
              <img src={headset} alt="contact" />
              Fale conosco
            </span>
            <span>falecom@pigz.com.br</span>
            <span>(95) 3224-2603</span>
            <span className="social-media-title">Pigz nas redes</span>
          </div>
          <div className="social-media">
            <img src={linkedin} alt="linkedin" />
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={youtube} alt="youtube" />
          </div>
        </div>
        <div className="divider">
          <hr />
        </div>
        <div className="footer">
          <div className="terms">
            <span>Nossos termos</span>
            <span>Privacidade</span>
            <span>Ajuda</span>
          </div>
          <div className="copyright">
            <span>
              © Copyright 2021 • Pigz • Todos os direitos reservados Orange Labs
              Tecnologia LTDA. CNPJ 34.895.008/0001-85
            </span>
            <img src={orangeUncolored} alt="orange-uncolored" />
          </div>
        </div>
      </FooterWrapper>
      <hr className="last-line" />
    </BaseSection>
  );
};
