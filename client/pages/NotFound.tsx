import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center text-center">
      <div className="relative">
        <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-gradient-to-br from-indigo-500/20 via-sky-500/20 to-emerald-500/20 blur-2xl" />
        <h1 className="text-6xl font-extrabold tracking-tight">404</h1>
      </div>
      <p className="mt-4 text-lg text-muted-foreground">
        The page you’re looking for doesn’t exist.
      </p>
      <div className="mt-6">
        <Button asChild>
          <a href="/">Back to home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
