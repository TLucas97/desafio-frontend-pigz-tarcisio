import { PresentationAreaContainer } from "./styles";
import burguerImg from "../../assets/images/burguer.png";

export const PresentationArea = () => {
  return (
    <PresentationAreaContainer>
      <div className="first-text">
        <div className="message">
          <span>Pigz: tudo que você precisa pra vender ainda mais!</span>
        </div>
        <div className="burguer">
          <img src={burguerImg} alt="burguer" />
        </div>
      </div>
      <div className="second-text">
        <span>
          Temos uma equipe ansiosa para cadastrar seus produtos no Pigz
          Marketplace e deixar sua loja prontinha para iniciar as vendas.
        </span>
      </div>
    </PresentationAreaContainer>
  );
};

export default PresentationArea;
