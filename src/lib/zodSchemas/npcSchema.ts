import { z } from "zod";
import {
  zAbilityScore,
  zLongString,
  zMediumString,
  zRecordId,
  zShortString,
} from "./schemaComponents";

export const npcSchema = z.object({
  id: zRecordId,
  name: zMediumString,
  sex: zShortString,
  race: zShortString,
  strength: zAbilityScore,
  dexterity: zAbilityScore,
  constitution: zAbilityScore,
  intelligence: zAbilityScore,
  wisdom: zAbilityScore,
  charisma: zAbilityScore,
  alignment: zShortString,
  quirk: zLongString,
  personality: z.array(zLongString),
});

export type NPC = z.infer<typeof npcSchema>;
