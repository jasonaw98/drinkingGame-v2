import Link from "next/link";
import Image from "next/image";

const Egg = () => {
  return (
    <main className="flex flex-col items-center w-full h-full px-4">
      <Link
        href="/"
        className="flex justify-center text-4xl pt-14 font-extrabold text-gray-100 mb-12"
      >
        <h1 className="drop-shadow-2xl">⬅️ Back</h1>
      </Link>
      <Image
        src="/qr.png"
        alt="egg"
        width={280}
        height={300}
        className="rounded-xl"
      />
      <div className="text-lg font-bold text-gray-100 mt-8">
        1. Scan the QR code.
        <br />
        2. Tap on share.
        <br />
        3. Select Add to Home Screen option.
        <br />
        4. Open the app from your home screen.
      </div>
    </main>
  );
};

export default Egg;
