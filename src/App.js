import React, { useState } from "react";
import "./App.css";
import Banks from "./components/Banks";
import BanksRQ from "./components/BanksRQ";
import BankInterests from "./components/BankInterests";
import BankEditInterests from "./components/BankEditInterest";
import styled from "@emotion/styled";
import { ReactQueryDevtools } from "react-query-devtools";

const BanksContainer = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  padding: 10,
});

const BankContainer = styled.div({
  width: "40%",
  border: "1px solid black",
  minWidth: 250,
  minHeight: 150,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 10,
});

function App() {
  const [selectedBank, setSelectedBank] = useState(null);
  const [showBanks, setShowBanks] = useState(true);
  const [showBanksRQ, setShowBanksRQ] = useState(true);

  return (
    <div className="App">
      <h1>with great interests App</h1>
      <button onClick={() => setShowBanks(!showBanks)}>toggleBanks</button>
      <BanksContainer>
        <BankContainer>
          Bank / Verzekeraar
          {showBanks && <Banks setSelectedBank={setSelectedBank} />}
        </BankContainer>

        <BankContainer>
          Bank / Verzekeraar
          {showBanks && <Banks setSelectedBank={setSelectedBank} />}
        </BankContainer>
      </BanksContainer>

      <button onClick={() => setShowBanksRQ(!showBanksRQ)}>
        toggleBanks React Query
      </button>
      <BanksContainer>
        <BankContainer>
          Bank / Verzekeraar
          {showBanksRQ && <BanksRQ setSelectedBank={setSelectedBank} />}
        </BankContainer>

        <BankContainer>
          Bank / Verzekeraar
          {showBanksRQ && <BanksRQ setSelectedBank={setSelectedBank} />}
        </BankContainer>

        {/* <div style={{ width: "30%", border: "1px solid black", minWidth: 250 }}>
          {`Rente van ${selectedBank ?? "bank"}`}
        </div>

        <div style={{ width: "30%", border: "1px solid black", minWidth: 250 }}>
          Pas Rente aan
        </div> */}
      </BanksContainer>

      {/* BankInterests */}

      {selectedBank && (
        <BanksContainer>
          <BankContainer>
            <strong>{selectedBank}</strong>
            <BankInterests selectedBank={selectedBank} />
          </BankContainer>

          <BankContainer>
            <BankEditInterests selectedBank={selectedBank} />
          </BankContainer>
        </BanksContainer>
      )}

      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
