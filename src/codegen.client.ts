import type { CodegenConfig } from "@graphql-codegen/cli";
import { addTypenameSelectionDocumentTransform } from "@graphql-codegen/client-preset";
import path from "node:path";

const config: CodegenConfig = {
  schema: path.resolve(__dirname, "../schema.graphql"),
  documents: ["src/graphql/*.graphql"],
  ignoreNoDocuments: true,
  generates: {
    "src/graphql/gql/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        fragmentMasking: false,
        persistedDocuments: true,
      },
      documentTransforms: [addTypenameSelectionDocumentTransform],
      config: {
        useTypeImports: true,
      },
    },
    "src/graphql/generated/msw.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-msw"],
    },
  },
};

export default config;
