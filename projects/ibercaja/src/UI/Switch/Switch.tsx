import "./Switch.scss";

export default function Switch({
	onChange,
}: {
	onChange: (value: boolean) => void;
}) {
	return (
		<label className="switch">
			<input
				type="checkbox"
				onChange={(event) => onChange(event.target.checked)}
			/>
			<span className="slider"></span>
		</label>
	);
}
