import { Link } from 'react-router-dom'
import {FaMusic} from 'react-icons/fa'

import Button from '../components/Button'
import Image from '../components/Image'

import { Avatars } from '../DAO'

const AvatarsArr = []

AvatarsArr.push(new Avatars("avatar1","Cindy.png","Cindy")); 
AvatarsArr.push(new Avatars("avatar2","David.png","David"));
AvatarsArr.push(new Avatars("avatar3","Helen.png","Helen")); 
AvatarsArr.push(new Avatars("avatar4","Joan.png","Joan"));
AvatarsArr.push(new Avatars("avatar5","Stacy.png","Stacy"));
AvatarsArr.push(new Avatars("avatar6","Tiffany.png","Tiffany"));


const SelectAvatarPage = () => {





    return (
        <div id="selectAvatarContainer">
            <section id="otherControls">
            
                <Link to={`/`}>
                    <Button id="backButton" text={"Back"}/>
                </Link>

                <h1>
                    Select Your Avatar <br/> (click image)
                </h1>
                <Button id="musicOnOff" text={<FaMusic className='fas fa-music'/>}/> 

            </section> 

            <div id="selectAvatar">

                {AvatarsArr.map((avatar) => (

                <div key={avatar.id} id={avatar.id} className="avatar"> 
                    {avatar.name}
                    <Button text={avatar.name} className="avatarSelectionButtons">
                        <Image id={avatar.id} alt={`a pic of ${avatar.name}`} src={`../img`}/>
                    </Button>
                </div> 

                ))}

            </div>
        </div>
    )
}

export default SelectAvatarPage
