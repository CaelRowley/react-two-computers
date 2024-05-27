import { readFile } from "fs/promises";
import { RevealButton } from "./reveal-button";

export default async function QuoteGenerator() {
  const allQuotes = await readFile("./quotes.txt", "utf-8")
  const quotes = allQuotes.split("\n")
  const ranQuote = quotes[Math.floor(Math.random() * quotes.length)]

  return (
    <RevealButton quote={ranQuote} />
  )
}