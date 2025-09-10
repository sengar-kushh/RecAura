export default function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          © {new Date().getFullYear()} CampusTrack. Centralised student activity records for HEIs.
        </p>
        <div className="flex items-center gap-6">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">Features</a>
          <a href="#modules" className="text-sm text-muted-foreground hover:text-foreground">Modules</a>
          <a href="#preview" className="text-sm text-muted-foreground hover:text-foreground">Preview</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}
