import { readFile } from "fs/promises";

export default async function QuoteGenerator() {
  const allQuotes = await readFile("./quotes.txt", "utf-8")
  const quotes = allQuotes.split("\n")
  const ranQuote = quotes[Math.floor(Math.random() * quotes.length)]

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl">{ranQuote}</h1>
    </div>
  )
}