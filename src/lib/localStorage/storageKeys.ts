export const storageKeys = {
  draftNpc: "draftNpc",
} as const;

export type StorageKey = (typeof storageKeys)[keyof typeof storageKeys];
