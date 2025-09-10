import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Ff9e52e7bd9fe4090957c1fa73236fcca%2F1e9b0b992ade494b888a2b91fe8111f8?format=webp&width=800"
            alt="RecAura logo"
            className="h-10 w-10 rounded-md object-contain"
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
            <a href="mailto:?subject=RecAura%20Demo%20Request&body=Hi%20team%2C%20I%27d%20like%20a%20demo%20of%20RecAura.%20">
              Request demo
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
