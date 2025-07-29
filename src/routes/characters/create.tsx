import MainMenu from "@/components/controls/MainMenu";
import UndoControls from "@/components/controls/UndoControls";
import {
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
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
  type NPC,
} from "@/lib/characterDefaults";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/characters/create")({
  component: RouteComponent,
});

function RouteComponent() {
  const [npcs, setNpcs] = useState<NPC[]>([]);

  function getRandomArrayElement<T>(arr: T[]): T | undefined {
    if (!Array.isArray(arr) || arr.length === 0) {
      return undefined;
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  function shuffleArray<T>(arr: T[]): T[] {
    const shuffledArr = [...arr];
    let currentIndex = shuffleArray.length;
    let randomIndex: number;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [shuffledArr[currentIndex], shuffledArr[randomIndex]] = [
        shuffledArr[randomIndex],
        shuffledArr[currentIndex],
      ];
    }

    return shuffledArr;
  }

  function getManyFromArray<T>(arr: T[], count: number): T[] | undefined {
    if (!Array.isArray(arr) || arr.length === 0) {
      return undefined;
    }
    const shuffledArr = shuffleArray(arr);
    const selected = shuffledArr.slice(0, count);
    return selected;
  }

  // For now this just generates random NPC's by selecting random elements from
  // the arrays in characterDefaults.ts
  const generateNpc = (): NPC => {
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
  };

  const handleCreateNewCharacter = () => {
    const newNpc = generateNpc();
    setNpcs((prev) => [...prev, newNpc]);
  };

  return (
    <div className="relative h-svh overflow-hidden">
      <div className="absolute right-4 bottom-4">
        <UndoControls />
      </div>
      <section className="overflow-auto p-2">
        {/* Tabs for different groups of NPC's*/}
        <div className="border-b-2">
          <h1 className="w-fit rounded-tl-xl rounded-tr-xl border-2 border-b-0 px-1.5 py-1 text-lg font-semibold">
            All NPC's
          </h1>
        </div>
        {/* List that renders NPC's */}
        <ul className="grid gap-3">
          {npcs.length > 0 ? (
            npcs.map((npc, index) => (
              <li key={`npc-#${index.toString()}`} className="bg-pink-300">
                {/* Name */}
                <p>Name: {npc.name}</p>
                {/* Race */}
                <p>Race: {npc.race}</p>
                {/* Sex */}
                <p>Sex: {npc.sex}</p>
                {/* Pronouns */}
                <p>
                  Pronouns:{" "}
                  {`${npc.pronouns[0][0].toUpperCase() + npc.pronouns[0].slice(1)}/${npc.pronouns[1][0].toUpperCase() + npc.pronouns[1].slice(1)} `}
                </p>
                {/* Abilities */}
                <div>
                  {npc.abilities.map((ability, index) => (
                    <p key={`${ability.name}-${index.toString()}`}>
                      {ability.name}: {ability.value}
                    </p>
                  ))}
                </div>
                {/* Alignment */}
                <p>Alignment: {npc.alignment}</p>
                {/* Personality Traits */}
                <div>
                  {npc.personality.map((trait, index) => (
                    <p key={`trait-${index.toString()}`}>{trait}</p>
                  ))}
                </div>
                {/* Quirk */}
                <p>Quirk: {npc.quirk}</p>
              </li>
            ))
          ) : (
            <p>No NPC's exist yet. Try creating one!</p>
          )}
        </ul>
      </section>
      <div className="absolute bottom-4 left-4 md:top-4">
        <MainMenu>
          <DropdownMenuItem onClick={handleCreateNewCharacter}>
            Create New Character <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
        </MainMenu>
      </div>
    </div>
  );
}
