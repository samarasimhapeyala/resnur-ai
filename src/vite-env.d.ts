/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** LinkedIn “Embed this post” iframe URL (optional) */
  readonly VITE_LINKEDIN_EMBED_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
