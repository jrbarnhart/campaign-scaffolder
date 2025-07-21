import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/maps/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/maps/create"!</div>
}
