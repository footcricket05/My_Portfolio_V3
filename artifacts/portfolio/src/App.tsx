import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./providers/ThemeProvider";

import Navigation from "./components/Navigation";
import SettingsPanel from "./components/SettingsPanel";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";

const queryClient = new QueryClient();

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-foreground relative flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <footer className="py-8 border-t border-border text-center bg-card">
        <p className="text-muted-foreground font-mono text-sm">
          Built securely by Shaurya Singh Srinet
        </p>
      </footer>

      <SettingsPanel />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Switch>
            <Route path="/" component={Portfolio} />
            <Route component={Portfolio} />
          </Switch>
        </WouterRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
