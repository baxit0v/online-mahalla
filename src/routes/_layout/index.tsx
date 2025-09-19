import { createFileRoute } from '@tanstack/react-router'
import { HomePage } from 'src/components/screens/home'

export const Route = createFileRoute('/_layout/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <HomePage />
  )
}
