import { HeaderWrapper } from "./styles"
import pigz_logo from "../../assets/images/pigz-logo.svg"

export const Header = () => {
  return (
    <HeaderWrapper>
        <div>
            <img src={pigz_logo} alt="pigz-logo" />
        </div>
        <button>
            Já sou parceiro
        </button>
    </HeaderWrapper>
  )
}
