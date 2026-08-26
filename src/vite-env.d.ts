/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GAME_TITLE?: string;
  readonly VITE_DEBUG?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}