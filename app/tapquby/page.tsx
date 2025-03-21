"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Egg = () => {
  const TOTAL_ITEM = 16;
  const [eggs, setEggs] = useState(new Array(TOTAL_ITEM).fill("normal")); // Initialize all eggs as normal
  const [gameOver, setGameOver] = useState(false);
  const [spoiledEggIndex, setSpoiledEggIndex] = useState(0);

  const initializeGame = () => {
    setEggs(new Array(TOTAL_ITEM).fill("normal"));
    const index = Math.floor(Math.random() * TOTAL_ITEM);
    setSpoiledEggIndex(index);
    setGameOver(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleEggTap = (index: number) => {
    if (index === spoiledEggIndex) {
      setGameOver(true);
    } else {
      setEggs((eggs) =>
        eggs.map((egg, idx) => (idx === index ? "tapped" : egg))
      );
    }
  };

  return (
    <main className="flex flex-col items-center w-full h-full px-4">
      <Link
        href="/"
        className="flex justify-center text-3xl pt-16 font-extrabold text-gray-100 mb-10"
      >
        <h1 className="drop-shadow-2xl">🍻Tap Tap🍻</h1>
      </Link>
      <div className="grid grid-cols-4 w-full max-w-lg gap-0 justify-center items-center">
        {eggs.map((egg, index) => (
          <div
            key={index}
            onClick={() =>
              !gameOver
                ? egg === "normal" && handleEggTap(index)
                : initializeGame()
            }
            className={`flex items-center justify-center flex-grow ease-in-out duration-500 ${
              index === spoiledEggIndex && gameOver && "scale-[4] z-20"
            }`}
          >
            <Image
              src="/sticker2.gif"
              width={100}
              height={100}
              alt="egg"
              className={`${egg === "tapped" && "opacity-0"}`}
            ></Image>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Egg;
