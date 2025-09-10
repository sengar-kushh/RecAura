import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPreview() {
  return (
    <section id="preview" className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
          A glimpse of your command center
        </h2>
        <p className="mt-4 text-muted-foreground">
          Real-time visibility across departments, programs, and years. Drill
          down to the last certificate.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Institution Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-lg border p-4 text-center">
                <p className="text-xs text-muted-foreground">Active Students</p>
                <p className="mt-1 text-2xl font-bold">8,214</p>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <p className="text-xs text-muted-foreground">
                  Activities Logged
                </p>
                <p className="mt-1 text-2xl font-bold">56,902</p>
              </div>
              <div className="rounded-lg border p-4 text-center">
                <p className="text-xs text-muted-foreground">
                  Verification SLA
                </p>
                <p className="mt-1 text-2xl font-bold text-emerald-600">1.2d</p>
              </div>
            </div>
            <div className="mt-6 h-36 rounded-lg bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-emerald-500/20" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Approvals & Workflows</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                "Dept Chair Review",
                "IQAC Validation",
                "Principal Approval",
              ].map((s, i) => (
                <div
                  key={s}
                  className="flex items-center justify-between rounded-md border p-3"
                >
                  <div className="text-sm font-medium">{s}</div>
                  <div className="text-xs text-muted-foreground">
                    {i === 0 ? "Active" : i === 1 ? "Queued" : "0 pending"}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
