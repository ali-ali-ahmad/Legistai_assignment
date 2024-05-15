import { InputProps } from "./Input.types";
import Image from "next/image";

const Input = (props: InputProps) => {
  const {
    id,
    inputType,
    name,
    placeholder,
    className,
    label,
    icon,
    required,
    error,
    rest,
    onBlur,
    onChangeText = undefined,
    errorVisible = false,
    defaultValue = "",
  } = props;
  return (
    <div className={className}>
      <label
        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative">
        <input
          onError={errorVisible}
          {...rest}
          onChange={onChangeText}
          onBlur={onBlur}
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-4 placeholder:text-gray-500 focus:border-[#7aaf9f]"
          id={id}
          type={inputType}
          name={name}
          placeholder={placeholder}
          required={required}
          defaultValue={defaultValue}
        />
        <Image
          className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
          src={icon}
          height={20}
          width={20}
          alt={name}
        />
      </div>
    </div>
  );
};

export default Input;
