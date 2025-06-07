import { cn } from "@/src/lib/utils";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { useState } from "react";
import { useMutation } from "urql";
import {
  LoginDocument,
  LoginMutation,
  LoginMutationVariables,
} from "@/src/graphql/gql/graphql";
import { toast } from "sonner";
import { LoaderCircleIcon } from "lucide-react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [, loginAction] = useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument
  );
  const [loading, setLoading] = useState(false);

  const onLoginAction = async (data: { email: string; password: string }) => {
    try {
      setLoading(true);
      const { email, password } = data;

      const result = await loginAction({
        input: {
          email,
          password,
        },
      });

      if (result?.data?.login.token) {
        if (result.data.login.role === "admin") {
          window.location.href = "https://api.uspkacademy.com";
          setLoading(false);
        } else {
          toast.error("Sin acceso a este recurso", {
            description:
              "Al parecer no tienes acceso a este recurso, contacta a tu administrador.",
          });
          setLoading(false);
        }
      } else {
        console.error("Ocurrio un error", result.error);
        setLoading(false);
        toast.error("Ocurrio un error", {
          description: result.error?.graphQLErrors[0].message,
        });
      }
    } catch (error) {
      toast.error("Ocurrio un error", {
        description: "Intentalo nuevamenete.",
      });
      console.error("Ocurrio un error", error);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>Login with your credentials.</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const email = formData.get("email") as string;
              const password = formData.get("password") as string;
              await onLoginAction({ email, password });
            }}
          >
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="https://uspkacademy.com/password/reset"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <LoaderCircleIcon
                        className="-ms-1 animate-spin"
                        size={16}
                        aria-hidden="true"
                      />
                      Iniciando sesion
                    </>
                  ) : (
                    "Iniciar sesion"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
