import React from "react";
import Key from "../components/Key";
import Button from "../components/Button";

interface TutorialProps {
	closeModal: () => void;
	display: boolean;
}

const examples = [
	[
		{ key: "G", bg: "bg-green-500" },
		{ key: "A", bg: "bg-white" },
		{ key: "T", bg: "bg-white" },
		{ key: "O", bg: "bg-white" },
		{ key: "S", bg: "bg-white" }
	],
	[
		{ key: "V", bg: "bg-white" },
		{ key: "O", bg: "bg-white" },
		{ key: "C", bg: "bg-amber-400" },
		{ key: "A", bg: "bg-white" },
		{ key: "L", bg: "bg-white" }
	],
	[
		{ key: "C", bg: "bg-white" },
		{ key: "A", bg: "bg-white" },
		{ key: "N", bg: "bg-white" },
		{ key: "T", bg: "bg-white" },
		{ key: "O", bg: "bg-neutral-400" }
	]
];

const examples2 = [
	<p className="mb-2" key="G">
		La letra <span className="font-bold">G</span>{" "}
		está en la palabra y en la posición correcta.
	</p>,
	<p className="mb-2" key="C">
		La letra <span className="font-bold">C</span>{" "}
		está en la palabra pero en la posición
		incorrecta.
	</p>,
	<p className="mb-2" key="O">
		La letra <span className="font-bold">O</span>{" "}
		no está en la palabra.
	</p>
];

const Tutorial: React.FC<TutorialProps> = ({
	closeModal,
	display
}) => {
	return (
		<div
			className={`fixed inset-0 ${
				display ? "z-50" : "z-0"
			} flex items-center justify-center overflow-auto bg-white bg-opacity-50" ${
				display ? "visible" : "collapse"
			} transition-property: opacity ease-linear duration-300`}
		>
			<div className="absolute inset-0 flex justify-center items-center p-10">
				<div className="modal border border-solid rounded-md w-2/6 px-10 pt-10 h-full">
					<div className="modal-content">
						<h1 className="text-center text-2xl mb-10 font-bold">
							Cómo jugar
						</h1>
						<div className="flex flex-col gap-3 text-lg mb-5">
							<p>
								Adivina la palabra oculta en cinco
								intentos.
							</p>
							<p>
								Cada intento debe ser una palabra
								válida de 5 letras.
							</p>
							<p>
								Después de cada intento el color
								de las letras cambia para mostrar
								qué tan cerca estás de acertar la
								palabra.
							</p>
						</div>
						<h2 className="font-bold mb-5">
							Ejemplos
						</h2>
						{examples.map((example, index) => (
							<div
								className="flex flex-col "
								key={index}
							>
								<div className="flex flex-row space-x-10 mb-2">
									{example.map((row) => (
										<Key
											letter={row.key}
											bgColor={row.bg}
											key={row.key}
										/>
									))}
								</div>
								{examples2[index]}
							</div>
						))}
						<div className="flex flex-col justify-center text-lg mt-3">
							<p>
								Puede haber letras repetidas. Las
								pistas son independientes para
								cada letra.
							</p>
							<p className="text-center">
								¡Una palabra nueva cada 5 minutos!
							</p>
						</div>
						<div className="text-center mt-10">
							<Button onClick={closeModal}>
								JUGAR!
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tutorial;
