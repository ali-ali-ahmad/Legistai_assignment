"use client";

import { lusitana } from "@/assets/font";
import { LoginButton } from "@/components/login/LoginButton";
import ICONS from "@/assets/svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { userLogin } from "@/redux/reducers/user.reducer";
import { LoginSchema } from "@/lib/validationSchema";
import { FormikInput } from "@/components/formik/FormikTextInput";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { handleSubmit, control } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: any) => {
    dispatch(userLogin({ id: Date.now(), ...data }));
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <FormikInput
            control={control}
            className={""}
            label={"Name"}
            name={"name"}
            placeholder={"Enter your Name"}
            icon={ICONS.personCover}
          />
          <FormikInput
            control={control}
            className={""}
            label={"Email"}
            name={"email"}
            placeholder={"Enter your email address"}
            icon={ICONS.mailAt}
          />
        </div>
        <LoginButton />
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        ></div>
      </div>
    </form>
  );
};

export default LoginForm;
