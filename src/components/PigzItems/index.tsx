import { PigzItensWrapper } from "./style";
import { BaseCard } from "../BaseCard";
import { BaseButton } from "../BaseButton";
import { Spreader } from "../../global";
import storeIcon from "../../assets/icons/storefront.svg";
import printer from "../../assets/icons/printer.svg";
import gestor from "../../assets/icons/gestor.svg";
import phone from "../../assets/icons/phone.svg";
import wpp from "../../assets/icons/wpp.svg";
import twoPhones from "../../assets/images/two-phones.png";

export const PigzItems = () => {
  return (
    <PigzItensWrapper>
      <Spreader size="medium" />
      <Spreader size="large" />
      <span className="title">Você tem um novo Pigzdido!</span>
      <Spreader size="medium" />
      <div className="cards">
        <BaseCard size="base" color="base">
          <div className="content">
            <img src={storeIcon} alt="store-front" />
            <span className="card-title">Marketplace</span>
            <span className="card-subtitle">Pra sua loja vender mais</span>
          </div>
        </BaseCard>
        <BaseCard size="base" color="base">
          <div className="content">
            <img src={phone} alt="store-front" />
            <span className="card-title">É fácil e rápido</span>
            <span className="card-subtitle">Fazer um pedido no Pigz</span>
          </div>
        </BaseCard>
        <BaseCard size="base" color="base">
          <div className="content">
            <img src={gestor} alt="store-front" />
            <span className="card-title">Pigz Gestão</span>
            <span className="card-subtitle">Você no controle, sempre</span>
          </div>
        </BaseCard>
        <BaseCard size="base" color="base">
          <div className="content">
            <img src={printer} alt="store-front" />
            <span className="card-title">Vias de impressão</span>
            <span className="card-subtitle">Personalizáveis</span>
          </div>
        </BaseCard>
      </div>
      <Spreader size="large" />
      <span className="pricing">
        Tudo que você precisa por apenas R$199/mês
      </span>
      <span className="pricing-detail">
        Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão por
        cada venda, sem letrinhas miúdas.
      </span>
      <Spreader size="large" />
      <div className="lines">
        <hr className="selected" />
        <hr />
        <hr />
        <hr />
      </div>
      <Spreader size="large" />
      <div className="marketplace">
        <span className="title">Marketplace</span>
        <Spreader size="medium" />
        <BaseCard size="medium" color="gradient">
          <div className="content">
            <span className="card-text">
              Além de uma página exclusiva, com o Pigz Marketplace sua loja terá
              mais visibilidade, no app e no site. Uma vitrine com milhares de
              clientes todos os dias, pra vender muito mais.
            </span>
            <img src={twoPhones} alt="phones" className="phone-img" />
          </div>
        </BaseCard>
      </div>
      <Spreader size="medium" />
      <Spreader size="medium" />
      <span className="title">E mais: suporte que realmente funciona!</span>
      <span className="subtitle">
        Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre
        disponível pra ajudar você e seus clientes.
      </span>
      <Spreader size="medium" />
      <div className="payment">
        <BaseCard size="large" color="base">
          <div className="content">
            <div className="top-area">
              <span className="title">Pigz</span>
              <span className="subtitle">Tudo o que você precisa</span>
              <div className="list">
                <span>Pigz Marketplace</span>
                <span>Página exclusiva</span>
                <span>Pigz gestão Desktop e Mobile</span>
                <span>Gestão de entregadores</span>
                <span>Vias de impressão personalizáveis</span>
              </div>
              <span className="highlight small">R$ 199/mês</span>
            </div>
            <div className="bottom-area">
              <BaseButton color="gradient" shadow>
                Vender no Pigz agora
              </BaseButton>
            </div>
          </div>
        </BaseCard>
        <BaseCard size="large" color="base">
          <div className="content">
            <div className="top-area">
              <span className="title">Pagamento On-line</span>
              <span className="subtitle">Segurança e agilidade</span>
              <div className="list">
                <span>Aceite Pix e Cartão de Crédito</span>
                <span>Antecipação Pix automática</span>
                <span>Não dependa de maquininha de cartão</span>
                <span>Segurança para receber pedidos</span>
                <span>Agilidade para entregar</span>
              </div>
              <span className="highlight large">2,99% por transação</span>
            </div>
            <div className="bottom-area">
              <BaseButton color="gradient" shadow>
                Vender no Pigz agora
              </BaseButton>
            </div>
          </div>
        </BaseCard>
      </div>
      <Spreader size="medium" />
      <span className="call">
        Fale com a Pigz
        <img src={wpp} alt="whatsapp" className="wpp" />
        <span className="smaller">95</span> 3224-2603
      </span>
      <Spreader size="medium" />
    </PigzItensWrapper>
  );
};
