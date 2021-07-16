import { Link } from "react-router-dom";
import { FaMusic } from "react-icons/fa";

import Button from "../components/Button";
// import Image from "../components/Image";

const ConfirmAvatarPage = () => {


	const playerSelected = sessionStorage.getItem('Name')
    
  return (

    <div id="confirmAvatar">

      <Button id="musicOnOff" text={<FaMusic className="fas fa-music" />} />

		<main>
			<div>
				<h1>Are you Happy with Your Avatar?</h1>

				<Link to={`/playGame`}>
					<Button type="button" id={"Yes"} text={"Yes"} />
				</Link>

				<Link to={`/selectPlayer`}>
					<Button type="button" id={"No"} text={"Re-Select"} />
				</Link>
			
			</div>

			<div className="avatarNameDisplayButtons"> 
				<div id={playerSelected} className="avatarSelected">
				</div>
				{playerSelected}
			</div>		
		</main>
    </div>
  );
};

export default ConfirmAvatarPage;
