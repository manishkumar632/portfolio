export default function ReviewID(props: {
	params: {
		reviewID: number;
	};
}) {
	console.log(props);
	return (
		<div>
			<h1>Review ID : {props.params.reviewID}</h1>
		</div>
	);
}
