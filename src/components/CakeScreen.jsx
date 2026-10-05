import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useState } from "react";

const petals = [
  { id: 1, x: -240, y: -260, rotate: -35, delay: 0.05, emoji: "🌸" },
  { id: 2, x: 220, y: -290, rotate: 25, delay: 0.1, emoji: "🌷" },
  { id: 3, x: -180, y: -340, rotate: 45, delay: 0.15, emoji: "🌸" },
  { id: 4, x: 180, y: -360, rotate: -25, delay: 0.2, emoji: "💗" },
  { id: 5, x: -300, y: -120, rotate: 60, delay: 0.25, emoji: "🌸" },
  { id: 6, x: 300, y: -150, rotate: -45, delay: 0.3, emoji: "✨" },
  { id: 7, x: -120, y: -420, rotate: -15, delay: 0.35, emoji: "🌷" },
  { id: 8, x: 110, y: -440, rotate: 30, delay: 0.4, emoji: "🌸" },
  { id: 9, x: -350, y: -250, rotate: 20, delay: 0.45, emoji: "💗" },
  { id: 10, x: 340, y: -300, rotate: -20, delay: 0.5, emoji: "🌸" },
  { id: 11, x: -60, y: -330, rotate: 50, delay: 0.55, emoji: "✨" },
  { id: 12, x: 70, y: -380, rotate: -40, delay: 0.6, emoji: "🌷" },
];

const CakeScreen = ({ onNext }) => {
  const [cut, setCut] = useState(false);

  const handleCut = () => {
    if (cut) return;

    setCut(true);

    confetti({
      particleCount: 180,
      spread: 110,
      startVelocity: 35,
      gravity: 0.8,
      scalar: 1.1,
      origin: {
        x: 0.5,
        y: 0.52,
      },
    });

    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 70,
        startVelocity: 25,
        gravity: 0.7,
        scalar: 0.8,
        origin: {
          x: 0.5,
          y: 0.42,
        },
      });
    }, 450);
  };

  return (
    <section className="relative flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff5f8] via-[#ffeef5] to-[#f7efff] px-4 sm:px-6">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large ambient glows */}
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-pink-200/40 blur-3xl sm:h-[28rem] sm:w-[28rem]" />

        <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-100/40 blur-3xl" />

        {/* Soft floating particles */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[8%] top-[20%] text-2xl opacity-50"
        >
          ✨
        </motion.div>

        <motion.div
          animate={{
            y: [0, 12, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute right-[10%] top-[18%] text-xl"
        >
          🌸
        </motion.div>

        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[16%] left-[12%] text-xl opacity-50"
        >
          💗
        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7,
          }}
          className="absolute bottom-[18%] right-[12%] text-xl opacity-50"
        >
          🌷
        </motion.div>
      </div>

      {/* =========================================================
          PETALS AFTER CUT
      ========================================================== */}

      {cut &&
        petals.map((petal) => (
          <motion.div
            key={petal.id}
            initial={{
              opacity: 0,
              x: 0,
              y: 40,
              scale: 0.3,
              rotate: 0,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: petal.x,
              y: petal.y,
              scale: [0.3, 1, 1, 0.8],
              rotate: petal.rotate,
            }}
            transition={{
              duration: 3,
              delay: petal.delay,
              ease: "easeOut",
            }}
            className="pointer-events-none absolute left-1/2 top-[55%] z-30 text-xl sm:text-2xl"
          >
            {petal.emoji}
          </motion.div>
        ))}

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center text-center">
        {/* =======================================================
            INTRO TEXT
        ======================================================== */}

        {!cut && (
          <>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
              }}
              className="mb-3 text-[11px] font-medium uppercase tracking-[0.4em] text-pink-500 sm:text-xs"
            >
              There's something waiting for you
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="mb-8 text-3xl font-semibold tracking-tight text-gray-800 sm:mb-10 sm:text-4xl"
            >
              Make a wish first...
              <span className="ml-2">✨</span>
            </motion.h1>
          </>
        )}

        {/* =======================================================
            CAKE STAGE
        ======================================================== */}

        <div
          className={`relative flex w-full items-center justify-center ${
            cut ? "mt-2 sm:mt-4" : ""
          }`}
        >
          {/* Cake shadow */}
          <motion.div
            animate={
              cut
                ? {
                    scaleX: 1.15,
                    opacity: 0.15,
                  }
                : {
                    scaleX: 1,
                    opacity: 0.25,
                  }
            }
            transition={{
              duration: 1,
            }}
            className="absolute bottom-[-15px] h-8 w-64 rounded-full bg-rose-900/20 blur-xl sm:w-80"
          />

          {/* =====================================================
              CANDLE
          ====================================================== */}

          {!cut && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="absolute -top-24 z-40 flex flex-col items-center sm:-top-28"
            >
              {/* Flame glow */}
              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 h-10 w-10 rounded-full bg-orange-300/50 blur-xl"
              />

              {/* Flame */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 0.95, 1.1, 1],
                  rotate: [-2, 3, -2, 2, 0],
                }}
                transition={{
                  duration: 0.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative text-4xl drop-shadow-lg sm:text-5xl"
              >
                🕯️
              </motion.div>
            </motion.div>
          )}

          {/* =====================================================
              CAKE
          ====================================================== */}

          <motion.button
            type="button"
            onClick={handleCut}
            disabled={cut}
            whileHover={!cut ? { scale: 1.025 } : {}}
            whileTap={!cut ? { scale: 0.97 } : {}}
            className="relative h-[220px] w-[300px] cursor-pointer outline-none sm:h-[270px] sm:w-[390px]"
            aria-label="Cut the birthday cake"
          >
            {/* =================================================
                LEFT CAKE HALF
            ================================================== */}

            <motion.div
              animate={
                cut
                  ? {
                      x: -115,
                      rotate: -7,
                      scale: 0.98,
                    }
                  : {
                      x: 0,
                      rotate: 0,
                      scale: 1,
                    }
              }
              transition={{
                duration: 1.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-0 top-[45px] z-20 h-[145px] w-1/2 overflow-hidden rounded-l-[30px] border border-white/40 shadow-[0_18px_35px_rgba(190,70,110,0.2)] sm:top-[55px] sm:h-[175px]"
              style={{
                background:
                  "linear-gradient(180deg, #f9a8c0 0%, #f47fa3 45%, #dc527e 100%)",
              }}
            >
              {/* Top frosting */}
              <div className="absolute -top-5 left-[-5%] h-12 w-[110%] rounded-[50%] bg-gradient-to-b from-[#ffd1df] to-[#f99fba] shadow-sm sm:h-14" />

              {/* Frosting drip */}
              <div className="absolute left-[20%] top-5 h-10 w-5 rounded-b-full bg-pink-200/90 sm:h-12" />

              <div className="absolute left-[42%] top-3 h-8 w-4 rounded-b-full bg-pink-200/90 sm:h-10" />

              {/* Cake layers */}
              <div className="absolute inset-x-0 bottom-12 h-1 bg-white/20" />

              <div className="absolute inset-x-0 bottom-8 h-2 bg-rose-700/20" />

              {/* Left strawberries */}
              <div className="absolute left-8 top-2 text-xl drop-shadow-md sm:left-12 sm:text-2xl">
                🍓
              </div>

              <div className="absolute left-20 top-1 text-lg drop-shadow-md sm:left-28 sm:text-xl">
                🍓
              </div>

              {/* Hearts */}
              <div className="absolute left-8 top-14 text-sm opacity-80 sm:left-12 sm:text-base">
                ♥
              </div>

              <div className="absolute left-16 top-20 text-xs opacity-70 sm:left-24">
                ♥
              </div>

              {/* Bottom ribbon */}
              <div className="absolute bottom-0 left-0 h-7 w-full bg-rose-600/50 sm:h-8" />

              <div className="absolute bottom-7 left-0 h-2 w-full bg-white/20" />
            </motion.div>

            {/* =================================================
                RIGHT CAKE HALF
            ================================================== */}

            <motion.div
              animate={
                cut
                  ? {
                      x: 115,
                      rotate: 7,
                      scale: 0.98,
                    }
                  : {
                      x: 0,
                      rotate: 0,
                      scale: 1,
                    }
              }
              transition={{
                duration: 1.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute right-0 top-[45px] z-20 h-[145px] w-1/2 overflow-hidden rounded-r-[30px] border border-white/40 shadow-[0_18px_35px_rgba(190,70,110,0.2)] sm:top-[55px] sm:h-[175px]"
              style={{
                background:
                  "linear-gradient(180deg, #f9a8c0 0%, #f47fa3 45%, #dc527e 100%)",
              }}
            >
              {/* Top frosting */}
              <div className="absolute -top-5 left-[-5%] h-12 w-[110%] rounded-[50%] bg-gradient-to-b from-[#ffd1df] to-[#f99fba] shadow-sm sm:h-14" />

              {/* Frosting drip */}
              <div className="absolute right-[20%] top-5 h-10 w-5 rounded-b-full bg-pink-200/90 sm:h-12" />

              <div className="absolute right-[42%] top-3 h-8 w-4 rounded-b-full bg-pink-200/90 sm:h-10" />

              {/* Cake layers */}
              <div className="absolute inset-x-0 bottom-12 h-1 bg-white/20" />

              <div className="absolute inset-x-0 bottom-8 h-2 bg-rose-700/20" />

              {/* Right strawberries */}
              <div className="absolute right-8 top-2 text-xl drop-shadow-md sm:right-12 sm:text-2xl">
                🍓
              </div>

              <div className="absolute right-20 top-1 text-lg drop-shadow-md sm:right-28 sm:text-xl">
                🍓
              </div>

              {/* Hearts */}
              <div className="absolute right-8 top-14 text-sm opacity-80 sm:right-12 sm:text-base">
                ♥
              </div>

              <div className="absolute right-16 top-20 text-xs opacity-70 sm:right-24">
                ♥
              </div>

              {/* Bottom ribbon */}
              <div className="absolute bottom-0 left-0 h-7 w-full bg-rose-600/50 sm:h-8" />

              <div className="absolute bottom-7 left-0 h-2 w-full bg-white/20" />
            </motion.div>

            {/* =================================================
                CAKE TOP DECORATION
            ================================================== */}

            <motion.div
              animate={
                cut
                  ? {
                      scaleX: 0.95,
                      opacity: 0,
                    }
                  : {
                      scaleX: 1,
                      opacity: 1,
                    }
              }
              transition={{
                duration: 0.55,
              }}
              className="absolute left-1/2 top-[28px] z-30 flex h-12 w-[88%] -translate-x-1/2 items-center justify-center rounded-[50%] bg-gradient-to-b from-[#fff1f6] via-[#ffd0df] to-[#f7a1bc] shadow-lg sm:top-[34px] sm:h-14"
            >
              <div className="flex items-center gap-3 text-lg sm:gap-5 sm:text-xl">
                <span>🍓</span>
                <span>🌸</span>
                <span>🍓</span>
                <span>🌸</span>
                <span>🍓</span>
              </div>
            </motion.div>

            {/* =================================================
                CENTER CUT LINE
            ================================================== */}

            {cut && (
              <motion.div
                initial={{
                  opacity: 0,
                  scaleY: 0,
                }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scaleY: [0, 1, 1, 1],
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-[28px] z-50 h-[185px] w-[3px] -translate-x-1/2 origin-top bg-gradient-to-b from-yellow-200 via-white to-transparent shadow-[0_0_12px_rgba(255,255,255,0.9)] sm:top-[34px] sm:h-[220px]"
              />
            )}

            {/* =================================================
                INSIDE OF CAKE
            ================================================== */}

            {cut && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-1/2 top-[78px] z-10 flex h-[110px] w-[130px] -translate-x-1/2 flex-col items-center justify-center rounded-xl bg-gradient-to-b from-[#fffdf8] to-[#fff1e7] shadow-[0_12px_35px_rgba(150,80,80,0.2)] sm:top-[90px] sm:h-[130px] sm:w-[155px]"
              >
                {/* Inner cake cream */}
                <div className="absolute inset-2 rounded-lg border border-rose-100" />

                <div className="relative z-10 px-3">
                  <p className="font-serif text-[10px] italic text-rose-400 sm:text-xs">
                    A little message
                  </p>

                  <p className="mt-1 font-serif text-sm font-semibold text-gray-700 sm:text-base">
                    Just for you ❤️
                  </p>
                </div>
              </motion.div>
            )}
          </motion.button>
        </div>

        {/* =======================================================
            TAP INSTRUCTION
        ======================================================== */}

        {!cut && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: [0, -5, 0],
            }}
            transition={{
              opacity: {
                duration: 0.8,
                delay: 0.6,
              },
              y: {
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="mt-8 flex flex-col items-center gap-2 sm:mt-10"
          >
            <p className="text-sm font-medium text-gray-500">Tap the cake</p>

            <span className="text-xl">🎂</span>
          </motion.div>
        )}

        {/* =======================================================
            BIRTHDAY MESSAGE
        ======================================================== */}

        {cut && (
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
              scale: 0.75,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.15,
              delay: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-1/2 top-[56%] z-40 w-[92%] -translate-x-1/2 sm:top-[57%] sm:w-full"
          >
            {/* Message glow */}
            <div className="absolute left-/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-300/30 blur-3xl" />

            {/* Message content */}
            <div className="relative mx-auto max-w-xl">
              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.1,
                  duration: 0.7,
                }}
                className="text-[10px] font-semibold uppercase tracking-[0.4em] text-pink-500 sm:text-xs"
              >
                Today is all about you
              </motion.p>

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.25,
                  duration: 0.8,
                }}
                className="mt-2 font-serif text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl"
              >
                Happy Birthday
              </motion.h2>

              <motion.h3
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 1.4,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 120,
                }}
                className="mt-1 font-serif text-4xl font-bold italic text-pink-500 sm:text-6xl"
              >
                Zofiya
                <span className="ml-2">❤️</span>
              </motion.h3>

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 1.7,
                  duration: 0.8,
                }}
                className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500 sm:mt-5 sm:text-base sm:leading-7"
              >
                May your day be filled with smiles, love, happiness and
                beautiful little surprises.
              </motion.p>

              <motion.button
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 2,
                  duration: 0.7,
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 18px 40px rgba(236,72,153,0.25)",
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={onNext}
                className="mt-6 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-200/70 transition sm:mt-7 sm:px-8"
              >
                See Our Memories
                <span className="ml-2">→</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CakeScreen;
