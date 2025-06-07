import { cacheExchange, createClient, fetchExchange } from "@urql/core";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import { Provider } from "urql";

const client = createClient({
  url: process.env.PUBLIC_API_URL || "http://localhost:4000/query",
  exchanges: [cacheExchange, fetchExchange],
  suspense: true,
  fetchOptions: { credentials: "include" },
});

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Provider value={client}>{children}</Provider>
      <Toaster richColors />
    </>
  );
};
