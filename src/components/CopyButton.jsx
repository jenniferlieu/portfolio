"use client";

import { useState } from "react";

export default function CopyButton({ children, textToCopy, className }) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1300);
    } catch (err) {
      console.error("failed to copy");
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer inline-block relative hover:text-primary ${className}`}>
      {copied && (
        <div className="absolute z-10 bottom-full mb-[0.5em] left-1/2 tranform -translate-x-1/2 rounded-md bg-bg px-2 py-1 text-text border border-border">
          <div className="text-sm">Copied!</div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 rotate-45 -translate-y-1/2 w-3 h-3 bg-bg border border-l-transparent border-t-transparent border-r-border border-b-border" />
        </div>
      )}
      {children}
    </button>
  );
}
