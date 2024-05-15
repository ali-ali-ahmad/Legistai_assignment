import MainLogo from "@/components/common/mainLogo/MainLogo";
import LoginForm from "@/components/login/loginForm/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="mx-auto max-w-[400px] space-y-2.5">
        <div className="flex flex-col gap-5">
          <MainLogo />
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
