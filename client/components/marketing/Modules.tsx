import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, FolderPlus, FileSpreadsheet, GitBranch, UserCheck2, Shield } from "lucide-react";

export default function Modules() {
  return (
    <section id="modules" className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">Modular by Roles</h2>
        <p className="mt-4 text-muted-foreground">Purpose-built experiences for Students, Faculty, and Administrators.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Student</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><FolderPlus className="size-4 text-indigo-600" /> Submit activities & certificates</div>
            <div className="flex items-center gap-2"><BadgeCheck className="size-4 text-emerald-600" /> Track verification status</div>
            <div className="flex items-center gap-2"><FileSpreadsheet className="size-4 text-sky-600" /> Build shareable portfolio</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Faculty</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><UserCheck2 className="size-4 text-emerald-600" /> Verify and approve submissions</div>
            <div className="flex items-center gap-2"><Workflow className="size-4 text-indigo-600" /> Configure workflows & SLAs</div>
            <div className="flex items-center gap-2"><FileSpreadsheet className="size-4 text-sky-600" /> Export reports & evidence</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Admin</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Shield className="size-4 text-indigo-600" /> Role-based permissions</div>
            <div className="flex items-center gap-2"><FileSpreadsheet className="size-4 text-sky-600" /> NAAC criteria mapping</div>
            <div className="flex items-center gap-2"><Workflow className="size-4 text-emerald-600" /> Centralised analytics</div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
