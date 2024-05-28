import QuoteGenerator from "./components/quote-generator";
import { TabBar } from "./components/tab-bar";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center align-middle 
    justify-center flex-col gap-24">
      <QuoteGenerator />
      <TabBar />
    </div>
  );
}
