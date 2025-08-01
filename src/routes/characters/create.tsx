import CreateNpcForm from "@/components/forms/characters/CreateNpcForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/characters/create")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative h-svh">
      <section className="space-y-4 overflow-y-auto p-2">
        <h1>Create a New NPC</h1>
        <CreateNpcForm />
      </section>
    </div>
  );
}
