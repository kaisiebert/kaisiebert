import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import useSeo from "@/hooks/use-seo";

const NotFound = () => {
  const location = useLocation();

  useSeo({
    title: "Seite nicht gefunden",
    description: "Die angeforderte Seite konnte nicht gefunden werden.",
    noindex: true,
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 font-serif text-5xl text-foreground">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">
          Diese Seite wurde nicht gefunden.
        </p>
        <Link to="/" className="text-primary underline hover:text-primary/90">
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
};

export default NotFound;