import { TabBarClient } from "./client";

export function TabBar() {
  console.log("Render tab bar")
  
  return <TabBarClient a={<div>A</div>} b={<div>B</div>} c={<div>C</div>} />;
}