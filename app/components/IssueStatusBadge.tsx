import React from 'react';
import { Status } from '@prisma/client';
import { Badge } from '@radix-ui/themes';

const statusMap: Record<
	Status,
	{ label: string; color: 'red' | 'blue' | 'green' }
> = {
	OPEN: { label: 'Open', color: 'red' },
	IN_PROGRESS: { label: 'In Progress', color: 'blue' },
	CLOSED: { label: 'Closed', color: 'green' },
};

const IssueStatusBadge = ({ status }: { status: Status }) => {
	return (
		<Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
	);
};

export default IssueStatusBadge;