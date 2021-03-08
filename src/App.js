import React, { useState } from 'react';
import './App.css';

function App() {

  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    if (typeof email !== "undefined") {

      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    
      if (!pattern.test(email)) {
        alert("Invalid email entered");
        return;
      }

      fetch('http://gamepower.network:3000/email/', {
          method: 'POST',
          // We convert the React state to JSON and send it as the POST body
          body: JSON.stringify({
            email
          })
        }).then(function(response) {
          if(response === true) {
            alert("Thank You!");
          }
          return response.json();
        });
    
    }

    event.preventDefault();
  }
  return (
    <div className="App">
      <section className="App-details">
        <div className="App-logo-container">
          <img className="App-logo" src="./Social_Profile.png"></img>
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
            <form onSubmit={handleSubmit}>
              <input type="email" className="App-email" placeholder="Email Address..." onChange={(e) => setEmail(e.target.value)}></input>
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
