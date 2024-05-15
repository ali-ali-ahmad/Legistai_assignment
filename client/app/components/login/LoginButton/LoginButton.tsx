import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/common";

const LoginButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      className="mt-4 w-full hover:bg-[#36bcbc]/75 hover:text-[#ffff] flex h-10 items-center rounded-lg bg-[#36bcbc] px-4 text-sm font-medium text-white transition-colors"
      aria-disabled={pending}
    >
      Log in{" "}
      <ArrowRightIcon className="ml-auto h-5 w-5 text-white group-hover:text-[#ffff]" />
    </Button>
  );
};

export default LoginButton;
