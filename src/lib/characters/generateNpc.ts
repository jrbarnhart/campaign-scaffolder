import {
  getManyFromArray,
  getNextId,
  getRandomArrayElement,
} from "../arrayUtils";
import {
  defaultAlignments,
  defaultChaoticTraits,
  defaultEvilTraits,
  defaultGoodTraits,
  defaultLawfulTraits,
  defaultNeutralTraits,
  defaultQuirks,
  defaultRaces,
  defaultSexes,
} from "@/lib/characters/characterDefaults";
import type { NPC } from "../zodSchemas/npcSchema";

// For now this generates random NPC's by selecting random elements from the arrays in characterDefaults.ts
// Ideally there will be something like archtype templates to help generate more typical characters
export default function generateNpc(localNpcs: NPC[]): NPC {
  const id = getNextId(localNpcs);

  const name = `Bob #${Math.floor(Math.random() * 1000).toString()}`;

  const race = getRandomArrayElement(defaultRaces) || "Error";

  const sex = getRandomArrayElement(defaultSexes) || "Error";

  const randomAbilityScore = () => Math.floor(Math.random() * 20 + 1);

  const alignment = getRandomArrayElement(defaultAlignments) || "Error";

  const personalityTraitCount = Math.floor(Math.random() * 6);
  let possibleTrais: string[] = [];
  switch (alignment) {
    case "Lawful Good":
      break;
    case "Neutral Good":
      possibleTrais = [...defaultGoodTraits, ...defaultNeutralTraits];
      break;
    case "Chaotic Good":
      possibleTrais = [...defaultGoodTraits, ...defaultChaoticTraits];
      break;
    case "Lawful Neutral":
      possibleTrais = [...defaultLawfulTraits, ...defaultNeutralTraits];
      break;
    case "True Neutral":
      possibleTrais = [...defaultNeutralTraits];
      break;
    case "Chaotic Neutral":
      possibleTrais = [...defaultChaoticTraits, ...defaultNeutralTraits];
      break;
    case "Lawful Evil":
      possibleTrais = [...defaultLawfulTraits, ...defaultEvilTraits];
      break;
    case "Neutral Evil":
      possibleTrais = [...defaultNeutralTraits, ...defaultEvilTraits];
      break;
    case "Chaotic Evil":
      possibleTrais = [...defaultChaoticTraits, ...defaultEvilTraits];
      break;
  }
  const personality = getManyFromArray(possibleTrais, personalityTraitCount);

  const quirk = getRandomArrayElement(defaultQuirks) || "Error";

  const npc: NPC = {
    id,
    name,
    race,
    sex,
    strength: randomAbilityScore(),
    dexterity: randomAbilityScore(),
    constitution: randomAbilityScore(),
    intelligence: randomAbilityScore(),
    wisdom: randomAbilityScore(),
    charisma: randomAbilityScore(),
    alignment,
    personality,
    quirk,
  };
  return npc;
}
