import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavComp from './Components/NavComp';
import ShowsComp from './Components/ShowsComp';
import TrendingComp from './Components/TrendingComp';
import WatchComp from './Components/WatchComp';
import Releases from './Components/Releases';
import FooterComp from './Components/FooterComp';
import GalleryComp1 from './Components/GalleryComp1';

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
        <GalleryComp1/>
      </main>
      <footer>
        <FooterComp/>
      </footer>
    </div>
  );
}

export default App;
