import { motion } from "framer-motion";

const LetterScreen = () => {
  return (
    <section className="relative flex h-dvh w-full items-center justify-center overflow-hidden bg-linear-to-br from-pink-50 via-white to-rose-50 px-5">
      {/* Blossoms */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute left-[8%] top-[15%] text-3xl"
        >
          🌸
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -8, 8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute right-[10%] top-[20%] text-3xl"
        >
          🌸
        </motion.div>

        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute bottom-[15%] left-[15%] text-2xl"
        >
          🌷
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="relative z-10 max-h-[85dvh] w-full max-w-2xl overflow-y-auto rounded-4xl bg-white p-7 shadow-2xl shadow-pink-100 sm:p-10 md:p-14"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-pink-500">
          A letter for you
        </p>

        <h1 className="mt-4 font-serif text-4xl font-bold text-gray-800 sm:text-5xl">
          Dear Mrunal,
        </h1>

        <div className="mt-8 space-y-5 font-serif text-base leading-8 text-gray-600 sm:text-lg">
          <p>
            Happy Birthday to someone who deserves a beautiful day and an even
            more beautiful year ahead. ❤️
          </p>

          <p>
            I hope this year brings you countless reasons to smile, moments that
            make your heart happy, and people who always remind you how special
            you are.
          </p>

          <p>
            Keep chasing your dreams, keep believing in yourself, and most
            importantly, keep being the wonderful person you are.
          </p>

          <p>
            I hope whenever you look back at this year, you'll remember it with
            a smile.
          </p>

          <p>
            And yes... I hope this little surprise managed to make your birthday
            just a tiny bit more special. 🌸
          </p>
        </div>

        <div className="mt-10 border-t border-pink-100 pt-7">
          <p className="font-serif text-xl italic text-pink-500">
            “May your life always be filled with beautiful moments, genuine
            happiness and endless reasons to smile.”
          </p>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400">With lots of good wishes ❤️</p>

          <p className="mt-2 font-serif text-xl font-semibold text-gray-700">
            Happy Birthday, Mrunal!
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default LetterScreen;
