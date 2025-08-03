import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFieldContext } from "@/contexts/reactFormContexts";
import getZodArrayErrorPath from "@/lib/zodErrors/getZodArrayErrorPath";
import getZodErrorMessage from "@/lib/zodErrors/getZodErrorMessage";

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
                }}
                onBlur={() => {
                  field.handleBlur();
                }}
              />
              <Button
                onClick={() => {
                  const newArray = field.state.value.filter(
                    (_, i) => valueIndex !== i,
                  );
                  field.handleChange(newArray);
                  field.handleBlur();
                }}
                type="button"
                variant="destructive"
                size="sm"
              >
                Remove
              </Button>
            </div>
            {field.state.meta.errors
              .filter((error) => valueIndex === getZodArrayErrorPath(error))
              .map((error, errorIndex) => (
                <div
                  key={`error-${valueIndex.toString()}-${errorIndex.toString()}`}
                  className="text-destructive"
                >
                  {getZodErrorMessage(error)}
                </div>
              ))}
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
