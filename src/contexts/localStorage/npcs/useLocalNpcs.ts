import { use } from "react";
import { LocalNpcsContext } from "./LocalNpcsContext";

export default function useLocalNpcs() {
  const context = use(LocalNpcsContext);
  if (!context) {
    throw new Error("useLocalNpcs must be used withing a LocalNpcsProvider");
  }
  return context;
}
