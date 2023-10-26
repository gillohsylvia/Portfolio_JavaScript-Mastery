import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const cherryPickedKeys = [
    "REACT_APP_SANITY_PROJECT_ID",
    "REACT_APP_SANITY_TOKEN",
  ];

  const env = loadEnv(mode, process.cwd(), "");
  const processEnv = {};
  cherryPickedKeys.forEach((key) => {
    processEnv[key] = JSON.stringify(env[key]);
  });

  return {
    plugins: [
      react(),
      // ... other plugins you might have
    ],
    resolve: {
      alias: {
        // "react-tooltip": "react-tooltip@5.21.6", // Adjust version as needed
      },
    },
    optimizeDeps: {
      exclude: [""], // Exclude the react-tooltip package from optimization
    },
    define: {
      "process.env": processEnv,
    },
  };
});
