import Link from 'next/link';
import { Pencil1Icon } from '@radix-ui/react-icons';
import { Box, Button, Card, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import IssueStatusBadge from '@/app/components/IssueStatusBadge';

import delay from 'delay';
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
				<Heading>{issue.title}</Heading>
				<Flex gap='3' my='3'>
					<IssueStatusBadge status={issue.status} />
					<Text>{issue.createdAt.toDateString()}</Text>
				</Flex>
				<Card className='mt-8'>
					<ReactMarkdown className='prose'>{issue.description}</ReactMarkdown>
				</Card>
			</Box>
			<Box>
				<Button>
					<Pencil1Icon />
					<Link href={`/issues/${issue.id}/edit`}>Edit Issue</Link>
				</Button>
			</Box>
		</Grid>
	);
};

export default IssueDetailPage;
