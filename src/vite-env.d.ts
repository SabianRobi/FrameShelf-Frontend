/// <reference types="vite/client" />

type ImportMetaEnv = {
    readonly VITE_BACKEND_URL: string;
    readonly VITE_DEBUG: string;
};

type ImportMeta = {
    readonly env: ImportMetaEnv;
};
