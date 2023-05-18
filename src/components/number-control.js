import { BaseControl } from "@wordpress/components";

const NumberControl = (props) => {
	const { min, max, step, value, onChange, label, ...additionalProps } = props;
	const minlength = min.toString().length;

	return (
		<BaseControl label={label}>
			<input
				type="number"
				min={min}
				max={max}
				step={step}
				value={value}
				onChange={(e) => {
					let val = e.target.value;
					if (e.target.value.length >= minlength) {
						val = val > max ? max : val;
						val = val < min ? min : val;
					}
					onChange(val);
				}}
				onBlur={(e) => {
					let val = e.target.value;
					if (e.target.value.length < minlength) {
						val = min;
					}
					onChange(val);
				}}
				style={{ marginLeft: "8px" }}
			/>
		</BaseControl>
	);
};

export default NumberControl;
