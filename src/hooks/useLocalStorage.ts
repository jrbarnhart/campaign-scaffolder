import type { StorageKey } from "@/lib/localStorage/storageKeys";
import { useEffect, useState, type SetStateAction } from "react";
import type { ZodType } from "zod";

type UseLocalStorageProps<T> = {
  key: StorageKey;
  schema: ZodType<T>;
  defaultValue: T;
};

export default function useLocalStorage<T>({
  key,
  schema,
  defaultValue,
}: UseLocalStorageProps<T>): [T, React.Dispatch<SetStateAction<T>>] {
  // Create react state initialized to local storage val or default val
  const [item, setItem] = useState(() => {
    try {
      const existingItemString = localStorage.getItem(key);
      const parseResult = schema.safeParse(
        JSON.parse(existingItemString || "{}"),
      );
      return parseResult.success ? parseResult.data : defaultValue;
    } catch (error) {
      console.error(
        `There was an error while parsing ${key} in localStorage.`,
        error,
      );
      return defaultValue;
    }
  });

  // When this state is changed, update the local state to match it
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(item));
  }, [item, key]);

  return [item, setItem];
}
