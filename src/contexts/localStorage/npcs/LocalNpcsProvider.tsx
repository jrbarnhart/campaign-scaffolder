import useLocalStorage from "@/hooks/useLocalStorage";
import { storageKeys } from "@/lib/localStorage/storageKeys";
import { npcSchema } from "@/lib/zodSchemas/npcSchema";
import { useMemo } from "react";
import z from "zod";
import { LocalNpcsContext } from "./LocalNpcsContext";

export default function LocalNpcsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [localNpcs, setLocalNpcs] = useLocalStorage({
    key: storageKeys.npcs,
    schema: z.array(npcSchema),
    defaultValue: [],
  });

  const contextValue = useMemo(
    () => ({
      localNpcs,
      setLocalNpcs,
    }),
    [localNpcs, setLocalNpcs],
  );

  return <LocalNpcsContext value={contextValue}>{children}</LocalNpcsContext>;
}
