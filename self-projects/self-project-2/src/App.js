import React from "react"
import data from "./data"
import Header from "./components/Header"
import Travel from "./components/Travel"
import Footer from "./components/Footer"

export default function App() {
  let travels = data.map(item => (<Travel item={item}/>));

  return (
    <div>
      <Header />
      {travels}
      <Footer />
    </div>
  );
}