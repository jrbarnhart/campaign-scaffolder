export const storageKeys = {
  npcs: "npcs",
} as const;

export type StorageKey = (typeof storageKeys)[keyof typeof storageKeys];
