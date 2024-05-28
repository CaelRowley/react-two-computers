"use client";

import { useState } from "react";

export function RevealButton(props: { buttonText: string, children: React.ReactNode }) {
  const [revealed, setRevealed] = useState(false)

  if (revealed) {
    return props.children
  }

  return (
    <button
      onClick={() => setRevealed(true)}
      className="text-2xl font-bold bg-red-500 px-4 py-2 rounded-lg"
    >
      {props.buttonText}
    </button>
  )
}