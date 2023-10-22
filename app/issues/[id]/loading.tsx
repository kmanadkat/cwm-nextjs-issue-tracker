import { Box, Card, Flex, Heading } from '@radix-ui/themes';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const IssueDetailLoadingPage = () => {
	return (
		<Box className='max-w-xl'>
			<Heading>
				<Skeleton />
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