import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFieldContext } from "@/contexts/reactFormContexts";

export function AbilityField({ label }: { label: string; list?: string }) {
  const field = useFieldContext<string>();
  return (
    <Label className="flex-col items-start gap-1">
      <div>{label}</div>
      <Input
        type="number"
        min={0}
        max={30}
        value={field.state.value}
        onChange={(e) => {
          field.handleChange(e.target.value);
        }}
      />
    </Label>
  );
}
