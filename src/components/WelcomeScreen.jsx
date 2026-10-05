import { motion } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";

const Welcome = ({ onOpen }) => {
  return (
    <section className="relative flex h-dvh w-full items-center justify-center overflow-hidden bg-linear-to-br from-[#fff7fb] via-[#fff0f6] to-[#f5edff] px-5 sm:px-6">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-15%] top-[-10%] h-72 w-72 rounded-full bg-pink-200/30 blur-3xl sm:h-96 sm:w-96" />

        <div className="absolute bottom-[-15%] right-[-10%] h-80 w-80 rounded-full bg-purple-200/30 blur-3xl sm:h-112 sm:w-md" />

        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-100/30 blur-3xl sm:h-96 sm:w-96" />
      </div>

      {/* Decorative floating sparkles */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0.4, 1, 0.4],
          scale: [0.9, 1.1, 0.9],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[8%] top-[16%] text-pink-300 sm:left-[12%]"
      >
        <Sparkles size={24} strokeWidth={1.5} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[9%] top-[22%] text-rose-300 sm:right-[14%]"
      >
        <Heart size={22} fill="currentColor" strokeWidth={1.5} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.2, 0.7, 0.2],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="pointer-events-none absolute bottom-[18%] left-[12%] text-purple-300"
      >
        <Star size={18} fill="currentColor" strokeWidth={1.2} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.2, 0.6, 0.2],
          y: [0, 8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        className="pointer-events-none absolute bottom-[20%] right-[12%] text-pink-300"
      >
        <Sparkles size={20} strokeWidth={1.5} />
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 w-full max-w-2xl text-center"
      >
        {/* Heart centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto mb-7 flex h-24 w-24 items-center justify-center sm:mb-8 sm:h-28 sm:w-28"
        >
          {/* Outer glow */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-pink-300 blur-2xl"
          />

          {/* Glass circle */}
          <div className="relative flex h-full w-full items-center justify-center rounded-full border border-white/80 bg-white/60 shadow-[0_20px_50px_rgba(244,114,182,0.18)] backdrop-blur-xl">
            <div className="absolute inset-2 rounded-full border border-pink-100/70" />

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart
                className="relative text-pink-500 drop-shadow-[0_5px_12px_rgba(236,72,153,0.25)]"
                size={42}
                fill="currentColor"
                strokeWidth={1.5}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Small heading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
          className="text-[11px] font-medium uppercase tracking-[0.38em] text-pink-500 sm:text-xs"
        >
          A little surprise for
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="mt-3 bg-linear-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl"
        >
          Zofiya
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 80, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="mx-auto mt-4 h-px bg-linear-to-r from-transparent via-pink-300 to-transparent"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.75,
          }}
          className="mx-auto mt-6 max-w-md px-2 text-[15px] leading-7 text-gray-600 sm:max-w-lg sm:text-lg sm:leading-8"
        >
          Some people deserve more than just a simple birthday wish.
          <br className="hidden sm:block" />
          So... I made something special for you.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
          }}
          className="mt-9"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 18px 45px rgba(236,72,153,0.28)",
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={onOpen}
            className="group relative overflow-hidden rounded-full bg-linear-to-r from-pink-500 via-rose-500 to-pink-500 px-8 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(236,72,153,0.22)] transition-all duration-300 sm:px-10 sm:py-4"
          >
            {/* Button shine */}
            <motion.span
              initial={{ x: "-120%" }}
              animate={{ x: "120%" }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 w-16 skew-x-[-20deg] bg-white/20 blur-sm"
            />

            <span className="relative flex items-center justify-center gap-2">
              Open Your Surprise
              <motion.span
                animate={{
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ❤️
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Tiny bottom hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.4,
            duration: 0.8,
          }}
          className="mt-5 text-[11px] tracking-wide text-gray-400"
        >
          Tap to begin the little surprise ✨
        </motion.p>
      </motion.div>

      {/* Bottom decorative hearts */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[8%] left-[22%] text-pink-200"
      >
        <Heart size={15} fill="currentColor" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 8, 0],
          rotate: [5, -5, 5],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="pointer-events-none absolute bottom-[11%] right-[22%] text-purple-200"
      >
        <Heart size={12} fill="currentColor" />
      </motion.div>
    </section>
  );
};

export default Welcome;
