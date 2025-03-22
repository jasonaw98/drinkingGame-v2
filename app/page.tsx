import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full h-screen py-12 px-4 ">
      <div className="flex justify-center text-3xl font-extrabold text-gray-100 text-center">
        <h1 className="drop-shadow-md">🍻 Drinking Games 🍻</h1>
      </div>
      <div className="h-full flex items-center">
        <div className="grid grid-cols-2 gap-6 items-center">
          <Link
            href="/pepe"
            className="flex flex-col items-center rounded-2xl bg-[#262739] p-3 h-full justify-center"
          >
            <Image
              className="rounded-xl"
              src={"/pepe.webp"}
              unoptimized
              width={120}
              height={100}
              alt="Picture of the author"
            />
            <span className="w-full flex justify-center rounded-b-xl">
              <p className="text-xl font-bold text-gray-100 text-center">
                Tap Game
              </p>
            </span>
          </Link>
          <Link
            href="/tapquby"
            className="flex flex-col items-center rounded-2xl bg-[#262739] p-3 h-full justify-center"
          >
            <Image
              className="rounded-xl"
              src={"/sticker3.gif"}
              unoptimized
              width={130}
              height={100}
              alt="Picture of the author"
            />
            <span className="w-full flex justify-center rounded-b-xl">
              <p className="text-xl font-bold text-gray-100 text-center">
                Tap Game
              </p>
            </span>
          </Link>
          <Link
            href="/dice"
            className="flex flex-col items-center rounded-2xl bg-[#262739] p-3 h-full justify-center"
          >
            <h2 className="text-8xl p-4 text-center">🎲</h2>
            <span className="w-full flex justify-center rounded-b-xl">
              <p className="text-xl font-bold text-gray-100 text-center">
                Liar 🎲
              </p>
            </span>
          </Link>
          <Link
            href="/share"
            className="flex flex-col items-center rounded-2xl bg-[#262739] p-3 h-full justify-center"
          >
            <h2 className="text-8xl p-4 text-center">👥</h2>
            <span className="w-full flex justify-center rounded-b-xl">
              <p className="text-xl font-bold text-gray-100 text-center">
                Share 📲
              </p>
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
