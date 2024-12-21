import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxInject: `import "primeicons/primeicons.css";
    import "primeflex/primeflex.css";
    import "primereact/resources/primereact.css";
    import "primereact/resources/themes/lara-light-indigo/theme.css";`,
  },
});
