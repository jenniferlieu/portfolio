export const TerminalCard = () => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
      <div className="bg-gray-100 p-2 border-b border-gray-300 flex items-center">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
      </div>
      <div className="bg-white p-4 font-mono text-sm">
        <p className="text-gray-500">&gt; info</p>
        <p className="mb-2">
          <span className="text-orange-500">name:</span> Jennifer Liu
        </p>
        <p className="mb-2 pl-24 -indent-24">
          <span className="text-orange-500">education:</span> B.S. Computer
          Science <br />
          Temple University
        </p>
        <p className="mb-2 pl-20 -indent-20">
          <span className="text-orange-500">timezone:</span> Eastern Time <br />
          [EST | UTC-5] [EDT | UTC-4]
        </p>
        <p className="mb-2 pl-12 -indent-12 leading-relaxed">
          <span className="text-orange-500">interests:</span> anime, reading
          books, beach, summer, sunshine, journaling, planners, orange juice,
          watercolor
        </p>
        <p className="text-gray-500">&gt; status</p>
        <p className="mb-2 pl-10 -indent-10">
          <span className="text-green-500">200</span> Open for work in web
          development and software engineering
        </p>
      </div>
    </div>
  );
};
