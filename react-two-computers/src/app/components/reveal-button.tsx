"use client";

import { useState } from "react";

export function RevealButton(props: {quote: string}) {
  const [revealed, setRevealed] = useState(false)

  if (revealed) {
    return (
        <h1 className="text-3xl">{props.quote}</h1>
      )
  }

  return (
    <button 
      onClick={() => setRevealed(true)} 
      className="text-2xl font-bold bg-red-500 px-4 py-2 rounded-lg">
        Reveal
      </button>
  )
}