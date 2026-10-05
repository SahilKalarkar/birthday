import { motion } from "framer-motion";
import { useState } from "react";

const blossomTypes = ["🌸", "🌷", "✨", "💗"];

const generateBlossoms = () => {
  return Array.from({ length: 22 }, (_, index) => ({
    id: index,
    type: blossomTypes[index % blossomTypes.length],
    x: (Math.random() - 0.5) * 650,
    y: -250 - Math.random() * 400,
    rotate: Math.random() * 360,
    duration: 2.5 + Math.random() * 1.5,
    delay: Math.random() * 0.6,
  }));
};

const EnvelopeScreen = ({ onNext }) => {
  const [open, setOpen] = useState(false);
  const [blossoms] = useState(generateBlossoms);

  const handleOpen = () => {
    if (open) return;

    setOpen(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleOpen();
    }
  };

  return (
    <>
      {/* Hide scrollbar but keep the letter scrollable */}
      <style>
        {`
          .letter-scroll::-webkit-scrollbar {
            display: none;
          }

          .letter-scroll {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
        `}
      </style>

      <section className="relative flex h-dvh w-full items-center justify-center overflow-hidden bg-linear-to-br from-[#fff7fb] via-[#fff0f6] to-[#f5edff] px-4 sm:px-6">
        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-pink-200/35 blur-3xl sm:h-112 sm:w-md" />

          <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />

          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-100/30 blur-3xl" />

          <motion.div
            animate={{
              y: [0, -12, 0],
              opacity: [0.25, 0.7, 0.25],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[10%] top-[20%] text-xl"
          >
            ✨
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, 8, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[10%] top-[18%] text-xl"
          >
            🌸
          </motion.div>

          <motion.div
            animate={{
              y: [0, -8, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[15%] left-[12%] text-lg"
          >
            💗
          </motion.div>

          <motion.div
            animate={{
              y: [0, 8, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[18%] right-[12%] text-lg"
          >
            🌷
          </motion.div>
        </div>

        {/* =====================================================
            BLOSSOMS
        ====================================================== */}

        {open &&
          blossoms.map((blossom) => (
            <motion.div
              key={blossom.id}
              initial={{
                opacity: 0,
                x: 0,
                y: 60,
                scale: 0.2,
                rotate: 0,
              }}
              animate={{
                opacity: [0, 1, 1, 0],
                x: blossom.x,
                y: blossom.y,
                scale: [0.2, 1, 1, 0.7],
                rotate: blossom.rotate,
              }}
              transition={{
                duration: blossom.duration,
                delay: blossom.delay,
                ease: "easeOut",
              }}
              className="pointer-events-none absolute bottom-[35%] left-1/2 z-30 text-lg sm:text-xl"
            >
              {blossom.type}
            </motion.div>
          ))}

        {/* =====================================================
            CLOSED-STATE HEADING
        ====================================================== */}

        {!open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            className="absolute left-1/2 top-[12%] z-20 w-full -translate-x-1/2 px-5 text-center sm:top-[13%]"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-pink-500 sm:text-xs">
              One last surprise
            </p>

            <h2 className="mt-4 font-serif text-3xl font-bold text-gray-800 sm:text-4xl">
              A little letter for you
              <span className="ml-2">💌</span>
            </h2>

            <p className="mt-3 text-sm text-gray-500 sm:text-base">
              I wrote something that I want you to read.
            </p>
          </motion.div>
        )}

        {/* =====================================================
            MAIN AREA
        ====================================================== */}

        <div className="relative z-20 flex h-full w-full items-center justify-center">
          {/* ===================================================
              ENVELOPE
          ==================================================== */}

          <motion.div
            onClick={handleOpen}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={open ? -1 : 0}
            aria-label="Open birthday letter"
            animate={
              open
                ? {
                    y: 150,
                    scale: 0.82,
                  }
                : {
                    y: [0, -6, 0],
                    scale: 1,
                  }
            }
            transition={
              open
                ? {
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }
                : {
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            className={`absolute left-1/2 top-1/2 h-47.5 w-72.5 -translate-x-1/2 -translate-y-1/2 sm:h-61.25 sm:w-95 ${
              open ? "cursor-default" : "cursor-pointer"
            }`}
          >
            {/* Envelope shadow */}
            <div className="absolute -bottom-8 left-1/2 h-10 w-[85%] -translate-x-1/2 rounded-full bg-rose-900/15 blur-2xl" />

            {/* =================================================
                ENVELOPE BODY
            ================================================== */}

            <div className="absolute inset-0 overflow-hidden rounded-xl bg-linear-to-br from-[#f9b6c9] via-[#f5a1ba] to-[#ed8fab] shadow-[0_25px_60px_rgba(190,80,120,0.25)]">
              {/* Highlight */}
              <div className="absolute inset-0 bg-linear-to-br from-white/30 via-transparent to-rose-900/10" />

              {/* Left fold */}
              <div
                className="absolute bottom-0 left-0 h-[75%] w-1/2 bg-linear-to-br from-[#f7a5bb] to-[#e88aa5]"
                style={{
                  clipPath: "polygon(0 100%, 100% 100%, 0 0)",
                }}
              />

              {/* Right fold */}
              <div
                className="absolute bottom-0 right-0 h-[75%] w-1/2 bg-linear-to-bl from-[#f7a5bb] to-[#e88aa5]"
                style={{
                  clipPath: "polygon(100% 100%, 0 100%, 100% 0)",
                }}
              />

              {/* Center fold */}
              <div
                className="absolute bottom-0 left-1/2 h-[75%] w-full -translate-x-1/2"
                style={{
                  clipPath: "polygon(0 100%, 50% 35%, 100% 100%)",
                  background:
                    "linear-linear(135deg, rgba(255,255,255,0.18), rgba(210,90,125,0.18))",
                }}
              />
            </div>

            {/* =================================================
                LETTER INSIDE ENVELOPE
            ================================================== */}

            <motion.div
              initial={false}
              animate={
                open
                  ? {
                      y: -205,
                      scale: 1.04,
                    }
                  : {
                      y: 0,
                      scale: 1,
                    }
              }
              transition={{
                duration: 1.2,
                delay: open ? 0.2 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-[7%] top-[10%] z-10 h-38.75 w-[86%] rounded-md bg-linear-to-br from-[#fffefa] to-[#fff5f5] shadow-[0_12px_30px_rgba(100,50,60,0.16)] sm:h-50"
            >
              <div className="absolute inset-2 rounded border border-rose-100/80" />

              <div className="p-5 text-left sm:p-6">
                <p className="font-serif text-xs italic text-gray-400 sm:text-sm">
                  For Zofiya...
                </p>

                <div className="mt-3 h-px w-16 bg-pink-200" />

                <p className="mt-3 font-serif text-sm text-gray-500">
                  With a little love,
                </p>
              </div>
            </motion.div>

            {/* =================================================
                ENVELOPE FLAP
            ================================================== */}

            <motion.div
              animate={
                open
                  ? {
                      rotateX: 180,
                    }
                  : {
                      rotateX: 0,
                    }
              }
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                transformOrigin: "top center",
                transformStyle: "preserve-3d",
              }}
              className="absolute left-0 top-0 z-30 h-[52%] w-full"
            >
              {/* Front of flap */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  background: "linear-linear(135deg, #f8a9bf 0%, #ef8eaa 100%)",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="absolute left-1/2 top-3 h-1 w-20 -translate-x-1/2 rounded-full bg-white/25" />
              </div>

              {/* Back of flap */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  background: "linear-linear(135deg, #ffe0e8 0%, #f9bacb 100%)",
                  backfaceVisibility: "hidden",
                  transform: "rotateX(180deg)",
                }}
              />
            </motion.div>

            {/* =================================================
                HEART SEAL
            ================================================== */}

            {!open && (
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-[45%] z-40 -translate-x-1/2"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white/70 bg-linear-to-br from-pink-500 to-rose-500 text-2xl shadow-[0_8px_25px_rgba(236,72,153,0.35)] sm:h-16 sm:w-16">
                  ❤️
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* ===================================================
              OPENED LETTER
          ==================================================== */}

          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: 260,
                scale: 0.72,
                rotate: 1,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 1.35,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-1/2 top-1/2 z-50 h-[82dvh] w-[92%] max-w-2xl -translate-x-1/2 -translate-y-1/2"
            >
              {/* Letter glow */}
              <div className="absolute -inset-3 rounded-3xl bg-pink-300/20 blur-2xl" />

              {/* Paper */}
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/80 bg-[#fffdf9] shadow-[0_30px_80px_rgba(100,50,70,0.25)]">
                {/* Paper lighting */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white via-transparent to-rose-50/60" />

                {/* Top decoration */}
                <div className="absolute left-1/2 top-5 h-1 w-16 -translate-x-1/2 rounded-full bg-pink-200" />

                {/* Flowers */}
                <div className="pointer-events-none absolute left-4 top-4 text-xl opacity-70 sm:left-7 sm:top-6 sm:text-2xl">
                  🌸
                </div>

                <div className="pointer-events-none absolute right-4 top-4 text-xl opacity-70 sm:right-7 sm:top-6 sm:text-2xl">
                  🌷
                </div>

                <div className="pointer-events-none absolute bottom-5 left-4 text-lg opacity-60 sm:left-7 sm:text-xl">
                  🌸
                </div>

                <div className="pointer-events-none absolute bottom-5 right-4 text-lg opacity-60 sm:right-7 sm:text-xl">
                  💗
                </div>

                {/* =================================================
                    SCROLLABLE LETTER
                ================================================== */}

                <div
                  className="letter-scroll relative h-full overflow-y-auto px-7 pb-8 pt-14 sm:px-12 sm:pb-10 sm:pt-16"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  <div className="mx-auto max-w-xl text-center">
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
                      className="text-[10px] font-medium uppercase tracking-[0.4em] text-pink-500 sm:text-xs"
                    >
                      A little something for you
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
                        delay: 1.2,
                        duration: 0.8,
                      }}
                      className="mt-4 font-serif text-3xl font-bold text-gray-800 sm:text-5xl"
                    >
                      Happy Birthday,
                    </motion.h2>

                    <motion.h3
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        delay: 1.35,
                        duration: 0.8,
                      }}
                      className="mt-1 font-serif text-4xl font-bold italic text-pink-500 sm:text-5xl"
                    >
                      Zofiya ❤️
                    </motion.h3>

                    <div className="mx-auto my-7 flex items-center justify-center gap-3">
                      <div className="h-px w-16 bg-pink-200" />

                      <span className="text-sm text-pink-400">🌸</span>

                      <div className="h-px w-16 bg-pink-200" />
                    </div>

                    {/* Letter */}
                    <div className="space-y-5 text-left font-serif text-[15px] leading-7 text-gray-600 sm:text-base sm:leading-8">
                      <p>Dear Zofiya,</p>

                      <p>
                        Today is your special day, and I wanted to give you
                        something a little different from an ordinary birthday
                        wish.
                      </p>

                      <p>
                        Some people enter our lives and quietly become a
                        beautiful part of our memories. You are one of those
                        people, and I hope this little surprise reminds you of
                        how special you are.
                      </p>

                      <p>
                        I hope this new year of your life brings you countless
                        reasons to smile, beautiful moments to remember, and
                        people who always make you feel appreciated and loved.
                      </p>

                      <p>
                        May every dream you are working toward slowly become a
                        reality. May you always have the courage to choose what
                        makes you happy, and may you never lose the wonderful
                        person you are.
                      </p>

                      <p>
                        And whenever life gets a little difficult, I hope you
                        remember that brighter days are always waiting ahead.
                      </p>

                      <p>
                        So today, forget about everything else for a while.
                        Smile a little more, laugh a little louder, eat some
                        cake, make a wish, and enjoy your day.
                      </p>

                      <p className="pt-2">
                        You deserve all the beautiful little moments this day
                        can bring.
                      </p>

                      <div className="pt-5 text-right">
                        <p className="italic text-gray-500">
                          With lots of love,
                        </p>

                        <p className="mt-1 text-xl font-semibold italic text-pink-500">
                          {/* Someone who wanted to make
                          <br />
                          your birthday a little special  */}
                          Mrunali ❤️
                        </p>
                      </div>
                    </div>

                    {/* Bottom decoration */}
                    <div className="my-8 flex items-center justify-center gap-3">
                      <span className="text-pink-300">✦</span>
                      <span className="text-rose-400">🌸</span>
                      <span className="text-pink-300">✦</span>
                    </div>

                    {/* Continue */}
                    {/* <motion.button
                      whileHover={{
                        scale: 1.04,
                        boxShadow: "0 15px 35px rgba(236,72,153,0.25)",
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      onClick={onNext}
                      className="mb-4 rounded-full bg-linear-to-r from-pink-500 to-rose-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-200/60 transition"
                    >
                      Continue the Surprise
                      <span className="ml-2">→</span>
                    </motion.button> */}

                    {/* <p className="pb-3 text-[10px] tracking-wide text-gray-400">
                      There is still a little more waiting for you... ✨
                    </p> */}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* =====================================================
            OPEN INSTRUCTION
        ====================================================== */}

        {!open && (
          <motion.div
            animate={{
              opacity: [0.45, 1, 0.45],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[9%] z-30 text-center"
          >
            <p className="text-sm text-gray-500">Tap the envelope to open it</p>

            <motion.div
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-2 text-lg text-pink-400"
            >
              ↓
            </motion.div>
          </motion.div>
        )}
      </section>
    </>
  );
};

export default EnvelopeScreen;
