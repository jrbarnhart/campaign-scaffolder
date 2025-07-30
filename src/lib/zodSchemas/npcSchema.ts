import { z } from "zod";

const shortString = z.string().trim().min(1).max(64);
const mediumString = z.string().trim().min(1).max(256);
const longString = z.string().trim().min(1).max(512);

export const npcSchema = z.object({
  name: mediumString,
  sex: shortString,
  pronounSubject: shortString,
  pronounObject: shortString,
  race: shortString,
  abilities: z.array(z.object({ name: shortString, value: z.number().int() })),
  alignment: shortString,
  quirk: longString,
  personality: z.array(longString),
});

export type NPC = z.infer<typeof npcSchema>;
