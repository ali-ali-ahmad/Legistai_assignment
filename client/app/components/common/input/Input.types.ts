import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface InputProps
  extends React.BaseHTMLAttributes<HTMLButtonElement> {
  label: string;
  inputType: string;
  name: string;
  placeholder: string;
  icon: string | StaticImport;
  required: boolean;
  error?: string | undefined;
  rest?: any;
  onBlur?: any;
  onChangeText?: any;
  errorVisible?: boolean;
}
