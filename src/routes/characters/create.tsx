import MainMenu from "@/components/controls/MainMenu";
import UndoControls from "@/components/controls/UndoControls";
import {
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";

import generateNpc from "@/lib/characters/generateNpc";
import type { NPC } from "@/lib/zodSchemas/npcSchema";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/characters/create")({
  component: RouteComponent,
});

function RouteComponent() {
  const [npc, setNpc] = useState<NPC | null>();

  const handleCreateNewCharacter = () => {
    const newNpc = generateNpc();
    setNpc(newNpc);
  };

  return (
    <div className="relative h-svh overflow-hidden">
      <div className="absolute right-4 bottom-4">
        <UndoControls />
      </div>
      <section className="overflow-auto p-2">
        {/* <form className="bg-pink-300">
 
            <p>Name: {npc.name}</p>
 
            <p>Race: {npc.race}</p>
 
            <p>Sex: {npc.sex}</p>
 
            <p>
              Pronouns:{" "}
              {`${npc.pronouns[0][0].toUpperCase() + npc.pronouns[0].slice(1)}/${npc.pronouns[1][0].toUpperCase() + npc.pronouns[1].slice(1)} `}
            </p>
 
            <div>
              {npc.abilities.map((ability, index) => (
                <p key={`${ability.name}-${index.toString()}`}>
                  {ability.name}: {ability.value}
                </p>
              ))}
            </div>
 
            <p>Alignment: {npc.alignment}</p>
 
            <div>
              {npc.personality.map((trait, index) => (
                <p key={`trait-${index.toString()}`}>{trait}</p>
              ))}
            </div>
 
            <p>Quirk: {npc.quirk}</p>
          </form> */}
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
