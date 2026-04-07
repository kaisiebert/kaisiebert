import { useEffect } from "react";

interface SeoConfig {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>;
}

const useSeo = ({ title, description, canonical, noindex, jsonLd }: SeoConfig) => {
  useEffect(() => {
    const fullTitle = title.includes("Kai Siebert")
      ? title
      : `${title} · Kai Siebert`;
    document.title = fullTitle;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setOg = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setOg("og:title", fullTitle);
    setOg("og:description", description);

    // Handle robots noindex
    if (noindex) {
      setMeta("robots", "noindex, nofollow");
    } else {
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta) robotsMeta.remove();
    }

    // Handle canonical & og:url
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
      setOg("og:url", canonical);
    } else {
      // Clean up canonical from previous page
      const link = document.querySelector('link[rel="canonical"]');
      if (link) link.remove();
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.remove();
    }

    if (jsonLd) {
      let script = document.querySelector('#json-ld') as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = "json-ld";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }

    return () => {
      const ldScript = document.querySelector('#json-ld');
      ldScript?.remove();
    };
  }, [title, description, canonical, noindex, jsonLd]);
};

export default useSeo;
