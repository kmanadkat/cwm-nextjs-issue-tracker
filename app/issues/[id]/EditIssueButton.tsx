import Link from 'next/link';
import { Button } from '@radix-ui/themes';
import { Pencil1Icon } from '@radix-ui/react-icons';

const EditIssueButton = ({ issueId }: { issueId: number }) => {
	return (
		<Link href={`/issues/${issueId}/edit`}>
			<Button>
				<Pencil1Icon />
				Edit Issue
			</Button>
		</Link>
	);
};

export default EditIssueButton;
