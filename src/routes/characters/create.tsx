import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/characters/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/characters/create"!</div>
}
