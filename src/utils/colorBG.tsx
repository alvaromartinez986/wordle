export function colorizeArray(
	array: { key: string; bgColor: string }[],
	word: string
): { key: string; bgColor: string }[] {
	return array.map((element, index) => {
		if (
			element.key.toLowerCase() ===
			word[index].toLowerCase()
		) {
			return {
				...element,
				bgColor: "bg-green-500"
			};
		} else if (
			word
				.toLowerCase()
				.includes(element.key.toLowerCase())
		) {
			return {
				...element,
				bgColor: "bg-amber-400"
			};
		} else {
			return element;
		}
	});
}
