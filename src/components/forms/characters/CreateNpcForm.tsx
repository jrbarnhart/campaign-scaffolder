import { npcSchema, type NPC } from "@/lib/zodSchemas/npcSchema";
import useAppForm from "@/hooks/useAppForm";
import {
  defaultAlignments,
  defaultRaces,
  defaultSexes,
} from "@/lib/characterDefaults";

const defaultNpc: NPC = {
  name: "",
  race: "",
  sex: "",
  alignment: "",
  strength: 0,
  dexterity: 0,
  constitution: 0,
  intellect: 0,
  wisdom: 0,
  charisma: 0,
  personality: [],
  quirk: "",
};

export default function CreateNpcForm() {
  const form = useAppForm({
    defaultValues: defaultNpc,
    validators: { onChange: npcSchema },
    onSubmit: ({ value }) => {
      // Handle submit here
      console.log(value);
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
        {/* Name */}
        <form.AppField
          name="name"
          children={(field) => <field.TextField label="Name" />}
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
        />
        {/* Abilities */}
        <form.AppField
          name="strength"
          children={(field) => <field.AbilityField label="Strength" />}
        />
        <form.AppField
          name="dexterity"
          children={(field) => <field.AbilityField label="Dexterity" />}
        />
        <form.AppField
          name="constitution"
          children={(field) => <field.AbilityField label="Constitution" />}
        />
        <form.AppField
          name="intellect"
          children={(field) => <field.AbilityField label="Intellect" />}
        />
        <form.AppField
          name="wisdom"
          children={(field) => <field.AbilityField label="Wisdom" />}
        />
        <form.AppField
          name="charisma"
          children={(field) => <field.AbilityField label="Charisma" />}
        />
        {/* Personality Traits */}
        <form.AppField
          name="personality"
          children={(field) => (
            <field.TextArrayField label="Personality Traits" />
          )}
        />
        {/* Quirk */}
        <form.AppField
          name="quirk"
          children={(field) => <field.TextField label="Quirk" />}
        />
        {/* Submit */}
        <form.SubmitButton label="Submit" />
      </form.AppForm>
    </form>
  );
}
