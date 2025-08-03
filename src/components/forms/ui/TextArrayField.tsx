import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFieldContext } from "@/contexts/reactFormContexts";
import { cn } from "@/lib/utils";
import getZodArrayErrorPath from "@/lib/zodErrors/getZodArrayErrorPath";
import getZodErrorMessage from "@/lib/zodErrors/getZodErrorMessage";

export function TextArrayField({ label }: { label: string }) {
  const field = useFieldContext<string[]>();

  const errorPathValues = field.state.meta.errors
    .map((error) => getZodArrayErrorPath(error))
    .filter((val) => val !== undefined);

  return (
    <div className="space-y-1">
      <p className="text-sm leading-none font-semibold">{label}s</p>
      <div className="space-y-2">
        {field.state.value.length === 0 && (
          <p className="text-muted-foreground italic">No {label}s exist yet.</p>
        )}
        {field.state.value.map((_, valueIndex) => {
          return (
            <div key={`item-${valueIndex.toString()}`} className="space-y-1">
              <div className="flex items-center gap-2">
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
                  className={cn(
                    errorPathValues.includes(valueIndex) &&
                      "border-destructive",
                  )}
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
          variant={"secondary"}
          className="w-full border-2"
        >
          Add {label}
        </Button>
      </div>
    </div>
  );
}
