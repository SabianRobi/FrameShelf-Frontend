import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import pkg from "./package.json" with { type: "json" };

import "react";
import "react-dom";
import path from "node:path";

export default defineConfig({
    server: {
        port: 3000
    },
    plugins: [react(), tailwindcss()],
    optimizeDeps: {
        include: ["react/jsx-runtime"]
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    },
    define: {
        "import.meta.env.VITE_APP_VERSION": JSON.stringify(pkg.version)
    }
});
