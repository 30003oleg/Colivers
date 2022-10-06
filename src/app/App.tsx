import styles from "./App.module.scss";
import { LobbyPage } from "./pages/LobbyPage";
import { DefaultHeader } from "./modules/DefaultHeader";

function App() {
  return (
    <div className={styles.app}>
      <DefaultHeader onBurgerMenuClick={() => {}} onUserMenuClick={() => {}} />
      <LobbyPage className={styles.page} />
    </div>
  );
}

export default App;
