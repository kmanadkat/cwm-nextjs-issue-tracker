'use client';
import axios from 'axios';
import React, { useState } from 'react';
import { TextField, Button, Callout } from '@radix-ui/themes';
import SimpleMDE from 'react-simplemde-editor';

import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { issueSchema } from '@/app/validationSchemas';

import 'easymde/dist/easymde.min.css';
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';
import { Issue } from '@prisma/client';

type IssueFormData = z.infer<typeof issueSchema>;

interface Props {
	issue?: Issue;
}

const IssueForm = ({ issue }: Props) => {
	const router = useRouter();

	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<IssueFormData>({
		resolver: zodResolver(issueSchema),
	});
	const [error, setError] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);

	const submitHandler = async (data: {
		title: string;
		description: string;
	}) => {
		try {
			setIsSubmitting(true);
			// Update Existing Issue
			if (issue) {
				await axios.patch(`/api/issues/${issue.id}`, data);
			}
			// Create New Issue
			else {
				await axios.post('/api/issues', data);
			}
			router.push('/issues');
			router.refresh();
		} catch (error) {
			setError('An unexpected error occured');
			setIsSubmitting(false);
		}
	};

	return (
		<div className='max-w-xl'>
			{error && (
				<Callout.Root color='red' className='mb-5'>
					<Callout.Text>{error}</Callout.Text>
				</Callout.Root>
			)}
			<form className='space-y-3' onSubmit={handleSubmit(submitHandler)}>
				<TextField.Root>
					<TextField.Input
						defaultValue={issue?.title}
						placeholder='Title'
						{...register('title')}
					/>
				</TextField.Root>
				<ErrorMessage>{errors.title?.message}</ErrorMessage>
				<Controller
					name='description'
					control={control}
					defaultValue={issue?.description}
					render={({ field }) => (
						<SimpleMDE placeholder='Description' {...field} />
					)}
				/>
				<ErrorMessage>{errors.description?.message}</ErrorMessage>
				<Button disabled={isSubmitting}>
					{issue ? 'Update Issue' : 'Submit New Issue'}{' '}
					{isSubmitting && <Spinner />}
				</Button>
			</form>
		</div>
	);
};

export default IssueForm;
