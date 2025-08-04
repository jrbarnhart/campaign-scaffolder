import type { NPC } from "@/lib/zodSchemas/npcSchema";

export default function NpcInfo({ npc }: { npc: NPC }) {
  return (
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
    </div>
  );
}
