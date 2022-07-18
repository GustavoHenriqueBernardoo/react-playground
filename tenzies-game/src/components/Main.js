import React from "react";

export default function Main() {
  return (
    <main className="main">
      <h1 className="main--title">Tenzies</h1>
      <p className="main--subtext">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="main--grid">
        <div className="main--dice selected">1</div>
        <div className="main--dice">1</div>
        <div className="main--dice">1</div>
        <div className="main--dice">1</div>
        <div className="main--dice">1</div>
        <div className="main--dice">1</div>
        <div className="main--dice">1</div>
        <div className="main--dice">1</div>
        <div className="main--dice">1</div>
        <div className="main--dice">1</div>
      </div>
      <button className="main--button">Roll</button>
    </main>
  )
}