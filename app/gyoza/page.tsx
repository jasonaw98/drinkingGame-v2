"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Egg = () => {
  const TOTAL_ITEM = 20;
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
        className="flex justify-center text-4xl pt-14 font-extrabold text-gray-100 mb-12"
      >
        <h1 className="drop-shadow-2xl">💚PEPE💚</h1>
      </Link>
      <div className="grid grid-cols-4 w-full max-w-lg gap-0 justify-center items-center">
        {eggs.map((egg, index) => (
          <div
            key={index}
            onClick={() => !gameOver && egg === "normal" && handleEggTap(index)}
            className={`flex items-center justify-center grow ease-in-out duration-500 ${
              index === spoiledEggIndex && gameOver && "scale-[3] z-20"
            }`}
          >
            <Image
              src="/pepe.webp"
              unoptimized
              width={80}
              height={90}
              alt="egg"
              className={`${egg === "tapped" && "opacity-0"}`}
            ></Image>
          </div>
        ))}
      </div>
      {gameOver && (
        <div className="mt-28 z-50">
          <button
            onClick={initializeGame}
            type="button"
            className="text-white border border-gray-500 bg-linear-to-r from-indigo-400 to-blue-400 hover:bg-linear-to-bl font-semibold rounded-xl text-md px-4 py-2.5 text-center mr-2 mb-2 shadow-md"
          >
            Restart
          </button>
        </div>
      )}
    </main>
  );
};

export default Egg;
