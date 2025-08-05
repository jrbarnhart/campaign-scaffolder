import type { NPC } from "@/lib/zodSchemas/npcSchema";
import { createContext, type SetStateAction } from "react";

export type LocalNpcsContextType = {
  localNpcs: NPC[];
  setLocalNpcs: React.Dispatch<SetStateAction<NPC[]>>;
};

export const LocalNpcsContext = createContext<LocalNpcsContextType | null>(
  null,
);
