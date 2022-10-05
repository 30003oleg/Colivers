import React from "react";
import styles from "./App.module.scss";
import { LobbyPage } from "./pages/LobbyPage";

function App() {
  return (
    <div className={styles.app}>
      <LobbyPage className="page" />
    </div>
  );
}

export default App;
