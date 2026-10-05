import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const photos = [
  {
    image: "/photos/photo-1.jpg",
    caption: "A beautiful memory ❤️",
  },
  {
    image: "/photos/photo-2.jpg",
    caption: "One of those moments...",
  },
  {
    image: "/photos/photo-3.jpg",
    caption: "Good times ✨",
  },
  {
    image: "/photos/photo-4.jpg",
    caption: "A memory worth keeping.",
    position: "object-[center_15%]",
  },
  {
    image: "/photos/photo-5.jpg",
    caption: "And there are many more...",
  },
];

const PhotoScreen = ({ onNext }) => {
  const [index, setIndex] = useState(0);

  const nextPhoto = () => {
    if (index < photos.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  const previousPhoto = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextPhoto,
    onSwipedRight: previousPhoto,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const current = photos[index];

  return (
    <section
      {...handlers}
      className="relative flex h-dvh w-full touch-pan-y items-center justify-center overflow-hidden bg-[#fffafc] px-5"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-[12%] text-2xl">✨</div>

        <div className="absolute right-[8%] top-[20%] text-2xl">🌸</div>

        <div className="absolute bottom-[15%] left-[10%] text-xl">💗</div>

        <div className="absolute bottom-[20%] right-[10%] text-2xl">✨</div>
      </div>

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-pink-500">
            Little memories
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-800 sm:text-4xl">
            A few moments
          </h2>
        </div>

        {/* Photo */}
        <div className="relative flex h-[52vh] w-full items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? 100 : -100,
                rotate: index % 2 === 0 ? 6 : -6,
              }}
              animate={{
                opacity: 1,
                x: 0,
                rotate: index % 2 === 0 ? -3 : 3,
              }}
              exit={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
                rotate: index % 2 === 0 ? -8 : 8,
              }}
              transition={{
                duration: 0.55,
              }}
              className="absolute max-w-[85vw] rotate-3 rounded-lg bg-white p-3 pb-12 shadow-2xl sm:max-w-md"
            >
              <img
                src={current.image}
                alt={current.caption}
                // className="h-[42vh] w-[72vw] max-w-sm rounded-md object-cover sm:h-107.5 sm:w-107.5"
                className={`h-[42vh] w-[72vw] max-w-sm rounded-md object-cover sm:h-107.5 sm:w-107.5 ${
                  current.position || "object-center"
                }`}
              />

              <div className="absolute bottom-3 left-0 right-0 text-center">
                <p className="font-serif text-sm italic text-gray-600">
                  {current.caption}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left */}
          <button
            onClick={previousPhoto}
            disabled={index === 0}
            className="absolute left-0 z-20 hidden h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg disabled:opacity-30 sm:flex"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right */}
          <button
            onClick={nextPhoto}
            disabled={index === photos.length - 1}
            className="absolute right-0 z-20 hidden h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg disabled:opacity-30 sm:flex"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Counter */}
        <div className="mt-3 flex items-center gap-2">
          <Heart size={14} className="text-pink-500" fill="currentColor" />

          <span className="text-sm text-gray-500">
            {index + 1} / {photos.length}
          </span>
        </div>

        <p className="mt-3 text-xs text-gray-400 sm:hidden">
          Swipe left or right
        </p>

        {index === photos.length - 1 && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={onNext}
            className="mt-5 rounded-full bg-pink-500 px-7 py-3 text-sm font-semibold text-white shadow-lg"
          >
            There's one more surprise 💌
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default PhotoScreen;
