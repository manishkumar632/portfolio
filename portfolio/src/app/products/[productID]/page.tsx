export default function ProductDetail(props: {
	params: {
		productID: number;
	};
}) {
	return (
		<div>
			<h1>Detail of Product {props.params.productID}</h1>
		</div>
	);
}
