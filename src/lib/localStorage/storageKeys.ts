// Constant string values to be used as localStorage keys.
// If you change a value here make sure to delete the old value from localStorage.
export const storageKeys = {
  draftNpc: "draftNpc",
  npcs: "npcs",
} as const;

export type StorageKey = (typeof storageKeys)[keyof typeof storageKeys];
