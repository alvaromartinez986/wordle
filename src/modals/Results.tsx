import Button from "../components/Button";

interface ModalProps {
	display: boolean;
	onClose: () => void;
	message: string;
}

const Results: React.FC<ModalProps> = ({
	display,
	onClose,
	message
}) => {
	return (
		<div
			className={`fixed inset-0 flex items-center justify-center ${
				display ? "opacity-100" : "opacity-0"
			} transition-property: opacity ease-linear duration-300`}
		>
			<div className="bg-white rounded-lg p-8">
				<h2 className="text-xl font-bold mb-4">
					Results
				</h2>
				<p className="mb-4">{message}</p>
				<Button onClick={onClose} width="w-100">
					Close
				</Button>
			</div>
		</div>
	);
};

export default Results;
