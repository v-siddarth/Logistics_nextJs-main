import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory storage for demo (in production, use a database)
let submissions: any[] = [];

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json(
      { 
        submissions,
        total: submissions.length,
        message: 'Contact form submissions retrieved successfully'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Admin route error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve submissions' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const submission = {
      ...body,
      id: `admin_${Date.now()}`,
      timestamp: new Date().toISOString()
    };
    
    submissions.push(submission);
    
    return NextResponse.json(
      { 
        message: 'Submission added successfully',
        submission
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Admin POST error:', error);
    return NextResponse.json(
      { error: 'Failed to add submission' },
      { status: 500 }
    );
  }
}
