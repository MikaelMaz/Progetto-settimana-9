import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavComp from './Components/NavComp';
import ShowsComp from './Components/ShowsComp';
import TrendingComp from './Components/TrendingComp';
import WatchComp from './Components/WatchComp';
import Releases from './Components/Releases';
import FooterComp from './Components/FooterComp';

function App() {
  return (
    <div className="App">
      <header>
        <NavComp/>
      </header>
      <main>
        <ShowsComp/>
        <TrendingComp/>
        <WatchComp/>
        <Releases/>
      </main>
      <footer>
        <FooterComp/>
      </footer>
    </div>
  );
}

export default App;
