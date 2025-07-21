import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/relationships/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/relationships/create"!</div>
}
