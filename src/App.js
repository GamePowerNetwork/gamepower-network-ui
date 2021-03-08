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
          <img className="App-logo" src="./logo.png"></img>
        </div>
        <h1 className="App-title">GamePower Coming Soon!</h1>
        <h3 className="App-intro">
          The GamePower website is currently under development
        </h3>
        <p className="App-description">
          The GamePower testnet will be launching soon. Until then, check out our Web3 Grant submission and follow <a href="https://www.twitter.com/GamePowerNet">@GamePowerNet</a> on Twitter for up-to-date information!
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
        <img src="./screenshot1.png" alt="GamePower App 1"></img>
        <img src="./screenshot2.png" alt="GamePower App 2"></img>
      </section>
    </div>
  );
}

export default App;
