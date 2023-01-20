
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://gql-federation-dev.azurewebsites.net/graphql/",
  documents: "src/**/*.tsx",
  generates: {
    "src/graphql2/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
