import React from "react";

const IconCube = ({ className = "w-5 h-5 text-zinc-700" }) => {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path
				d="M12 2.75l8.25 4.75v9.5L12 21.75 3.75 17V7.5L12 2.75z"
				stroke="currentColor"
				strokeWidth="1.5"
				fill="none"
			/>
			<path
				d="M12 2.75V21.75M3.75 7.5L12 12.25l8.25-4.75"
				stroke="currentColor"
				strokeWidth="1.5"
				fill="none"
			/>
		</svg>
	);
};

export default IconCube;

