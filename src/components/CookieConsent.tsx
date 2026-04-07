import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const GA_ID = "G-PXCNTZEL6K";
const CONSENT_KEY = "cookie-consent";

type ConsentValue = "accepted" | "declined";

function loadGoogleAnalytics() {
  if (document.getElementById("ga-script")) return;

  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  }
  gtag("js", new Date());
  gtag("config", GA_ID, { anonymize_ip: true });
}

function removeGoogleAnalytics() {
  const script = document.getElementById("ga-script");
  if (script) script.remove();

  // Remove GA cookies
  document.cookie.split(";").forEach((c) => {
    const name = c.trim().split("=")[0];
    if (name.startsWith("_ga") || name.startsWith("_gid")) {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.${window.location.hostname}`;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  });

  window.dataLayer = undefined;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentValue | null;
    if (stored === "accepted") {
      loadGoogleAnalytics();
    } else if (stored === null) {
      setVisible(true);
    }
  }, []);

  const handleAccept = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    loadGoogleAnalytics();
    setVisible(false);
  }, []);

  const handleDecline = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "declined");
    removeGoogleAnalytics();
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
    >
      <div className="mx-auto max-w-2xl rounded-xl border border-border bg-card/95 backdrop-blur-md shadow-lg p-5 md:p-6">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Diese Website verwendet Google Analytics, um die Nutzung der Website
          zu analysieren und zu verbessern. Dabei werden Cookies gesetzt und
          Daten an Google übermittelt. Sie können selbst entscheiden, ob Sie
          dies zulassen möchten. Weitere Informationen finden Sie in unserer{" "}
          <Link
            to="/datenschutz"
            className="text-primary underline hover:text-primary/80"
          >
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
          <button
            onClick={handleDecline}
            className="px-5 py-2.5 text-sm font-medium rounded-lg border border-border text-muted-foreground hover:bg-muted transition-colors"
          >
            Nur notwendige
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2.5 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
