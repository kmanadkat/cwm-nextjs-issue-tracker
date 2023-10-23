interface Props {
	params: { id: string };
}

const EditIssuePage = ({ params }: Props) => {
	return (
		<div>
			EditIssuePage
			<p>{params.id}</p>
		</div>
	);
};

export default EditIssuePage;
