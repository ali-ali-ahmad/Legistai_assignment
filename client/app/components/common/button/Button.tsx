import { ButtonProps } from "./Button.types";

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
};

export default Button;
