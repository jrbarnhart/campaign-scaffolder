import { npcSchema, type NPC } from "@/lib/zodSchemas/npcSchema";
import useAppForm from "@/hooks/useAppForm";
import {
  defaultAlignments,
  defaultRaces,
  defaultSexes,
} from "@/lib/characters/characterDefaults";
import type { SetStateAction } from "react";

export default function CreateNpcForm({
  npc,
  setNpc,
  setEditOpen,
}: {
  npc: NPC;
  setNpc: React.Dispatch<SetStateAction<NPC>>;
  setEditOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
  const form = useAppForm({
    defaultValues: npc,
    validators: { onSubmit: npcSchema },
    onSubmit: ({ value }) => {
      setNpc(value);
      setEditOpen(false);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        void form.handleSubmit();
      }}
      className="flex flex-col gap-4"
    >
      <form.AppForm>
        {/* ID (Hidden) */}
        <form.AppField
          name="id"
          children={(field) => <field.IdField />}
          validators={{ onSubmit: npcSchema.shape.id }}
        />
        {/* Name */}
        <form.AppField
          name="name"
          children={(field) => <field.TextField label="Name" />}
          validators={{
            onChange: npcSchema.shape.name,
          }}
        />
        {/* Race */}
        <form.AppField
          name="race"
          children={(field) => (
            <>
              <field.TextField label="Race" list="races" />
              <datalist id="races">
                {defaultRaces.map((race, index) => (
                  <option key={`${race}-${index.toString()}`} value={race} />
                ))}
              </datalist>
            </>
          )}
          validators={{ onChange: npcSchema.shape.race }}
        />
        {/* Sex */}
        <form.AppField
          name="sex"
          children={(field) => (
            <>
              <field.TextField label="Sex" list="sexes" />
              <datalist id="sexes">
                {defaultSexes.map((sex, index) => (
                  <option key={`${sex}-${index.toString()}`} value={sex} />
                ))}
              </datalist>
            </>
          )}
          validators={{ onChange: npcSchema.shape.sex }}
        />
        {/* Alignment */}
        <form.AppField
          name="alignment"
          children={(field) => (
            <>
              <field.TextField label="Alignment" list="alignments" />
              <datalist id="alignments">
                {defaultAlignments.map((alignment, index) => (
                  <option
                    key={`${alignment}-${index.toString()}`}
                    value={alignment}
                  />
                ))}
              </datalist>
            </>
          )}
          validators={{ onChange: npcSchema.shape.alignment }}
        />
        {/* Abilities */}
        <form.AppField
          name="strength"
          children={(field) => <field.AbilityField label="Strength" />}
          validators={{ onChange: npcSchema.shape.strength }}
        />
        <form.AppField
          name="dexterity"
          children={(field) => <field.AbilityField label="Dexterity" />}
          validators={{ onChange: npcSchema.shape.dexterity }}
        />
        <form.AppField
          name="constitution"
          children={(field) => <field.AbilityField label="Constitution" />}
          validators={{ onChange: npcSchema.shape.constitution }}
        />
        <form.AppField
          name="intelligence"
          children={(field) => <field.AbilityField label="Intelligence" />}
          validators={{ onChange: npcSchema.shape.intelligence }}
        />
        <form.AppField
          name="wisdom"
          children={(field) => <field.AbilityField label="Wisdom" />}
          validators={{ onChange: npcSchema.shape.wisdom }}
        />
        <form.AppField
          name="charisma"
          children={(field) => <field.AbilityField label="Charisma" />}
          validators={{ onChange: npcSchema.shape.charisma }}
        />
        {/* Personality Traits */}
        <form.AppField
          name="personality"
          children={(field) => (
            <field.TextArrayField label="Personality Trait" />
          )}
          validators={{
            onChange: npcSchema.shape.personality,
          }}
        />
        {/* Quirk */}
        <form.AppField
          name="quirk"
          children={(field) => <field.TextField label="Quirk" />}
          validators={{ onChange: npcSchema.shape.quirk }}
        />
        {/* Submit */}
        <form.SubmitButton label="Save" />
      </form.AppForm>
    </form>
  );
}
