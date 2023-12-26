import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      proxy: {
        "/graphql": {
          target: env.VITE_GRAPHQL_URL,
        },
      },
    },
  };
});
