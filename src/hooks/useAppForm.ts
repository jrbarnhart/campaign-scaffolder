import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext } from "../contexts/reactFormContexts";

import SubmitButton from "@/components/forms/ui/SubmitButton";
import { TextField } from "@/components/forms/ui/TextField";
import { AbilityField } from "@/components/forms/ui/AbilityField";
import { TextArrayField } from "@/components/forms/ui/TextArrayField";
import IdField from "@/components/forms/ui/IdField";

const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    AbilityField,
    TextArrayField,
    IdField,
  },
  formComponents: { SubmitButton },
  fieldContext,
  formContext,
});

export default useAppForm;
