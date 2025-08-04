import type { StorageKey } from "@/lib/localStorage/storageKeys";
import { useEffect, useRef, useState, type SetStateAction } from "react";
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
  // Create react state initialized to parsed local storage item else defaultValue
  const touched = useRef(false);
  const [item, setItem] = useState(() => {
    try {
      // Return defaultValue if no item in local storage
      const existingItemString = localStorage.getItem(key);
      if (!existingItemString) {
        return defaultValue;
      }
      // Return parsed data if success else defaultValue
      const parseResult = schema.safeParse(JSON.parse(existingItemString));
      if (parseResult.success) {
        return parseResult.data;
      } else {
        return defaultValue;
      }
    } catch (error) {
      // On error log error and return defaultValue
      console.error(
        `Error while parsing ${key} in localStorage. Using default value.`,
        error,
      );
      return defaultValue;
    }
  });

  // When this state is changed, update the local state to match it
  useEffect(() => {
    try {
      const parseResult = schema.safeParse(item);
      if (parseResult.success) {
        localStorage.setItem(key, JSON.stringify(item));
        // Mark the state as touched
        touched.current = true;
        // If the state hasn't been touched yet then don't show error, as default values
        // match the infered Zod schema but don't always match the expected data constraints
      } else if (touched.current) {
        console.error(
          `Failed to set local storage item ${key}. Validation failed.`,
        );
      }
    } catch (error) {
      console.error(`Error while setting local storage item ${key}.`, error);
    }
  }, [item, key, schema]);

  return [item, setItem];
}
