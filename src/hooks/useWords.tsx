import { useEffect, useState } from "react";
import { useWordsContext } from "../context/useWordsContext";

const useWords = () => {
	const { setWord } = useWordsContext();
	const [loading, setLoading] =
		useState<boolean>(false);

	const loadFile = async () => {
		try {
			const response = await fetch("/words.txt");
			const text = await response.text();
			const words = text.split("\n");
			return words;
		} catch (error) {
			console.error(
				"Error loading words:",
				error
			);
			return [""];
		}
	};

	const chooseWord = (words: string[]) => {
		const randomIndex = Math.floor(
			Math.random() * words.length
		);
		const word = words[randomIndex];
		const filteredWord = word.substring(
			0,
			word.length - 1
		);
		return filteredWord;
	};

	const fetchWords = async () => {
		setLoading(true);
		const words = await loadFile();
		const filteredWord = chooseWord(words);
		console.log(filteredWord);
		setWord(filteredWord);
		setLoading(false);
	};

	useEffect(() => {
		fetchWords();
	}, []);

	return { loading, fetchWords };
};

export default useWords;
