import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const createIssueSchema = z.object({
	title: z.string().min(1).max(255),
	description: z.string().min(1).max(255),
});

/**
 * Stores New Issue in DB
 * @param request NextRequest
 * @returns void
 */
export async function POST(request: NextRequest) {
	const body = await request.json();
	// Validate
	const validation = createIssueSchema.safeParse(body);
	if (!validation.success) {
		return NextResponse.json(validation.error.errors, { status: 400 });
	}
	// Action
	const newIssue = await prisma.issue.create({
		data: { title: body.title, description: body.description },
	});
	// Respond
	return NextResponse.json(newIssue, { status: 201 });
}
