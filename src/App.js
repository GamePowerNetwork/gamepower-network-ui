import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [registered, setRegistered] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    if (typeof email !== "undefined") {


      axios.post(`http://gamepower.network:3000/email/`, {email})
      .then(res => {
        if(res.data === true) {
          setEmail("");
          setRegistered(true);
        }
      })
    }

    event.preventDefault();
  }
  return (
    <div className="App">
      <section className="App-details">
        <div className="App-logo-container">
          <img className="App-logo" src="./logo.svg"></img>
        </div>
        <h1 className="App-title">GamePower Coming Soon!</h1>
        <h3 className="App-intro">
          The GamePower website is currently under development
        </h3>
        <p className="App-description">
        GamePower will be the first fully decentralized game publishing platform. We aim to become the Steam of the Polkadot ecosystem, bringing gamers & devs together! The GamePower testnet will be launching soon. Until then, follow <a href="https://www.twitter.com/GamePowerNet">@GamePowerNet</a> on Twitter for up-to-date information!
        </p>
        <div className="App-subscribe">
          <h3>Get Notified When Our Testnet Goes Live</h3>
          <div className="App-form">
            {
            registered 
            ? <h2>Thank you for registering!</h2>
            : <form onSubmit={handleSubmit}>
              <input 
                type="email" 
                className="App-email" 
                placeholder="Email Address..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}>
              </input>
              <input type="submit" className="App-submit" value="Get Notified"></input>
            </form>
            }
          </div>
        </div>
      </section>
      <section className="App-art">
        <div>
          <img src="./DeveloperBanner.jpg" alt="GamePower App 1"></img>
          <p>Game development on the blockchain shouldn't be hard. GamePower aims to make development easy for game devs through our Unity and Javascript SDKs. Devs can now focus on creating engaging games and exciting NFTs for Web3! Leave the blockchain heavy lifting to us!</p>
        </div>
        
        <div>
          <img src="./GamerBanner.jpg" alt="GamePower App 2"></img>
          <p>Gamers should own their games, digital assets and game data. GamePower will empower gamers to have full control over their digital gaming identity and assets. Utilizing Substrate and launching on the Polkadot network gives us the chance to bring Web3 to gaming!</p>
        </div>
      </section>
    </div>
  );
}

export default App;
