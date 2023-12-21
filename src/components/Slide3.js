import './Slide3.css';

import Image1 from '../assets/img/team1.png';
import Image2 from '../assets/img/team2.png';
import Image3 from '../assets/img/team3.png';
import Playsync from '../assets/img/LogoPlaySync.svg'; 
import Youtube from '../assets/img/youtube.png'; 
import Twitter from '../assets/img/twitter.png'; 
import Discord from '../assets/img/discord.png'; 


const Slide3 = () => {
      return( 
          <>
                    <section class="otherInfo container">
            <h1>New way for your game world</h1>
            <h2>
                A relationship between players and fans that has never been seen
                before.
            </h2>
            <div class="otherInfo__team">
                <div class="otherInfo__team1 otherInfo__team-co">
                    <img src={Image1} alt="" />
                    <div class="otherInfo__team-text">
                        <h1>FOR PLAYERS & TEAMS</h1>
                        <h2>Participants and salaries</h2>
                        <h3>
                            Once upon a time, in the land of Sproglonia, there
                            was a peculiar creature known as the Snoodlewump.
                            This snortacular creature had a head made of
                            blueberry muffins and a body covered in
                            rainbow-colored feathers.
                        </h3>
                    </div>
                </div>
                <div class="otherInfo__team2 otherInfo__team-co">
                    <img src={Image2} alt="" />
                    <div class="otherInfo__team-text">
                        <h1>FOR FANS & COMMUNITY</h1>
                        <h2>Announcements and events</h2>
                        <h3>
                            The Snoodlewump's favorite pastime was collecting
                            shiny bottle caps and creating intricate sculptures
                            out of mashed potatoes.
                        </h3>
                    </div>
                </div>
                <div class="otherInfo__team3 otherInfo__team-co">
                    <img src={Image3} alt="" />
                    <div class="otherInfo__team-text">
                        <h1>FOR ORGANIZATORS & SPONSORS</h1>
                        <h2>Pricing and cryptocurrency</h2>
                        <h3>
                            Eventually, the Snoodlewump reached the Monkey
                            Kingdom, where it challenged the Monktrooper leader
                            to a banana-eating contest.
                        </h3>
                    </div>
                </div>
            </div>

        </section>
        <footer class="footer">
            <div class="footer__content container">
                <div class="footer__content-logo">
                    <a href="#"><img src={Playsync} /></a>
                    <h1>PLAYSYNC</h1>
                </div>
                <h1>©All Rights Reserved</h1>
                <div class="footer__content-svgs">
                    <a href=""><img src={Youtube} alt="" /></a>
                    <a href=""><img src={Twitter} alt="" /></a>
                    <a href=""><img src={Discord} alt="" /></a>
                </div>
            </div>
        </footer>
          </>
      );
  }
  
  export default Slide3;