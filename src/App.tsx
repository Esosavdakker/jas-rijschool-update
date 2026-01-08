import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

// Dev-only imports
const Comparison = import.meta.env.DEV ? (await import("./pages/Comparison")).default : null;
const CheatSheet = import.meta.env.DEV ? (await import("./pages/CheatSheet")).default : null;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/voorwaarden" element={<Terms />} />
          {/* Dev-only routes */}
          {import.meta.env.DEV && Comparison && (
            <Route path="/vergelijking" element={<Comparison />} />
          )}
          {import.meta.env.DEV && CheatSheet && (
            <Route path="/cheat-sheet" element={<CheatSheet />} />
          )}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
