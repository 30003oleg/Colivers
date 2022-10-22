import React from "react";
import styles from "./App.module.scss";
import { LobbyPage } from "./pages/LobbyPage";
import PersonalPage from "../components/PersonalPage";

function App() {
  return (
    <div className={styles.app}>
      <LobbyPage className="page" />
      <div className="page__personal">
        <PersonalPage/>
      </div>
    </div>
  );
}

export default App;
