import { Link } from 'react-router-dom';
import {FaMusic} from 'react-icons/fa';

import Button from '../components/Button';
// import Image from '../components/Image';
import Hero from '../components/Hero';
// import Footer from '../components/Footer'

import { Avatars } from '../modules/DAO';

  const AvatarsArr = [];

  AvatarsArr.push(new Avatars("avatar1","Birdman.png","Birdman")); 
  AvatarsArr.push(new Avatars("avatar2","Nicki.png","Nicki"));
  AvatarsArr.push(new Avatars("avatar3","Drake.png","Drake")); 
  AvatarsArr.push(new Avatars("avatar4","Cardi.png","Cardi"));
  AvatarsArr.push(new Avatars("avatar5","Wayne.png","Wayne"));
  AvatarsArr.push(new Avatars("avatar6","Megan.png","Megan"));



const SelectAvatarPage = () => {


  const selectedAvatar = () => {


  }


  return (
    <>
    <Hero/>
    <div id="selectAvatarContainer">
        <section id="otherControls">
        
          <Link to={`/`}>
              <Button id="backButton" text={"Back"}/>
          </Link>

          <h1>
              Select Your Player
          </h1>

          <Button id="musicOnOff" text={<FaMusic className='fas fa-music'/>}/> 

        </section> 

        <div id="selectAvatar">

            {AvatarsArr.map((avatar) => (
                        
              <Link to={`/confirmPlayer`} key={"none"+avatar.id}> 

                <div key={avatar.id} id={avatar.name} className="avatar">
                </div>
                <Button key={avatar.name} text={avatar.name} className="avatarNameDisplayButtons" onClick={selectedAvatar}/>

              </Link>
            ))}
        </div>
    </div>
    </>
  )
}

export default SelectAvatarPage;
