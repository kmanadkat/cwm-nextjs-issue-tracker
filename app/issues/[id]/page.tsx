import { Box, Grid } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import delay from 'delay';

import EditIssueButton from './EditIssueButton';
import IssueDetails from './IssueDetails';
import prisma from '@/prisma/client';

interface Props {
	params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
	const issue = await prisma.issue.findUnique({
		where: { id: parseInt(params.id) },
	});

	// Navigate to 404 if Issue Not Found
	if (!issue) {
		notFound();
	}

	// Simulate Delay
	await delay(2000);

	return (
		<Grid columns={{ initial: '1', md: '2' }} gap='5'>
			<Box>
				<IssueDetails issue={issue} />
			</Box>
			<Box>
				<EditIssueButton issueId={issue.id} />
			</Box>
		</Grid>
	);
};

export default IssueDetailPage;
