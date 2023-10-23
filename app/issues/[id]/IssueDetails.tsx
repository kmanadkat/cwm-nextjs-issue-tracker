import ReactMarkdown from 'react-markdown';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import { IssueStatusBadge } from '@/app/components';
import { Issue } from '@prisma/client';

const IssueDetails = ({ issue }: { issue: Issue }) => {
	return (
		<>
			<Heading>{issue.title}</Heading>
			<Flex gap='3' my='3'>
				<IssueStatusBadge status={issue.status} />
				<Text>{issue.createdAt.toDateString()}</Text>
			</Flex>
			<Card className='mt-8'>
				<ReactMarkdown className='prose'>{issue.description}</ReactMarkdown>
			</Card>
		</>
	);
};

export default IssueDetails;
