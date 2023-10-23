'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@radix-ui/themes';
import { Pencil1Icon } from '@radix-ui/react-icons';

const EditIssueButton = ({ issueId }: { issueId: number }) => {
	const router = useRouter();

	return (
		<Button onClick={() => router.push(`/issues/${issueId}/edit`)}>
			<Pencil1Icon />
			Edit Issue
		</Button>
	);
};

export default EditIssueButton;
