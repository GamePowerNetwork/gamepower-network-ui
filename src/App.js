import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="App-details">
        <h1 className="App-title">GamePower Coming Soon!</h1>
        <h3 className="App-intro">
          The GamePower website is currently under development
        </h3>
        <p className="App-description">
          The GamePower testnet will be launching soon. Until then, check out our Web3 Grant submission and follow @GamePowerNet on Twitter for up-to-date information!
        </p>
        <div className="App-subscribe">
          <h3>Get Notified When Our Testnet Goes Live</h3>
          <div className="App-form">
            <form action="#">
              <input type="email" className="App-email" placeholder="Email Address..."></input>
              <input type="submit" className="App-submit" value="Get Notified"></input>
            </form>
          </div>
        </div>
      </section>
      <section className="App-art">
        <img src="./screenshot1.png" alt="GamePower App 1"></img>
        <img src="./screenshot2.png" alt="GamePower App 2"></img>
      </section>
    </div>
  );
}

export default App;
