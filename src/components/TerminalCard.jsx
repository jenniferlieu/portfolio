import { allAbouts } from "contentlayer/generated";

export default function TerminalCard() {
  const factsObj = allAbouts[0].facts;

  return (
    <div className="border border-border rounded-lg overflow-hidden shadow-card">
      {/* terminal header */}
      <div className="py-2 px-4 flex items-center">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
      </div>

      {/* terminal interface */}
      <div className="p-6 pt-4 font-mono text-xs space-y-4">
        {Object.entries(factsObj).map(([key, value]) => (
          <div key={key}>
            {/* command */}
            <p className="text-text">&gt; {key}</p>

            {/* output */}
            {Object.entries(value).map(([key, value]) => (
              <p
                key={key}
                style={{
                  paddingLeft: `${key.length + 2}ch`,
                  textIndent: `-${key.length + 2}ch`,
                }}>
                <span className="text-primary">{key}:</span>{" "}
                <span dangerouslySetInnerHTML={{ __html: value }} />
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
