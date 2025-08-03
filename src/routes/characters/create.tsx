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
    <div className="relative h-svh">
      <section className="space-y-4 overflow-y-auto p-2">
        <div className="flex">
          <Button
            className="grow"
            onClick={() => {
              setEditOpen(false);
            }}
          >
            Create
          </Button>
          <Button
            className="grow"
            onClick={() => {
              setEditOpen(true);
            }}
          >
            Edit
          </Button>
        </div>
        {!editOpen && (
          <div>
            <section>
              <h1>Bio</h1>
              <p>Name: {npc.name || "No Name"}</p>
              <p>Race: {npc.race || "No Race"}</p>
              <p>Sex: {npc.sex || "No Sex"}</p>
            </section>
            <section>
              <h1>Personality</h1>
              <p>Alignment: {npc.alignment || "No Alignment"}</p>
              <p>Traits:</p>
              {npc.personality.length === 0 && <p>No personality traits.</p>}
              {npc.personality.map((trait, index) => (
                <p key={`trait-${index.toString()}`}>{trait}</p>
              ))}
              <p>Quirk: {npc.quirk || "No quirk."}</p>
            </section>
            <section>
              <h1>Stats</h1>
              <div className="grid grid-cols-3">
                <p>Str {npc.strength}</p>
                <p>Dex {npc.dexterity}</p>
                <p>Con {npc.constitution}</p>
                <p>Int {npc.intelligence}</p>
                <p>Wis {npc.wisdom}</p>
                <p>Cha {npc.charisma}</p>
              </div>
            </section>
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
        {editOpen && <CreateNpcForm />}
      </section>
    </div>
  );
}
