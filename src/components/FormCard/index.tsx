import { FormCardContainer } from "./style";
import { BaseInput } from "../BaseInput";
import { Spreader } from "../../global";
import { BaseButton } from "../BaseButton";

export const FormCard = () => {
  return (
    <FormCardContainer>
      <span className="title">Quero vender no Pigz</span>
      <span className="subtitle">
        Dê o primeiro passo para aumentar suas vendas
      </span>
      <Spreader size="medium" />
      <BaseInput label="Nome" placeholder="Leonercio Goesfeeld" />
      <Spreader size="small" />
      <BaseInput label="Email" placeholder="leonercio.goesfeeld@email.com" />
      <Spreader size="small" />
      <BaseInput label="Telefone" placeholder="(95) 99876-5432" phone />
      <Spreader size="small" />
      <span className="disclaimer">
        Ao continuar, aceito que a Pigz entre em contato comigo por telefone,
        e-mail ou WhatsApp.
      </span>
      <Spreader size="medium" />
      <BaseButton color="primary">Continuar</BaseButton>
    </FormCardContainer>
  );
};
