import React from "react";

interface ButtonProps {
	onClick: () => void;
	width?: string;
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	onClick,
	children,
	width = "w-1/2"
}) => {
	return (
		<button
			className={`bg-green-500 text-white font-bold py-2 px-4 rounded-md ${width}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
