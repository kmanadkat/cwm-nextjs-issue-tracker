'use client';
import { TrashIcon } from '@radix-ui/react-icons';
import { AlertDialog, Button, Flex } from '@radix-ui/themes';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
	const router = useRouter();
	const [error, setError] = useState(false);

	const handleDelete = async () => {
		try {
			await axios.delete(`/api/issues/${issueId}`);
			router.push('/issues');
			router.refresh();
		} catch (error) {
			setError(true);
		}
	};

	return (
		<>
			{/* Delete Issue Confirmation */}
			<AlertDialog.Root>
				<AlertDialog.Trigger>
					<Button color='red'>
						<TrashIcon />
						Delete Issue
					</Button>
				</AlertDialog.Trigger>
				<AlertDialog.Content>
					<AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
					<AlertDialog.Description>
						Are your sure you want to delete this issue? This action cannot be
						undone.
					</AlertDialog.Description>
					<Flex gap='3' mt='4' justify='end'>
						<AlertDialog.Cancel>
							<Button variant='soft' color='gray'>
								Cancel
							</Button>
						</AlertDialog.Cancel>
						<AlertDialog.Action>
							<Button variant='solid' color='red' onClick={handleDelete}>
								Delete Issue
							</Button>
						</AlertDialog.Action>
					</Flex>
				</AlertDialog.Content>
			</AlertDialog.Root>

			{/* Delete Issue Error Handling */}
			<AlertDialog.Root open={error}>
				<AlertDialog.Content>
					<AlertDialog.Title>Error Deleting Issue</AlertDialog.Title>
					<AlertDialog.Description>
						This issue could not be deleted.
					</AlertDialog.Description>
					<Flex gap='3' mt='4' justify='end'>
						<AlertDialog.Cancel>
							<Button
								variant='soft'
								color='gray'
								onClick={() => setError(false)}>
								OK
							</Button>
						</AlertDialog.Cancel>
					</Flex>
				</AlertDialog.Content>
			</AlertDialog.Root>
		</>
	);
};

export default DeleteIssueButton;
