import React from "react";
import Keyboard from "./components/Keyboard";
import KeyGuessSet from "./components/KeyGuessSet";

const Main: React.FC = () => {
	return (
		<div className="flex flex-col justify-center align-middle w-screen h-screen items-center ">
			<KeyGuessSet />
			<Keyboard />
		</div>
	);
};

export default Main;
