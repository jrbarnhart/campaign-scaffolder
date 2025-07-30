import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext } from "../contexts/reactFormContexts";

import SubmitButton from "@/components/forms/ui/SubmitButton";
import { TextField } from "@/components/forms/ui/TextField";

const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
  },
  formComponents: { SubmitButton },
  fieldContext,
  formContext,
});

export default useAppForm;
