import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/30 via-sky-400/30 to-emerald-400/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <div className="container relative grid gap-10 pb-12 pt-16 md:grid-cols-2 md:gap-16 md:pb-20 md:pt-24">
        <div className="flex flex-col items-start gap-6">
          <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
            For HEIs • NAAC & NEP ready
          </span>
          <h1 className="text-balance text-4xl font-extrabold tracking-tight md:text-5xl">
            Centralised Digital Platform for Comprehensive Student Activity
            Records
          </h1>
          <p className="text-pretty text-base text-muted-foreground md:text-lg">
            CampusTrack unifies every certificate, event, co/extra-curricular
            achievement, and extension activity into verified
            portfolios—streamlining approvals, compliance, and analytics across
            your institution.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <a href="#contact">Request a demo</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#features">Explore features</a>
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-500" />
              Realtime verifications
            </div>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-sky-500" />
              Role-based access
            </div>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-indigo-500" />
              Export-ready reports
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative mx-auto w-full max-w-xl rounded-xl border bg-card p-4 shadow-sm md:mx-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-gradient-to-br from-indigo-500 to-sky-500 p-4 text-white">
                <p className="text-sm opacity-90">Total Activities</p>
                <p className="mt-2 text-3xl font-bold">12,486</p>
                <p className="mt-3 text-xs opacity-90">This year</p>
              </div>
              <div className="rounded-lg border p-4">
                <p className="text-sm text-muted-foreground">
                  Pending Approvals
                </p>
                <p className="mt-2 text-3xl font-bold">73</p>
                <p className="mt-3 text-xs text-emerald-600">−18% this month</p>
              </div>
              <div className="col-span-2 rounded-lg border p-4">
                <p className="text-sm text-muted-foreground">Top Categories</p>
                <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
                  <div className="rounded-md bg-indigo-50 px-3 py-2 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                    NSS
                  </div>
                  <div className="rounded-md bg-sky-50 px-3 py-2 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
                    Sports
                  </div>
                  <div className="rounded-md bg-emerald-50 px-3 py-2 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                    Cultural
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-6 -top-6 hidden h-24 w-24 rotate-12 rounded-xl bg-gradient-to-br from-emerald-400/40 to-sky-400/40 blur-xl md:block" />
        </div>
      </div>
    </section>
  );
}
