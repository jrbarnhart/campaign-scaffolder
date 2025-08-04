import NpcInfo from "@/components/characters/NpcInfo";
import CreateNpcForm from "@/components/forms/characters/CreateNpcForm";
import { Button } from "@/components/ui/button";
import generateNpc from "@/lib/characters/generateNpc";
import type { NPC } from "@/lib/zodSchemas/npcSchema";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/characters/create")({
  component: RouteComponent,
});

const defaultNpc: NPC = {
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

function RouteComponent() {
  const [editOpen, setEditOpen] = useState(false);
  const [npc, setNpc] = useState<NPC>(defaultNpc);

  return (
    <div className="flex h-svh flex-col overflow-hidden">
      {/* Tab controls for toggling edit form */}
      <section className="space-y-4 p-2">
        <div className="grid grid-cols-2">
          <Button
            onClick={() => {
              setEditOpen(false);
            }}
          >
            Generate
          </Button>
          <Button
            onClick={() => {
              setEditOpen(true);
            }}
          >
            Edit
          </Button>
        </div>
      </section>

      <section className="overflow-y-auto p-2">
        {!editOpen && (
          <div>
            <NpcInfo npc={npc} />
            {/* NPC Generation Controls */}
            <section>
              <Button
                onClick={() => {
                  const newNpc = generateNpc();
                  setNpc(newNpc);
                }}
                variant={"secondary"}
                className="w-full border-2"
              >
                Generate NPC
              </Button>
              <h1>Options</h1>
              <p>
                {/* Options go here but I need to handle giving options to
                generateNpc to make them work */}
              </p>
            </section>
          </div>
        )}
        {editOpen && (
          <CreateNpcForm npc={npc} setNpc={setNpc} setEditOpen={setEditOpen} />
        )}
      </section>
    </div>
  );
}
