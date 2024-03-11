import React, {
	useState,
	useEffect,
	useCallback
} from "react";
import { useWordsContext } from "../context/useWordsContext";
import { colorizeArray } from "../utils/colorBG";

interface KeyGuessProps {
	isActive: boolean;
	setRowActive: React.Dispatch<
		React.SetStateAction<number>
	>;
}

export type Key = {
	key: string;
	bgColor: string;
};

const KeyGuess: React.FC<KeyGuessProps> = ({
	isActive,
	setRowActive
}) => {
	const [keysPressed, setKeysPressed] = useState<
		Key[]
	>(
		Array(5).fill({
			key: "",
			bgColor: "bg-white"
		})
	);
	const [letterCounter, setLetterCounter] =
		useState<number>(0);

	const { word, setKeys, setWordGuess } =
		useWordsContext();

	const handleKeyPress = useCallback(
		(event: KeyboardEvent) => {
			const { key } = event;
			if (/^[a-zA-Z]$/.test(key)) {
				setLetterCounter((prev) => prev + 1);

				setKeysPressed((prev) => {
					const newKeys = [...prev];
					const index = prev.findIndex(
						({ key }) => key === ""
					);

					if (index !== -1) {
						newKeys[index] = {
							key,
							bgColor: "bg-slate-400"
						};
					}
					return newKeys;
				});
			}
			if (key === "Backspace") {
				setKeysPressed((prev) => {
					const newKeys = [...prev];
					const lastIndex = prev
						.slice()
						.reverse()
						.findIndex(({ key }) =>
							/^[a-zA-Z]$/.test(key)
						);

					if (lastIndex !== -1) {
						const index =
							prev.length - 1 - lastIndex;
						newKeys[index] = {
							key: "",
							bgColor: "bg-white"
						};
					}
					return newKeys;
				});
				setLetterCounter((prev) => prev - 1);
			}
		},
		[setKeysPressed, setLetterCounter]
	);

	useEffect(() => {
		if (isActive) {
			window.addEventListener(
				"keydown",
				handleKeyPress
			);
		}

		return () => {
			if (isActive) {
				window.removeEventListener(
					"keydown",
					handleKeyPress
				);
			}
		};
	}, [isActive]);

	useEffect(() => {
		if (letterCounter === 5) {
			setRowActive((prev) => prev + 1);
			setKeysPressed((prev) => {
				return colorizeArray(prev, word);
			});
			setWordGuess(
				keysPressed.map((key) => key.key).join("")
			);
		}
	}, [letterCounter, setRowActive, word]);

	useEffect(() => {
		if (letterCounter === 5) {
			setKeys((prev) => {
				const newKeys = [...prev];
				keysPressed.forEach((element) => {
					newKeys.forEach((row, indexRow) => {
						row.forEach((key, index) => {
							if (
								key.key.toLowerCase() ===
								element.key.toLowerCase()
							) {
								newKeys[indexRow][index] = {
									...element
								};
							}
						});
					});
				});
				return newKeys;
			});
		}
	}, [keysPressed, letterCounter]);

	return (
		<div className="flex flex-row space-x-6">
			{keysPressed.map(
				({ key, bgColor }, index) => (
					<div
						key={index}
						className={`w-16 h-16 border border-solid rounded-md flex justify-center items-center ${bgColor}`}
					>
						<h1 className="text-4xl uppercase">
							{key}
						</h1>
					</div>
				)
			)}
		</div>
	);
};

export default KeyGuess;
