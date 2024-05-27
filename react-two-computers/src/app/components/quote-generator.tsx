import { readFile } from "fs/promises";
import { RevealButton } from "./reveal-button";

export default async function QuoteGenerator() {
  const allQuotes = await readFile("./quotes.txt", "utf-8")
  const quotes = allQuotes.split("\n")
  const ranQuote = quotes[Math.floor(Math.random() * quotes.length)]

  return (
    <RevealButton buttonText={"Reveal"} >
      <h1 className="text-3xl">{ranQuote}</h1>
    </RevealButton>
  )
}