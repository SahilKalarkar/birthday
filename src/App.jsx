import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import WelcomeScreen from "./components/WelcomeScreen";
import CakeScreen from "./components/CakeScreen";
import PhotoScreen from "./components/PhotoScreen";
import EnvelopeScreen from "./components/EnvelopeScreen";
import LetterScreen from "./components/LetterScreen";

function App() {
  const [screen, setScreen] = useState("welcome");

  const nextScreen = (next) => {
    setScreen(next);
  };

  return (
    <main className="h-dvh w-full overflow-hidden bg-pink-50">
      <AnimatePresence mode="wait">
        {screen === "welcome" && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="h-dvh"
          >
            <WelcomeScreen onOpen={() => nextScreen("cake")} />
          </motion.div>
        )}

        {screen === "cake" && (
          <motion.div
            key="cake"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="h-dvh"
          >
            <CakeScreen onNext={() => nextScreen("photos")} />
          </motion.div>
        )}

        {screen === "photos" && (
          <motion.div
            key="photos"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}
            className="h-dvh"
          >
            <PhotoScreen onNext={() => nextScreen("envelope")} />
          </motion.div>
        )}

        {screen === "envelope" && (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="h-dvh"
          >
            <EnvelopeScreen onNext={() => nextScreen("letter")} />
          </motion.div>
        )}

        {screen === "letter" && (
          <motion.div
            key="letter"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="h-dvh"
          >
            <LetterScreen />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
