import React from "react";
import { Control, Controller, UseControllerReturn } from "react-hook-form";
import { FormikInputType } from "./FormikInput.types";
import { Input } from "@/components/common";

const FormikTextInput = (
  props: FormikInputType & {
    control?: Control<Record<string, string>>;
  }
): JSX.Element => {
  const {
    name = "",
    defaultValue,
    control,
    className,
    label = "",
    register,
    icon,
    onChangeTextCb = () => undefined,
    errorVisible = true,
    regex,
    shouldTrim = false,
    onRegexFail = () => undefined,
    innerLabel = "",
    containerStyle = {},
    errorStyle = {
      borderBottomRightRadius: 5,
      borderBottomLeftRadius: 5,
      flexDirection: "row",
    },
    ...restOfProps
  } = props;

  const render = ({
    field: { onChange, onBlur, value },
    fieldState: { error },
  }: UseControllerReturn) => {
    const handleTextChanged = (text: string) => {
      if (!regex || text.length === 0 || text.match(regex)) {
        const newText = shouldTrim ? text?.trim() : text;
        onChangeTextCb(newText);
        onChange(newText);
      } else {
        onRegexFail();
      }
    };

    return (
      <div className={className}>
        <Input
          onChangeText={handleTextChanged}
          onBlur={onBlur}
          defaultValue={defaultValue}
          value={value}
          error={error?.message}
          errorVisible={errorVisible}
          name={name}
          icon={icon}
          register={register}
          label={label}
          {...restOfProps}
        />
        {!!error && errorVisible && (
          <div style={errorStyle}>
            <span className="error-message" style={{ color: "red" }}>
              {error?.message}
            </span>
          </div>
        )}
      </div>
    );
  };

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={render}
    />
  );
};
export default FormikTextInput;
