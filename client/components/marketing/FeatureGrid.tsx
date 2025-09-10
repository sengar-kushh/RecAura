import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle2,
  ClipboardList,
  BarChart3,
  ShieldCheck,
  GraduationCap,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Unified Records",
    icon: CheckCircle2,
    desc: "Single source of truth for co/extra-curricular and extension activities across the campus.",
  },
  {
    title: "NAAC & NEP Ready",
    icon: ClipboardList,
    desc: "Auto-map activities to criteria, generate evidence, and export audit-ready reports.",
  },
  {
    title: "Student Portfolio",
    icon: GraduationCap,
    desc: "Verified, sharable student portfolios with certificates, badges, and achievements.",
  },
  {
    title: "Role-based Workflows",
    icon: Users,
    desc: "Departmental creation, faculty verification, and multi-level approvals with SLA reminders.",
  },
  {
    title: "Analytics & Insights",
    icon: BarChart3,
    desc: "Dashboards by program, year, category, gender, and more with trends and benchmarks.",
  },
  {
    title: "Security & Compliance",
    icon: ShieldCheck,
    desc: "Audit logs, data residency, SSO options, and granular permissions for every role.",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
          Built for Higher Education Institutions
        </h2>
        <p className="mt-4 text-muted-foreground">
          Everything you need to capture, verify, and showcase student
          activities—centralised, secure, and measurable.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        {features.map(({ title, icon: Icon, desc }) => (
          <Card key={title} className="relative overflow-hidden">
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10" />
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-md bg-indigo-600/10 text-indigo-700 ring-1 ring-inset ring-indigo-600/20 dark:text-indigo-300">
                  <Icon className="size-5" />
                </div>
                <CardTitle className="text-lg">{title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
