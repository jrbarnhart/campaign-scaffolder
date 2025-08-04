export const storageKeys = {
  npcs: "npcs",
};

export type StorageKey = (typeof storageKeys)[keyof typeof storageKeys];
