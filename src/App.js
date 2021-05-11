import React, { useState } from 'react';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import MediaQuery from 'react-responsive'
import MobileApp from './MobileApp'
//import './App.css';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

function App() {
  const { scrollY } = useViewportScroll();
  const scale = useTransform(scrollY, [200, 500], [0, 1]);
  const scale2 = useTransform(scrollY, [2000, 2500], [0, 1]);
  const introY = useTransform(scrollY, [100, 600], [0, -300]);
  const swordY = useTransform(scrollY, [200, 600], [200, 0]);
  const swordOpacity = useTransform(scrollY, [200, 600], [0, 1]);
  const directionalBtnY = useTransform(scrollY, [300, 700], [200, 0]);
  const section1slidein = useTransform(scrollY, [900, 1200], [0, 1]);
  const section1imgY = useTransform(scrollY, [900, 1200], [200, 0]);
  const section2slidein = useTransform(scrollY, [1200, 1600], [0, 1]);
  const section2imgY = useTransform(scrollY, [1200, 1600], [200, 0]);
  const section3slidein = useTransform(scrollY, [1700, 2100], [0, 1]);
  const section3imgY = useTransform(scrollY, [1600, 2000], [200, 0]);

  const coins1Y = useTransform(scrollY, [2200, 2800], [200, 0]);
  const coins1Opacity = useTransform(scrollY, [2200, 2800], [0, 1]);
  const coins2Y = useTransform(scrollY, [2200, 2800], [200, 0]);
  const coins2Opacity = useTransform(scrollY, [2200, 2800], [0, 1]);
  const section4slidein = useTransform(scrollY, [2600, 2900], [0, 1]);
  const section4imgY = useTransform(scrollY, [2600, 2900], [200, 0]);
  const section5slidein = useTransform(scrollY, [3100, 3400], [0, 1]);
  const section5imgY = useTransform(scrollY, [3100, 3400], [200, 0]);

  const gamerOpacity = useTransform(scrollY, [3700, 4000], [0, 1]);
  const roadmapOpacity = useTransform(scrollY, [4500, 5000], [0, 1]);

  const footerCoinY = useTransform(scrollY, [3500, 4200], [0, 200]);
  const footerCoinOpacity = useTransform(scrollY, [3500, 4200], [0, 1]);
  const footerScale = useTransform(scrollY, [4200, 4500], [0, 1]);

  return (
    <React.Fragment>
      <MediaQuery maxWidth={999}>
        <MobileApp />
      </MediaQuery>
      <MediaQuery minWidth={1000}>
        <header>
          <img className="logo" src="./logo-name.svg" alt="logo"></img>
          <nav>
            <ul className="nav__links">
              <li><a href="#developers">Developers</a></li>
              <li><a href="#gamers">Gamers</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
              <li><a href="#social">Social</a></li>
            </ul>
          </nav>
          <a className="cta" href="mailto:dev@gamepower.network" target="_blank"><button>Contact Us</button></a>
        </header>
        
        <div className="parallax-wrapper">
          <div className="video-wrap">
            <video className="video" src="./video-gamers.mp4" autoPlay loop muted></video>
          </div>
          <div className="video-overlay"></div>
          
          <div className="content intro-content" style={{minHeight: 1000}}>
            <motion.img style={{y: introY}} className="text" src="./logo-name.svg" alt="logo"></motion.img>
            <motion.img style={{y: introY}} className="logo-no-text" src="./logo-no-text.png"></motion.img>

            <motion.span style={{y: introY}} className="intro">GamePower will be the first fully decentralized game publishing platform built on Kusama and Polkadot. Discover new games, freely trade your digital games and earn rare collectibles with REAL WORLD value.</motion.span>

            <img className="woosh-top" src="./woosh-top.svg"></img>
            <img className="woosh-bottom" src="./woosh-bottom.svg"></img>

            <motion.div className="saying" style={{scale}}>EAT . SLEEP . GAME<a name="developers"></a></motion.div>
          </div>
        </div>
        <div className="regular-wrapper">
          <div className="content">
            <img className="woosh-top" src="./woosh-top.svg"></img>
            <motion.img style={{opacity: scale, y: directionalBtnY, rotate: 25}} className="directional-button" src="./directional-button.svg"></motion.img>
            <motion.img style={{opacity: swordOpacity, y: swordY, rotate: 20}} className="weapon1" src="./weapon1.svg"></motion.img>
            <motion.section className="sectionOdd" style={{opacity: section1slidein}}>
              <h2>Why GamePower?</h2>
              <p>As the gaming industry has moved to a more digital release platform, publishers have benefited greatly. However, developers and gamers have been given the short-end of the deal. Small developers who mainly focused on digital only releases have been pushed out of the market. Large developers have been forced to unfairly monetize their games just to keep publishers happy. Players have had to deal with a gaming industry that has become non-consumer friendly.</p>
              <motion.img style={{y: section1imgY}} className="why-gamepower" src="./why-gamepower.svg"></motion.img>
            </motion.section>

            <motion.section className="sectionEven" style={{opacity: section2slidein}}>
              <h2>Decentralized Publishing!</h2>
              <p>A decentralized publishing platform allows game developers to cut the middle-man. Release games to an eager audience without forking over tons of hard earned revenue. The GamePower network only retains 10% of sales which feeds back into the network for continued growth. Revenue from game sales and royalties are distributed in a trustless manner.</p>
              <motion.img  style={{y: section2imgY}} className="publish" src="./publish.svg"></motion.img>
            </motion.section>

            <motion.section className="sectionOdd section3" style={{opacity: section3slidein}}>
              <h2>Game Collectibles!</h2>
              <p>Each game released on the GamePower platform is a NFT collectible! This means developers can release special limited editions of their games which will be more valuable for players. Players can also resell and trade these games. All trades and re-selling of games will pay the developer with a portion of the sale.</p>
              <motion.img  style={{y: section3imgY}} className="nft" src="./nft.svg"></motion.img>
            </motion.section>

            <img className="woosh-bottom" src="./woosh-bottom.svg"></img>
            <motion.div className="saying" style={{scale: scale2}}>PLAY . TO . EARN<a name="gamers"></a></motion.div>
            <motion.img style={{opacity: coins1Opacity, y: coins1Y}} className="coins1" src="./coins1.svg"></motion.img>
            <motion.img style={{opacity: coins2Opacity, y: coins2Y}} className="coins2" src="./coins2.svg"></motion.img>
          </div>
        </div>
        <div className="parallax-wrapper">
          <div className="content">
            <motion.section className="sectionOdd" style={{opacity: section4slidein}}>
              <h2>Own It!</h2>
              <p>Gone are the Pay-to-play days! Now gamers can earn money and collectibles just by playing games! Every collectible that you earn on the GamePower network will be uniquely yours and tradeable across multiple blockchains. GamePower nor the developer can take it away. Sell, trade or even stake collectibles to earn more rewards!</p>
              <motion.img  style={{y: section4imgY, rotate: 15}} className="controller" src="./controller.svg"></motion.img>
            </motion.section>

            <motion.section className="sectionEven" style={{opacity: section5slidein}}>
              <h2>Sell It!</h2>
              <p>Sell and trade your games or game assets on an open marketplace and across blockchains. Not only will the seller earn money every time an asset is sold, but the developer will also earn a portion of the sale. Gamers can now support developers even when selling their assets.</p>
              <motion.img  style={{y: section5imgY, rotate: 15}} className="rocket" src="./rocket.svg"></motion.img>
            </motion.section>
          </div>
        </div>
        <div className="regular-wrapper">
          <div className="content roadmap">
            <a name="roadmap"></a>
            <img className="woosh-top" src="./woosh-top.svg"></img>
            <motion.img style={{opacity: footerCoinOpacity, y: footerCoinY}} className="coins1" src="./coins1.svg"></motion.img>
            <motion.img style={{opacity: footerCoinOpacity, y: footerCoinY}} className="coins2" src="./coins2.svg"></motion.img>

            <motion.img style={{opacity: footerCoinOpacity, y: footerCoinY}} className="coins3" src="./coins1.svg"></motion.img>
            <motion.img style={{opacity: footerCoinOpacity, y: footerCoinY, scaleX: -1}} className="coins4" src="./coins2.svg"></motion.img>
            <motion.img  style={{opacity: gamerOpacity}} className="gamer" src="./gamer.jpg"></motion.img>

            <section>
              <motion.img style={{opacity: roadmapOpacity}} className="roadmap" src="./roadmap.png"></motion.img>
            </section>
          </div>
          <div className="content footer">
            <a name="social"></a>
            <section>
              <motion.img style={{scale: footerScale}} className="footer-logo" src="./logo-name-dark.svg" alt="logo"></motion.img>
              <p className="title">More to come soon!</p>
              <p className="sub-title">Follow us on social for up-to-date news!</p>

              <div className="social">
                <IconButton onClick={() => { window.open('https://www.twitter.com/gamepowernet', "_blank") }}>
                  <TwitterIcon fontSize="large"/>
                </IconButton>

                <IconButton onClick={() => { window.open('https://discord.com/invite/em75apGJZV', "_blank") }}>
                  <i class="fab fa-discord" style={{fontSize: 30}}></i>
                </IconButton>

                <IconButton onClick={() => { window.open('https://www.facebook.com/GamePowerNetwork', "_blank") }}>
                  <FacebookIcon fontSize="large"/>
                </IconButton>

                
              </div>
            </section>
          </div>
        </div>
      </MediaQuery>
    </React.Fragment>
  );
}

export default App;
