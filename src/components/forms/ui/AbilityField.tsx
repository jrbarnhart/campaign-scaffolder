import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFieldContext } from "@/contexts/reactFormContexts";
import getZodErrorMessage from "@/lib/zodSchemas/getZodErrorMessage";

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
      {field.state.meta.errors.length > 0 && (
        <div className="text-destructive">
          {field.state.meta.errors.map((error, index) => (
            <div key={`error-${index.toString()}`}>
              {getZodErrorMessage(error)}
            </div>
          ))}
        </div>
      )}
    </Label>
  );
}
