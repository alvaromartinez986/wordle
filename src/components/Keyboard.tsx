import React from "react";
import Key from "./Key";
import { useWordsContext } from "../context/useWordsContext";

const Keyboard: React.FC = () => {
	const { keys } = useWordsContext();

	const handleKeyPress = (key: string) => {
		window.dispatchEvent(
			new KeyboardEvent("keydown", { key })
		);
	};

	return (
		<div className="flex flex-col gap-2 bg-slate-100 rounded-md p-6 z-10">
			{keys.map((row, index) => (
				<div key={index} className="flex gap-2">
					{row.map(({ key, bgColor }) => (
						<Key
							key={key}
							letter={key}
							bgColor={bgColor}
							fontSize="text-lg"
							onClick={() => {
								handleKeyPress(key);
							}}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default Keyboard;
