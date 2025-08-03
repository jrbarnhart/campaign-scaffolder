import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFieldContext } from "@/contexts/reactFormContexts";
import getZodErrorMessage from "@/lib/zodErrors/getZodErrorMessage";

function getArrayErrorIndex(error: unknown): number | undefined {
  const errorExists = error;
  const errorIsObject = typeof error === "object";

  if (errorExists && errorIsObject) {
    const errorHasPath = "path" in error;

    if (errorHasPath) {
      const pathIsArry = Array.isArray(error.path);

      if (pathIsArry) {
        // Assertions in this block could also be handled with a type predicate and restructuring of the code
        const array = error.path as Array<unknown>;
        const firstIndexIsNumber = typeof array[0] === "number";
        if (firstIndexIsNumber) return array[0] as number;
      }
    }
  }

  return undefined;
}

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
            {field.state.meta.errors
              .filter((error) => valueIndex === getArrayErrorIndex(error))
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
