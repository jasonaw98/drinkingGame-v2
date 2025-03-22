const Dice = ({ value }: { value: number }) => {
  const diceComponents = [
    <div
      key="1-dot"
      className="size-12 bg-gray-100 flex items-center justify-center rounded-lg border border-gray-500"
    >
      <span className="size-4 flex bg-red-500 rounded-full"></span>
    </div>,

    <div
      key="2-dots"
      className="size-12 bg-gray-100 flex items-center justify-center relative rounded-lg border border-gray-500"
    >
      <span className="size-3 bg-gray-800 rounded-full absolute top-2 right-2"></span>
      <span className="size-3 bg-gray-800 rounded-full absolute bottom-2 left-2"></span>
    </div>,

    <div
      key="3-dots"
      className="size-12 bg-gray-100 flex items-center justify-center relative rounded-lg border border-gray-500"
    >
      <span className="size-3 bg-gray-800 rounded-full absolute top-1 left-1"></span>
      <span className="size-3 bg-gray-800 rounded-full absolute center-1/2"></span>
      <span className="size-3 bg-gray-800 rounded-full absolute bottom-[3] right-[3]"></span>
    </div>,

    <div
      key="4-dots"
      className="size-12 bg-gray-100 grid grid-cols-2 place-items-center rounded-lg border border-gray-500 p-0.5"
    >
      {Array.from({ length: 4 }).map((_, i) => (
        <span key={i} className="size-3 flex bg-red-500 rounded-full"></span>
      ))}
    </div>,

    <div
      key="5-dots"
      className="size-12 bg-gray-100 flex items-center justify-center relative rounded-lg border border-gray-500"
    >
      <span className="size-3 bg-gray-800 rounded-full absolute top-1 right-[3]"></span>
      <span className="size-3 bg-gray-800 rounded-full absolute bottom-[3] left-1"></span>
      <span className="size-3 bg-gray-800 rounded-full absolute top-1 left-1"></span>
      <span className="size-3 bg-gray-800 rounded-full absolute center-1/2"></span>
      <span className="size-3 bg-gray-800 rounded-full absolute bottom-[3] right-[3]"></span>
    </div>,

    <div
      key="6-dots"
      className="size-12 bg-gray-100 grid grid-cols-2 place-items-center rounded-lg border border-gray-500 p-0.5"
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="size-3 flex bg-gray-800 rounded-full"></span>
      ))}
    </div>,
  ];

  return diceComponents[value - 1];
};

const DiceDisplay = ({ diceValues }: { diceValues: number[] }) => {
  return (
    <div className="flex gap-2 flex-wrap-reverse max-w-40 justify-center drop-shadow-2xl">
      {diceValues.map((value, index) => (
        <Dice key={index} value={value} />
      ))}
    </div>
  );
};

export default DiceDisplay;
