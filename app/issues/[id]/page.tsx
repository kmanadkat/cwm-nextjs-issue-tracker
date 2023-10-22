import React from 'react';
import { Box, Card, Flex, Heading, Text } from '@radix-ui/themes';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import delay from 'delay';
import IssueStatusBadge from '@/app/components/IssueStatusBadge';

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
		<Box className='max-w-xl'>
			<Heading>{issue.title}</Heading>
			<Flex gap='3' my='3'>
				<IssueStatusBadge status={issue.status} />
				<Text>{issue.createdAt.toDateString()}</Text>
			</Flex>
			<Card className='mt-8'>
				<ReactMarkdown className='prose'>{issue.description}</ReactMarkdown>
			</Card>
		</Box>
	);
};

export default IssueDetailPage;
