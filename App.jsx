import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Styles from "./style.css"
export default function App() {
  return (
      
    <main className="main-container">
    <Header/>
    <Body/>
    <Footer/>
    </main>
  )
}