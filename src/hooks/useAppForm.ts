import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext } from "../contexts/reactFormContexts";

import SubmitButton from "@/components/forms/ui/SubmitButton";
import { TextField } from "@/components/forms/ui/TextField";
import { AbilityField } from "@/components/forms/ui/AbilityField";

const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    AbilityField,
  },
  formComponents: { SubmitButton },
  fieldContext,
  formContext,
});

export default useAppForm;
