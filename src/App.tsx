import { useEffect, useState } from "react";
import Tutorial from "./modals/Tutorial";
import Main from "./Main";
import useWords from "./hooks/useWords";
import Results from "./modals/Results";
import { useWordsContext } from "./context/useWordsContext";
import Header from "./components/Header";

function App() {
	const [display, setDisplay] = useState(false);
	const { loading, fetchWords } = useWords();
	const [displayResults, setDisplayResults] =
		useState(false);
	const {
		wordGuess,
		word,
		rowActive,
		resetGame
	} = useWordsContext();
	const [message, setMessage] =
		useState<string>("test");

	useEffect(() => {
		if (wordGuess === word && wordGuess !== "") {
			setMessage("You win!");
			setDisplayResults(true);
		}
		if (rowActive === 5) {
			setMessage(
				`You lose!. The word was ${word}. Try again!`
			);
			setDisplayResults(true);
		}
	}, [wordGuess, word, rowActive]);

	useEffect(() => {
		setDisplay(true);
	}, []);

	return (
		<div className="flex flex-col justify-center align-middle items-center">
			<Header
				onClickHelp={() => setDisplay(true)}
			/>
			{loading ? (
				<p>Cargando palabras...</p>
			) : (
				<Main />
			)}
			<Tutorial
				display={display}
				closeModal={() => {
					setDisplay(false);
				}}
			/>
			<Results
				display={displayResults}
				onClose={() => {
					setDisplayResults(false);
					resetGame();
					fetchWords();
				}}
				message={message}
			/>
		</div>
	);
}

export default App;
