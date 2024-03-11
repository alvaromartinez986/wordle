import React, {
	createContext,
	useContext,
	useState
} from "react";
import { Key } from "../components/KeyGuess";

interface WordsContextType {
	word: string;
	keys: Key[][];
	setWord: React.Dispatch<
		React.SetStateAction<string>
	>;
	setKeys: React.Dispatch<
		React.SetStateAction<Key[][]>
	>;
	wordGuess: string;
	setWordGuess: React.Dispatch<
		React.SetStateAction<string>
	>;
	rowActive: number;
	setRowActive: React.Dispatch<
		React.SetStateAction<number>
	>;
	resetGame: () => void;
}

const initialKeys: Key[][] = [
	[
		{ key: "Q", bgColor: "bg-slate-200" },
		{ key: "W", bgColor: "bg-slate-200" },
		{ key: "E", bgColor: "bg-slate-200" },
		{ key: "R", bgColor: "bg-slate-200" },
		{ key: "T", bgColor: "bg-slate-200" },
		{ key: "Y", bgColor: "bg-slate-200" },
		{ key: "U", bgColor: "bg-slate-200" },
		{ key: "I", bgColor: "bg-slate-200" },
		{ key: "O", bgColor: "bg-slate-200" },
		{ key: "P", bgColor: "bg-slate-200" }
	],
	[
		{ key: "A", bgColor: "bg-slate-200" },
		{ key: "S", bgColor: "bg-slate-200" },
		{ key: "D", bgColor: "bg-slate-200" },
		{ key: "F", bgColor: "bg-slate-200" },
		{ key: "G", bgColor: "bg-slate-200" },
		{ key: "H", bgColor: "bg-slate-200" },
		{ key: "J", bgColor: "bg-slate-200" },
		{ key: "K", bgColor: "bg-slate-200" },
		{ key: "L", bgColor: "bg-slate-200" }
	],
	[
		{ key: "ENTER", bgColor: "bg-slate-200" },
		{ key: "Z", bgColor: "bg-slate-200" },
		{ key: "X", bgColor: "bg-slate-200" },
		{ key: "C", bgColor: "bg-slate-200" },
		{ key: "V", bgColor: "bg-slate-200" },
		{ key: "B", bgColor: "bg-slate-200" },
		{ key: "N", bgColor: "bg-slate-200" },
		{ key: "M", bgColor: "bg-slate-200" },
		{ key: "←", bgColor: "bg-slate-200" }
	]
];

const WordsContext =
	createContext<WordsContextType>({
		word: "",
		setWord: () => {},
		keys: initialKeys,
		setKeys: () => {},
		wordGuess: "",
		setWordGuess: () => {},
		rowActive: 0,
		setRowActive: () => {},
		resetGame: () => {}
	});

const WordsProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [word, setWord] = useState<string>("");
	const [keys, setKeys] = useState<Key[][]>(
		JSON.parse(JSON.stringify(initialKeys))
	);

	const [wordGuess, setWordGuess] =
		useState<string>("");

	const [rowActive, setRowActive] =
		React.useState<number>(0);

	const resetGame = () => {
		setWord("");
		setWordGuess("");
		setKeys(
			JSON.parse(JSON.stringify(initialKeys))
		);
		setRowActive(0);
	};

	return (
		<WordsContext.Provider
			value={{
				word,
				setWord,
				keys,
				setKeys,
				wordGuess,
				setWordGuess,
				rowActive,
				setRowActive,
				resetGame
			}}
		>
			{children}
		</WordsContext.Provider>
	);
};

const useWordsContext = () => {
	const wordsContext = useContext(WordsContext);

	if (!wordsContext) {
		throw new Error(
			"useWordsContext must be used within a WordsProvider"
		);
	}

	return wordsContext;
};

export {
	WordsProvider,
	useWordsContext,
	WordsContext
};
