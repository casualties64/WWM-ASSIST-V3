// FIX: Replaced vite/client reference with a minimal definition to resolve the type error.
// The original issue is likely an environment problem (missing vite dependency).
interface ImportMetaEnv {
  readonly BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Augment NodeJS namespace to add API_KEY to ProcessEnv.
// This works because the error indicates 'process' is already defined with type 'Process' (from @types/node).
declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
    [key: string]: string | undefined;
  }
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.webp' {
  const value: string;
  export default value;
}

declare module '*.ico' {
  const value: string;
  export default value;
}

declare module '*.bmp' {
  const value: string;
  export default value;
}