import type { NPC } from "./zodSchemas/npcSchema";

export const defaultNpc: NPC = {
  id: 0,
  name: "",
  race: "",
  sex: "",
  alignment: "",
  strength: 0,
  dexterity: 0,
  constitution: 0,
  intelligence: 0,
  wisdom: 0,
  charisma: 0,
  personality: [],
  quirk: "",
};
