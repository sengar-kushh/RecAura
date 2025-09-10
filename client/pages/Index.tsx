import Hero from "@/components/marketing/Hero";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import Modules from "@/components/marketing/Modules";
import DashboardPreview from "@/components/marketing/DashboardPreview";

export default function Index() {
  return (
    <main>
      <Hero />
      <FeatureGrid />
      <Modules />
      <DashboardPreview />
      <section id="contact" className="container pb-20 pt-8">
        <div className="mx-auto max-w-2xl rounded-xl border p-6">
          <h3 className="text-xl font-semibold tracking-tight">Get in touch</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Ready to modernize student activity records at your institution?
            Reach out for a personalized walkthrough.
          </p>
          <div className="mt-4 text-sm">
            <a
              className="text-primary underline underline-offset-4"
              href="mailto:?subject=RecAura%20Demo%20Request&body=Hi%20team%2C%20please%20contact%20me%20for%20a%20demo.%20"
            >
              Email us to request a demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
