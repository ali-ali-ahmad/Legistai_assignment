import React from "react";

import { UseFormRegister } from "react-hook-form";

export interface FormikInputInterface {
  onChangeTextCb?: (_val: string) => void | undefined;
  shouldTrim?: boolean;
  containerStyle?: React.CSSProperties;
  errorStyle?: React.CSSProperties;
  register?: UseFormRegister<React.InputHTMLAttributes<HTMLInputElement>>;
  name: string;
  errorVisible?: boolean;
  testID?: string;
  className: React.CSSProperties;
  regex?: RegExp;
  innerLabel?: string;
  onRegexFail?: () => void;
  icon?: any;
  label?: string;
}

export type FormikInputType = FormikInputInterface &
  React.InputHTMLAttributes<HTMLInputElement>;
