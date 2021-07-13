import { Link } from 'react-router-dom'
import {FaMusic} from 'react-icons/fa'

import Button from '../components/Button'
import Image from '../components/Image'
import Hero from '../components/Hero'

import { Avatars } from '../modules/DAO'


    const AvatarsArr = []

    AvatarsArr.push(new Avatars("avatar1","Cindy.png","Cindy")); 
    AvatarsArr.push(new Avatars("avatar2","David.png","David"));
    AvatarsArr.push(new Avatars("avatar3","Helen.png","Helen")); 
    AvatarsArr.push(new Avatars("avatar4","Joan.png","Joan"));
    AvatarsArr.push(new Avatars("avatar5","Stacy.png","Stacy"));
    AvatarsArr.push(new Avatars("avatar6","Tiffany.png","Tiffany"));


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
                            
                    <Link to={`/confirmPlayer`}>
                        <Button id={avatar.id} text={avatar.name} className="avatarNameDisplayButtons" onClick={selectedAvatar}/>

                        <div key={avatar.id} className="avatar"> 
                            <Image id={avatar.id} className={avatar.name} alt={`a pic of ${avatar.name}`} src={""}/>
                        </div> 
                    </Link>

                ))}

            </div>
        </div>
        </>
    )
}

export default SelectAvatarPage;
