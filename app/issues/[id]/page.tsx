import React from 'react';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
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

	return (
		<div>
			<Heading>{issue.title}</Heading>
			<Flex gap='3' my='3'>
				<IssueStatusBadge status={issue.status} />
				<Text>{issue.createdAt.toDateString()}</Text>
			</Flex>
			<Card>
				<p>{issue.description}</p>
			</Card>
		</div>
	);
};

export default IssueDetailPage;
