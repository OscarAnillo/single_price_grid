import CommunityComp from './components/community-comp';
import PriceComponent from "./components/price-component";
import InfoComponent from "./components/info-component";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <CommunityComp />
        <div className="row">
          <div>

          <PriceComponent />
          </div>
          <div>

           <InfoComponent />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
