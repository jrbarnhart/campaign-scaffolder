import MainMenu from "@/components/controls/MainMenu";
import CreateNpcForm from "@/components/forms/characters/CreateNpcForm";

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
      <section className="space-y-4 overflow-auto p-2">
        <h1>Create a New NPC</h1>
        <CreateNpcForm />
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
