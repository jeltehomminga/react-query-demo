import React, { useState } from "react";
import "./App.css";
import Banks from "./components/Banks";

function App() {
  const [selectedBank, setSelectedBank] = useState(null);
  const [showBanks, setShowBanks] = useState(true);
  const [showBanksRQ, setShowBanksRQ] = useState(true);

  console.log(selectedBank);
  return (
    <div className="App">
      <h1>with great interests App</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: 10,
        }}
      >
        <div
          style={{
            width: "30%",
            border: "1px solid black",
            minWidth: 250,
            minHeight: 150,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 10,
          }}
        >
          Bank / Verzekeraar{" "}
          <button
            onClick={() => setShowBanks((showBanks) => !showBanks)}
            style={{ margin: 20 }}
          >
            toggleBanks
          </button>
          {showBanks && <Banks setSelectedBank={setSelectedBank} />}
        </div>

        <div
          style={{
            width: "30%",
            border: "1px solid black",
            minWidth: 250,
            minHeight: 150,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 10,
          }}
        >
          Bank / Verzekeraar{" "}
          <button
            onClick={() => setShowBanks((showBanks) => !showBanks)}
            style={{ margin: 20 }}
          >
            toggleBanks
          </button>
          {showBanks && <Banks setSelectedBank={setSelectedBank} />}
        </div>

        {/* <div style={{ width: "30%", border: "1px solid black", minWidth: 250 }}>
          {`Rente van ${selectedBank ?? "bank"}`}
        </div>

        <div style={{ width: "30%", border: "1px solid black", minWidth: 250 }}>
          Pas Rente aan
        </div> */}
      </div>
    </div>
  );
}

export default App;
