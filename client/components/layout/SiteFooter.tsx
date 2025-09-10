export default function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          <img src="https://cdn.builder.io/api/v1/image/assets%2Ff9e52e7bd9fe4090957c1fa73236fcca%2F1e9b0b992ade494b888a2b91fe8111f8?format=webp&width=800" alt="RecAura logo" className="inline-block h-6 w-6 rounded-md mr-2 -mt-1" />
          © {new Date().getFullYear()} RecAura. Centralised student
          activity records for HEIs.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#features"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Features
          </a>
          <a
            href="#modules"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Modules
          </a>
          <a
            href="#preview"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Preview
          </a>
          <a
            href="#contact"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
