// TextArrayField.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFieldContext } from "@/contexts/reactFormContexts";

export function TextArrayField({ label }: { label: string }) {
  const field = useFieldContext<string[]>();

  return (
    <div>
      <label>{label}</label>
      {field.state.value.map((_, index) => {
        return (
          <div key={`item-${index.toString()}`} className="mb-2 flex gap-2">
            <Input
              value={field.state.value[index] || ""}
              onChange={(e) => {
                const newArray = [...field.state.value];
                newArray[index] = e.target.value;
                field.handleChange(newArray);
              }}
            />
            <Button
              onClick={() => {
                const newArray = field.state.value.filter(
                  (_, index) => index !== index,
                );
                field.handleChange(newArray);
              }}
              type="button"
              variant="destructive"
              size="sm"
            >
              Remove
            </Button>
          </div>
        );
      })}
      <Button
        onClick={() => {
          field.pushValue("");
        }}
        type="button"
      >
        Add {label}
      </Button>
    </div>
  );
}
