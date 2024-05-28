import { Suspense } from "react";
import { TabBarClient } from "./client";

export function TabBar() {
  console.log("Render tab bar")

  return <TabBarClient
    a={<div>A</div>}
    b={
      <Suspense fallback={<div>Loading...</div>}>
        <SlowComponent />
      </Suspense>
    }
    c={<div>C</div>}
  />;
}

async function SlowComponent() {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  console.log("Render slow component")
  
  return <div>B</div>
}