import QuoteGenerator from "./components/quote-generator";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center align-middle 
    justify-center flex-col gap-4">
      <QuoteGenerator />
      <QuoteGenerator />
      <QuoteGenerator />
      <QuoteGenerator />
    </div>
  );
}
