import { getManyFromArray, getRandomArrayElement } from "../arrayUtils";
import {
  defaultAbilities,
  defaultAlignments,
  defaultChaoticTraits,
  defaultEvilTraits,
  defaultGoodTraits,
  defaultLawfulTraits,
  defaultNeutralTraits,
  defaultPronouns,
  defaultQuirks,
  defaultRaces,
  defaultSexes,
} from "@/lib/characterDefaults";
import type { NPC } from "../zodSchemas/npcSchema";

// For now this just generates random NPC's by selecting random elements from
// the arrays in characterDefaults.ts
export default function generateNpc(): NPC {
  const name = `Bob #${Math.floor(Math.random() * 1000).toString()}`;

  const race = getRandomArrayElement(defaultRaces) || "Error";

  const sex = getRandomArrayElement(defaultSexes) || "Error";

  const abilities = defaultAbilities.map((ability) => ({
    name: ability,
    value: Math.floor(Math.random() * 20),
  }));

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
  const personality = getManyFromArray(
    possibleTrais,
    personalityTraitCount,
  ) || ["Error"];

  const pronouns = getRandomArrayElement(defaultPronouns) || [
    "Unknown",
    "Error",
  ];

  const quirk = getRandomArrayElement(defaultQuirks) || "Error";

  const npc: NPC = {
    name,
    race,
    sex,
    abilities,
    alignment,
    personality,
    pronouns,
    quirk,
  };
  return npc;
}
