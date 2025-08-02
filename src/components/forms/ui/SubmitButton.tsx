import { Button } from "@/components/ui/button";
import { useFormContext } from "@/contexts/reactFormContexts";

export default function SubscribeButton({ label }: { label: string }) {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => [state.isSubmitting, state.canSubmit]}>
      {([isSubmitting, canSubmit]) => (
        <Button type="submit" disabled={isSubmitting || !canSubmit}>
          {label}
        </Button>
      )}
    </form.Subscribe>
  );
}
