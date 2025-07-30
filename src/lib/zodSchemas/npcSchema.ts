import { z } from "zod";

const shortString = z.string().trim().min(1).max(64);
const mediumString = z.string().trim().min(1).max(256);
const longString = z.string().trim().min(1).max(512);

const abilityScore = z.number().int().min(0).max(30);

export const npcSchema = z.object({
  name: mediumString,
  sex: shortString,
  race: shortString,
  strength: abilityScore,
  dexterity: abilityScore,
  constitution: abilityScore,
  intellect: abilityScore,
  wisdom: abilityScore,
  charisma: abilityScore,
  alignment: shortString,
  quirk: longString,
  personality: z.array(longString),
});

export type NPC = z.infer<typeof npcSchema>;
