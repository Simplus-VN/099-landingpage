function supportsLocalStorage(): boolean {
  return typeof Storage !== "undefined";
}

export const set = (key: string, value: unknown): void => {
  if (supportsLocalStorage()) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const get = <T>(key: string): T | null | undefined => {
  if (supportsLocalStorage()) {
    try {
      const value = localStorage.getItem(key);
      if (value === null) return null;
      return JSON.parse(value) as T;
    } catch (e) {
      console.error(e);
      localStorage.setItem(key, "null");
      return null;
    }
  }
  return undefined;
};

export const clearAll = (): void => {
  if (supportsLocalStorage()) {
    window.localStorage.clear();
  }
};

export const remove = (key: string): void => {
  if (supportsLocalStorage()) {
    window.localStorage.removeItem(key);
  }
};

export const KEYS = {
  TOKEN: "TOKEN",
} as const;

export default {
  set,
  get,
  clearAll,
  remove,
};
