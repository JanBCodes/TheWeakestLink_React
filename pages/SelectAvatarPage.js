import { Link } from 'react-router-dom';
import {FaMusic} from 'react-icons/fa';

import Button from '../components/Button';
// import Image from '../components/Image';
import Hero from '../components/Hero';
// import Footer from '../components/Footer'

import { Avatars } from '../modules/DAO';

  const AvatarsArr = [];

  AvatarsArr.push(new Avatars("avatar1","Birdman.png","Birdman","1")); 
  AvatarsArr.push(new Avatars("avatar2","Nicki.png","Nicki","2"));
  AvatarsArr.push(new Avatars("avatar3","Drake.png","Drake","3")); 
  AvatarsArr.push(new Avatars("avatar4","Cardi.png","Cardi","4"));
  AvatarsArr.push(new Avatars("avatar5","Wayne.png","Wayne","5"));
  AvatarsArr.push(new Avatars("avatar6","Megan.png","Megan","6"));



const SelectAvatarPage = () => {


  const selectedAvatar = (event) => {

      const playerSelected = event.target.id

      sessionStorage.setItem('Name', `${playerSelected}`)

      alert(`${playerSelected}: Selected`)

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
              Select Your Player (click Image)
          </h1>

          <Button id="musicOnOff" text={<FaMusic className='fas fa-music'/>}/> 

        </section> 

        <div id="selectAvatar">

          {AvatarsArr.map((avatar) => (
              <>        
            <Link to={`/confirmPlayer`} key={avatar.id}> 

              <div key={avatar.key} id={avatar.name} text={avatar.name}  className="avatar" onClick={selectedAvatar}> </div>

            </Link>


            </>
          ))}

          {AvatarsArr.map((avatar) => (

            <Button key={avatar.key} text={avatar.name} className="avatarNameDisplayButtons"/>

          ))}

        </div>
    </div>
    </>
  )
}

export default SelectAvatarPage;
