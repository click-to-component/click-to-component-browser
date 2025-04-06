interface IReplacement {
  pattern: string;
  replacement: string;
  isRegExp?: boolean;
}

declare global {
  interface Window {
    __CLICK_TO_COMPONENT_URL_FUNCTION__: (
      sourceCodeLocation: string,
    ) => string | Promise<string>;
    __CLICK_TO_COMPONENT_CONFIG__: {
      replacements?: IReplacement[];
    };
  }
}

export {};
