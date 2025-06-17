export default function TerminalCard() {
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
    <div className="border border-border rounded-lg overflow-hidden">
      {/* terminal header */}
      <div className="py-2 px-4 flex items-center">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
      </div>

      {/* terminal interface */}
      <div className="py-4 px-6 bg-bg-light p-4 font-mono text-xs">
        {commandBlock.map((obj) => (
          <div key={obj.command}>
            {/* command */}
            <p className="text-text-muted">&gt; {obj.command}</p>

            {/* output */}
            {Object.entries(obj.output).map(([key, value]) => (
              <p
                key={key}
                className="mb-2"
                style={{
                  paddingLeft: `${key.length + 2}ch`,
                  textIndent: `-${key.length + 2}ch`,
                }}>
                <span className="text-primary">{key}:</span> {value}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
