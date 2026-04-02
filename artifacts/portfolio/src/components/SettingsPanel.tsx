import { motion, AnimatePresence } from "framer-motion";
import { Settings, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../providers/ThemeProvider";

export default function SettingsPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, fontSize, setFontSize } = useTheme();

  return (
    <>
      <button
        data-testid="settings-toggle"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-3 bg-card border border-border rounded-full shadow-lg text-foreground hover:text-primary transition-colors z-50 group"
      >
        <Settings className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed bottom-20 right-6 w-72 bg-card border border-border shadow-xl rounded-xl p-5 z-50"
            data-testid="settings-panel"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-display font-semibold">Preferences</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground"
                data-testid="settings-close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium text-muted-foreground block mb-2 font-mono">
                  THEME
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setTheme("light")}
                    className={`flex flex-col items-center gap-1 p-2 rounded border ${
                      theme === "light"
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-muted-foreground"
                    }`}
                    data-testid="theme-light"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#f8f8f8] border border-gray-300" />
                    <span className="text-xs">Light</span>
                  </button>
                  <button
                    onClick={() => setTheme("dark")}
                    className={`flex flex-col items-center gap-1 p-2 rounded border ${
                      theme === "dark"
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-muted-foreground"
                    }`}
                    data-testid="theme-dark"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#0a0f18] border border-gray-700" />
                    <span className="text-xs">Dark</span>
                  </button>
                  <button
                    onClick={() => setTheme("dim")}
                    className={`flex flex-col items-center gap-1 p-2 rounded border ${
                      theme === "dim"
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-muted-foreground"
                    }`}
                    data-testid="theme-dim"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#1e2a3a] border border-gray-600" />
                    <span className="text-xs">Dim</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground block mb-2 font-mono">
                  FONT SIZE
                </label>
                <div className="flex bg-background border border-border rounded p-1">
                  {(["small", "medium", "large"] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => setFontSize(size)}
                      className={`flex-1 py-1 text-sm rounded ${
                        fontSize === size
                          ? "bg-primary text-primary-foreground font-medium"
                          : "hover:bg-muted text-muted-foreground"
                      }`}
                      data-testid={`font-${size}`}
                    >
                      {size === "small" ? "A-" : size === "medium" ? "A" : "A+"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
