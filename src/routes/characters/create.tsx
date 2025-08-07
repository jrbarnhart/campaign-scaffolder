import NpcInfo from "@/components/characters/NpcInfo";
import CreateNpcForm from "@/components/forms/characters/CreateNpcForm";
import { Button } from "@/components/ui/button";
import useLocalNpcs from "@/contexts/localStorage/npcs/useLocalNpcs";
import useLocalStorage from "@/hooks/useLocalStorage";
import generateNpc from "@/lib/characters/generateNpc";
import { defaultNpc } from "@/lib/defaultData";
import { npcSchema } from "@/lib/zodSchemas/npcSchema";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/characters/create")({
  component: RouteComponent,
});

function RouteComponent() {
  const [editOpen, setEditOpen] = useState(false);
  const { localNpcs } = useLocalNpcs();
  const [npc, setNpc] = useLocalStorage({
    key: "draftNpc",
    schema: npcSchema,
    defaultValue: defaultNpc,
  });

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
            <section className="space-y-2">
              <Button
                onClick={() => {
                  const newNpc = generateNpc(localNpcs);
                  setNpc(newNpc);
                }}
                variant={"secondary"}
                className="w-full border-2"
              >
                Generate NPC
              </Button>
              <Button className="w-full border-2" variant={"secondary"}>
                Save NPC
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
