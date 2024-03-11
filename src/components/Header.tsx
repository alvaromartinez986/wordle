import React from "react";

interface HeaderProps {
	onClickHelp: () => void;
}
const Header: React.FC<HeaderProps> = ({
	onClickHelp
}) => {
	return (
		<header className="rounded-lg bg-gray-200 p-4 w-2/6 mt-10 flex flex-row justify-between">
			<p
				className="text-center rounded-full bg-slate-400 w-8 align-middle flex justify-center items-center cursor-pointer font-bold z-10"
				onClick={onClickHelp}
			>
				?
			</p>
			<h1 className="text-2xl font-bold text-center uppercase">
				wordle
			</h1>
			<p className="w-30">Nigth mode</p>
		</header>
	);
};

export default Header;
