import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFieldContext } from "@/contexts/reactFormContexts";

export function TextField({ label }: { label: string }) {
  const field = useFieldContext<string>();
  return (
    <Label className="flex-col items-start gap-1">
      <div>{label}</div>
      <Input
        value={field.state.value}
        onChange={(e) => {
          field.handleChange(e.target.value);
        }}
      />
    </Label>
  );
}
