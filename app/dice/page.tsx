"use client";
import Link from "next/link";
import { useRef, useState, useEffect, useCallback } from "react";
import DiceDisplay from "@/components/DiceDisplay";

const DraggableElement = () => {
  const [position, setPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const initialClickYRef = useRef(0);
  const [diceValues, setDiceValues] = useState<number[]>([]);
  const [mute, setMute] = useState(false);

  const rollDiceSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    rollDiceSound.current = new Audio("/sounds/dice.m4a");
    rollDice();
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      isDraggingRef.current = true;
      setIsDragging(true);
      const clientY = "clientY" in e ? e.clientY : e.touches[0].clientY;
      initialClickYRef.current = clientY - position;
      e.preventDefault(); // Prevent default behavior to avoid jumping
    },
    [position]
  );

  const handleDrag = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    const clientY = "clientY" in e ? e.clientY : e.touches[0].clientY;
    const newPosition = Math.max(
      0,
      Math.min(
        containerRef.current!.offsetHeight,
        clientY - initialClickYRef.current
      )
    );
    setPosition(newPosition);
  }, []);

  const handleDragEnd = useCallback(() => {
    isDraggingRef.current = false;
    setIsDragging(false);
    if (position <= 40) {
      setPosition(-20); // Move all the way up
    } else {
      setPosition(containerRef.current!.offsetHeight - 220); // Drop back down to the initial position
    }
  }, [position]);

  const rollDice = useCallback(() => {
    setPosition(containerRef.current!.offsetHeight - 220);
    setTimeout(() => {
      setDiceValues(
        Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1)
      );
      if (!mute) {
        rollDiceSound.current!.currentTime = 0.5;
        rollDiceSound.current!.play();
      }
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500); // Remove the shaking effect after 500ms
    }, 500); // Adjust the delay to match the duration of the move down animation
  }, [mute]);

  return (
    <main className="flex flex-col items-center w-full h-full px-4">
      <Link
        href="/"
        className="flex justify-center text-4xl pt-14 font-extrabold text-gray-100"
      >
        <h1 className="drop-shadow-2xl">🎲 Liar 🎲</h1>
      </Link>

      <div
        ref={containerRef}
        className="relative w-full h-[410px] bg-gry-500"
        onMouseMove={handleDrag}
        onMouseUp={handleDragEnd}
        onTouchMove={handleDrag}
        onTouchEnd={handleDragEnd}
      >
        <div className="flex h-full items-end justify-center select-none pointer-events-none">
          <DiceDisplay diceValues={diceValues} />
        </div>

        <div
          className={`absolute left-1/2 -translate-x-1/2 w-52 h-60 bg-gradient-to-br from-gray-700 to-gray-900 rounded-b-lg border border-white/30 rounded-t-[100px] cursor-pointer shadow-2xl ${
            isDragging ? "ring-3 ring-blue-400" : " duration-500 ease-in-out"
          } ${isShaking ? "animate-shake" : ""}`}
          style={{ top: `${position}px` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        />
      </div>
      <button
        onClick={rollDice}
        className="text-white bg-gradient-to-br from-gray-700 to-gray-800 hover:bg-blue-700 font-semibold rounded-lg text-md px-4 py-2 shadow-md cursor-pointer mt-16"
      >
        Shake 🎲
      </button>
      <span
        onClick={() => setMute(!mute)}
        className={`cursor-pointer mt-12 text-white text-lg font-extrabold ${
          mute ? "" : "text-white"
        }`}
      >
        {mute ? "Unmute" : "Mute"}
      </span>
    </main>
  );
};

export default DraggableElement;
