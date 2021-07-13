import { Link } from "react-router-dom";
import { FaMusic } from "react-icons/fa";

import Button from "../components/Button";
// import Image from "../components/Image";

const ConfirmAvatarPage = () => {

    
  return (
    <div id="confirmAvatar">
      {/* <section id="otherControls"> */}
      <Button id="musicOnOff" text={<FaMusic className="fas fa-music" />} />
      {/* </section>   */}

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

			<div id="avatarSelected"> </div>
		</main>
    </div>
  );
};

export default ConfirmAvatarPage;
