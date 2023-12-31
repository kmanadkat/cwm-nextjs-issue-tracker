import { Skeleton } from '@/app/components';
import { Box, Card, Flex, Heading } from '@radix-ui/themes';

const IssueDetailLoadingPage = () => {
	return (
		<Box className='max-w-5xl'>
			<Heading>
				<Skeleton width='12rem' />
			</Heading>
			<Flex gap='3' my='3'>
				<Skeleton width='5rem' />
				<Skeleton width='8rem' />
			</Flex>
			<Card className='mt-8'>
				<Skeleton count={3} />
			</Card>
		</Box>
	);
};

export default IssueDetailLoadingPage;
