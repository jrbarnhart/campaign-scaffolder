import { useFieldContext } from "@/contexts/reactFormContexts";
import getZodErrorMessage from "@/lib/zodErrors/getZodErrorMessage";

export default function IdField() {
  const field = useFieldContext<number>();

  return (
    <div>
      <input
        type="number"
        className="hidden"
        id={`field-id`}
        value={field.state.value}
        onChange={(e) => {
          field.handleChange(parseInt(e.target.value, 10));
        }}
      />
      {field.state.meta.errors.length > 0 && (
        <div className="text-destructive">
          <p>Generated Id Error:</p>
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
