export const TerminalCard = () => {
  const commandBlock = [
    {
      command: "info",
      output: {
        name: "Jennifer Lieu",
        education: "B.S. Computer Science from Temple University",
        timezone: "Eastern Time [EST, UTC-5] [EDT, UTC-4]",
        interests:
          "anime, reading, books, beach, summer, sunshine, journaling, planners, orange juice, watercolor",
      },
    },
    {
      command: "status",
      output: {
        200: "Open for work in web development and software engineering",
      },
    },
  ];

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
      {/* terminal header */}
      <div className="bg-gray-100 p-2 border-b border-gray-300 flex items-center">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
      </div>

      {/* terminal interface */}
      <div className="bg-white p-4 font-mono text-sm">
        {commandBlock.map((obj) => (
          <div key={obj.command}>
            {/* command */}
            <p className="text-gray-500">&gt; {obj.command}</p>

            {/* output */}
            {Object.entries(obj.output).map(([key, value]) => (
              <p
                key={key}
                className="mb-2"
                style={{
                  paddingLeft: `${key.length + 2}ch`,
                  textIndent: `-${key.length + 2}ch`,
                }}>
                <span className="text-orange-500">{key}:</span> {value}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
