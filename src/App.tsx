import { lazy, Suspense } from "react";
import CookieConsent from "@/components/CookieConsent";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const Beratung = lazy(() => import("./pages/Beratung"));
const Unternehmen = lazy(() => import("./pages/Unternehmen"));
const UeberMich = lazy(() => import("./pages/UeberMich"));
const Bewusstsein = lazy(() => import("./pages/Bewusstsein"));
const Selbstwert = lazy(() => import("./pages/Selbstwert"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/beratung" element={<Beratung />} />
            <Route path="/unternehmen" element={<Unternehmen />} />
            <Route path="/ueber-mich" element={<UeberMich />} />
            <Route path="/bewusstsein" element={<Bewusstsein />} />
            <Route path="/selbstwert" element={<Selbstwert />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
