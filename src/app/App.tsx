import styles from "./App.module.scss";
import { LobbyPage } from "./pages/LobbyPage";
import { PersonalPage } from "./components/PersonalPage";
import { DefaultHeader } from "./modules/DefaultHeader";

function App() {
  return (
    <div className={styles.app}>
      <DefaultHeader onBurgerMenuClick={() => {}} onUserMenuClick={() => {}} />
      <LobbyPage className={styles.page} />
      <PersonalPage />
    </div>
  );
}

export default App;
