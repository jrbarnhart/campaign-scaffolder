import MainMenu from "@/components/controls/MainMenu";
import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import type { NPC } from "@/lib/zodSchemas/npcSchema";

import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/characters/")({
  component: RouteComponent,
});

function RouteComponent() {
  // TODO: Replace with local storage hook
  const [npcs, setNpcs] = useState<NPC[]>([]);

  return (
    <div className="relative h-svh overflow-hidden">
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
                {/* Abilities */}
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
            <div className="flex flex-col items-center space-y-4 pt-10">
              <p>No NPC's exist yet.</p>
              <Button asChild>
                <Link to="/characters/create" className="text-accent">
                  Try creating one!
                </Link>
              </Button>
            </div>
          )}
        </ul>
      </section>
      <div className="absolute bottom-4 left-4 md:top-4">
        <MainMenu>
          <DropdownMenuItem>
            <Link to="/characters/create">Create a Character</Link>
          </DropdownMenuItem>
        </MainMenu>
      </div>
    </div>
  );
}
