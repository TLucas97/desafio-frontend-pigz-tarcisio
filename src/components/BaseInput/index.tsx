import { InputWrapper } from "./style";
import flag from "../../assets/images/brazil-flag.png";
import { useState } from "react";

interface BaseInputProps {
  label: string;
  placeholder: string;
  phone?: boolean;
}

export const BaseInput: React.FC<BaseInputProps> = ({
  label,
  placeholder,
  phone,
}) => {
  const [value, setValue] = useState("");

  const BrazilianPhoneMask = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(BrazilianPhoneMask(value));
  };

  return (
    <InputWrapper>
      {label && <label htmlFor="base-input">{label}</label>}
      <div className="textfield">
        {phone ? (
          <>
            <div className="phone-area">
              <img src={flag} alt="brazil-flag" />
              <select>
                <option value="55">+55</option>
              </select>
            </div>
            <input
              id="base-input"
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={handlePhoneChange}
            />
          </>
        ) : (
          <input
            id="base-input"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        )}
      </div>
    </InputWrapper>
  );
};
