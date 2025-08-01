import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFieldContext } from "@/contexts/reactFormContexts";
import { cn } from "@/lib/utils";
import getZodErrorMessage from "@/lib/zodSchemas/getZodErrorMessage";

export function TextField({ label, list }: { label: string; list?: string }) {
  const field = useFieldContext<string>();
  return (
    <div>
      <Label
        className={cn(
          !field.state.meta.isValid && "border-destructive",
          "flex-col items-start gap-1",
        )}
        htmlFor={`field-${field.name}`}
      >
        {label}
      </Label>
      <Input
        id={`field-${field.name}`}
        list={list}
        value={field.state.value}
        onChange={(e) => {
          field.handleChange(e.target.value);
        }}
        onBlur={field.handleBlur}
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
