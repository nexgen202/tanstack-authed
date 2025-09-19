import { createFileRoute } from "@tanstack/react-router";
import TanstackAuthed from "~/components/svgs/tanstack-authed";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center">
      <div>
        <h1 className="flex items-center gap-x-3 text-6xl">
          <TanstackAuthed className="size-16"/>
            Tanstack Authed
        </h1>
      </div>
    </section>
  )
}
