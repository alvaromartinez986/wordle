import React, {
	useEffect,
	useState
} from "react";
import KeyGuess from "./KeyGuess";
import { useWordsContext } from "../context/useWordsContext";

const KeyGuessSet: React.FC = () => {
	const { rowActive, setRowActive, word } =
		useWordsContext();

	const [key, setKey] = useState(0);

	const remountComponent = () => {
		setKey((prevKey) => prevKey + 1); // Change key value to force remount
	};

	useEffect(() => {
		remountComponent();
	}, [word]);

	return (
		<div
			className="flex flex-col gap-3 mb-10"
			key={key}
		>
			{Array.from({ length: 5 }, (_, index) => (
				<KeyGuess
					key={index}
					isActive={rowActive === index}
					setRowActive={setRowActive}
				/>
			))}
		</div>
	);
};

export default KeyGuessSet;
