import { Box, Flex, Grid } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import delay from 'delay';

import EditIssueButton from './EditIssueButton';
import DeleteIssueButton from './DeleteIssueButton';
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
		<Grid columns={{ initial: '1', sm: '5' }} gap='5'>
			<Box className='md:col-span-4'>
				<IssueDetails issue={issue} />
			</Box>
			<Flex direction='column' gap='4'>
				<EditIssueButton issueId={issue.id} />
				<DeleteIssueButton issueId={issue.id} />
			</Flex>
		</Grid>
	);
};

export default IssueDetailPage;
