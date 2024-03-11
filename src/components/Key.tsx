import React from "react";

const Key: React.FC<{
	letter: string;
	bgColor: string;
	fontSize?: string;
	onClick?: () => void;
}> = ({
	letter,
	bgColor,
	fontSize = "text-4xl",
	onClick
}) => {
	return (
		<button
			className={`${bgColor} border border-solid rounded-md w-16 h-16 align-middle flex justify-center items-center`}
			onClick={onClick}
		>
			<h1 className={`${fontSize} uppercase`}>
				{letter}
			</h1>
		</button>
	);
};

export default Key;
