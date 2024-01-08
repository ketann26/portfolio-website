import React, { useEffect, useState, useRef } from "react";
import "./ProgressLine.css";

const ProgressLine = ({
	label,
	icon,
	backgroundColor = "rgb(201, 89, 182,0.2)",
	visualParts = [
		{
			percentage: "0%",
			color: "white",
		},
	],
}) => {
	// Starting values needed for the animation
	// Mapped by "visualParts" so it can work with multiple values dynamically
	// It's an array of percentage widths
	const [widths, setWidths] = useState(
		visualParts.map(() => {
			return 0;
		})
	);

	const [hover, setHover] = useState(false);
	const progressRef = useRef(null);

	const onHover = (e) => {
		e.preventDefault();
		setHover(true); // turn true
		console.log("hovered");
	};

	const onHoverOver = (e) => {
		e.preventDefault(); // turn false
		setHover(false);
	};

	// useEffect(() => {
	// 	// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
	// 	// You need to wrap it to trigger the animation
	// 	requestAnimationFrame(() => {
	// 		// Set a new array of percentage widths based on the props
	// 		setWidths(
	// 			visualParts.map((item) => {
	// 				return item.percentage;
	// 			})
	// 		);
	// 	});
	// }, [visualParts]);

	useEffect(() => {
		// Function to handle the intersection observer callback
		let p = progressRef.current;
		const handleIntersection = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Set a new array of percentage widths based on the props
					requestAnimationFrame(() => {
						setWidths(
							visualParts.map((item) => {
								return item.percentage;
							})
						);
					});

					observer.unobserve(entry.target); // Stop observing once the animation is triggered
				}
			});
		};

		// Create an intersection observer instance
		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.5, // Adjust this threshold as needed
		});

		// Start observing the target element (progressRef)
		if (p) {
			observer.observe(p);
		}

		// Clean up the observer when the component unmounts
		return () => {
			if (p) {
				observer.unobserve(p);
			}
		};
	}, [visualParts]);

	return (
		<>
			<img
				src={icon}
				onMouseEnter={(e) => onHover(e)}
				onMouseLeave={(e) => onHoverOver(e)}
				alt={label}
			/>
			{hover && <div className="alt-text">{label}</div>}

			<div
				ref={progressRef}
				className="progressVisualFull"
				// to change the background color dynamically
				style={{
					backgroundColor,
				}}
			>
				{visualParts.map((item, index) => {
					// map each part into separate div and each will be animated
					// because of the "transition: width 2s;" css in class "progressVisualPart"
					// and because of the new width ("widths[index]", previous one was 0)
					return (
						<div
							// There won't be additional changes in the array so the index can be used
							/* eslint-disable-next-line react/no-array-index-key */
							key={index}
							style={{
								width: widths[index],
								// setting the actual color of bar part
								backgroundColor: item.color,
							}}
							className="progressVisualPart"
						/>
					);
				})}
			</div>
		</>
	);
};

export default ProgressLine;
