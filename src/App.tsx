import { LoginForm } from "@/src/components/login-form";
import { Providers } from "./context/providers";
import "./styles/globals.css";

const App = () => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="w-12 h-12 rounded-full bg-primary/5 shadow-xl mx-auto flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/uspk/image/upload/v1642566273/logos/svg/uspk-u-mark.svg"
              className="size-10"
              alt=""
            />
          </div>
        </a>
        <LoginForm />
      </div>
    </div>
  );
};

export default App;
