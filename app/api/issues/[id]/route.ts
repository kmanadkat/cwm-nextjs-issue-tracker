import { issueSchema } from '@/app/validationSchemas';
import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	const body = await request.json();
	// Validate Body
	const validation = issueSchema.safeParse(body);
	if (!validation.success) {
		return NextResponse.json(validation.error.format(), { status: 400 });
	}

	// Find Issue In DB
	const issue = await prisma.issue.findUnique({
		where: { id: parseInt(params.id) },
	});
	if (!issue) {
		return NextResponse.json({ error: 'Invalid issue id' }, { status: 404 });
	}

	// Update Issue
	const updatedIssue = await prisma.issue.update({
		where: { id: issue.id },
		data: { title: body.title, description: body.description },
	});

	return NextResponse.json(updatedIssue);
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	// Find Issue In DB
	const issue = await prisma.issue.findUnique({
		where: { id: parseInt(params.id) },
	});
	if (!issue) {
		return NextResponse.json({ error: 'Invalid issue id' }, { status: 404 });
	}

	// Delete Issue
	await prisma.issue.delete({ where: { id: issue.id } });

	return NextResponse.json({ success: true });
}
