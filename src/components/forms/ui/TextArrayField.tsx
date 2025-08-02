import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFieldContext } from "@/contexts/reactFormContexts";

export function TextArrayField({ label }: { label: string }) {
  const field = useFieldContext<string[]>();

  return (
    <div>
      <label>{label}s</label>
      {field.state.value.length === 0 && <p>No {label}s exist yet.</p>}
      {field.state.value.map((_, valueIndex) => {
        return (
          <div key={`item-${valueIndex.toString()}`}>
            <div className="mb-2 flex gap-2">
              <Input
                value={field.state.value[valueIndex] || ""}
                onChange={(e) => {
                  const newArray = [...field.state.value];
                  newArray[valueIndex] = e.target.value;
                  field.handleChange(newArray);
                  console.log(field.state.meta.errors);
                }}
                onBlur={() => {
                  field.handleBlur();
                  console.log(field.state.meta.errors);
                }}
              />
              <Button
                onClick={() => {
                  const newArray = field.state.value.filter(
                    (_, i) => valueIndex !== i,
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
            {/* If there is an error in errors at the same index as the value index then display it */}
            {field.state.meta.errors[valueIndex] !== undefined && (
              <div className="text-destructive">
                {/* Render error here. Might need to use subField approach? https://tanstack.com/form/v1/docs/framework/react/guides/form-composition */}
              </div>
            )}
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
