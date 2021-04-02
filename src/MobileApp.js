import React, { useState } from 'react';
//import './App.css';

import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';

function MobileApp() {
  

  return (
    <React.Fragment>
        
        <div className="parallax-wrapper">
          
          <div className="content" style={{textAlign: "center"}}>
            <img className="logo-no-text" src="./logo-no-text.png"></img>
            <img className="text" src="./logo-name.svg" alt="logo"></img>

            <p className="intro">GamePower will be the first fully decentralized game publishing platorm built on Substrate. Discover new games, freely trade your digital games and earn rare collectibles with REAL WORLD value.</p>
          </div>
        </div>
        <div className="regular-wrapper">
          <div className="content">
          <img style={{rotate: 25}} className="directional-button" src="./directional-button.svg"></img>
            <img className="woosh-top" src="./woosh-top.svg"></img>
            <section>
              <h2>Why GamePower?</h2>
              <p>As the gaming industry has moved to a more digital release platform, publishers have benefited greatly. However, developers and gamers have been given the short-end of the deal. Small developers who mainly focused on digital only releases have been pushed out of the market. Large developers have been forced to unfairly monetize their games just to keep publishers happy. Players have had to deal with a gaming industry that has become non-consumer friendly.</p>
              
            </section>

            <section>
              <h2>Decentralized Publishing!</h2>
              <p>A decentralized publishing platform allows game developers to cut the middle-man. Release games to an eager audience without forking over tons of hard earned revenue. The GamePower network only retains 10% of sales which feeds back into the network for continued growth. Revenue from game sales and royalties are distributed in a trustless manner.</p>
              
            </section>

            <section>
              <h2>Game Collectibles!</h2>
              <p>Each game released on the GamePower platform is a NFT collectible! This means developers can release special limited editions of their games which will be more valuable for players. Players can also resell and trade these games. All trades and re-selling of games will pay the developer with a portion of the sale.</p>
              
            </section>
          </div>
        </div>
        <div className="parallax-wrapper">
          <div className="content">
            <section>
              <h2>Own It!</h2>
              <p>Gone are the Pay-to-play days! Now gamers can earn money and collectibles just by playing games! Every collectible that you earn on the GamePower network will be uniquely yours and tradable across multiple blockchains. GamePower nor the developer can take it away. Sell, trade or even stake collectibles to earn more rewards!</p>
            </section>

            <section>
              <h2>Sell It!</h2>
              <p>Sell and trade your games or game assets on an open marketplace and across blockchains. Not only will the seller earn money every time an asset is sold, but the developer will also earn a portion of the sale. Gamers can now support developers even when selling their assets.</p>
            </section>
          </div>
        </div>
        <div className="regular-wrapper">
          <div className="content footer">
            <a name="social"></a>
            <img className="woosh-top" src="./woosh-top.svg"></img>
            <section>
                <img className="gamer" src="./gamer.jpg"></img>
              <img className="footer-logo" src="./logo-name-dark.svg" alt="logo"></img>
              <p className="title">More to come soon!</p>
              <p className="sub-title">Follow us on Twitter for up-to-date news!</p>

              <div className="social">
                <IconButton onClick={() => { window.open('https://www.twitter.com/gamepowernet', "_blank") }}>
                  <TwitterIcon fontSize="large"/>
                </IconButton>
              </div>
            </section>
          </div>
        </div>
    </React.Fragment>
  );
}

export default MobileApp;
