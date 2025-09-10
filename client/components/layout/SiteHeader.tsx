import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div
            className={cn(
              "size-8 rounded-md bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-500",
            )}
          />
          <span className="text-base font-semibold tracking-tight">
            RecAura
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
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
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="md:hidden">
            <a href="#contact">Contact</a>
          </Button>
          <Button asChild>
            <a href="mailto:?subject=CampusTrack%20Demo%20Request&body=Hi%20team%2C%20I%27d%20like%20a%20demo%20of%20CampusTrack.%20">
              Request demo
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
