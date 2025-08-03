import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFieldContext } from "@/contexts/reactFormContexts";
import { cn } from "@/lib/utils";
import getZodErrorMessage from "@/lib/zodErrors/getZodErrorMessage";

export function AbilityField({ label }: { label: string; list?: string }) {
  const field = useFieldContext<number>();
  return (
    <div className="space-y-1">
      <Label
        htmlFor={`field-${field.name}`}
        className={cn(
          !field.state.meta.isValid && "text-destructive",
          "flex-col items-start gap-1",
        )}
      >
        {label}
      </Label>
      <Input
        id={`field-${field.name}`}
        type="number"
        min={0}
        max={30}
        value={field.state.value}
        onChange={(e) => {
          field.handleChange(parseInt(e.target.value));
        }}
        className={cn(!field.state.meta.isValid && "border-destructive")}
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
    </div>
  );
}
