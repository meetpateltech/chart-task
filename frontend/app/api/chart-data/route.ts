import { NextRequest, NextResponse } from 'next/server';

const DJANGO_BASE_URL = 'https://chart-task-api.onrender.com/api'; // Replace with your Django server URL

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get('type');

  let endpoint;
  switch (type) {
    case 'candlestick':
      endpoint = '/candlestick-data/';
      break;
    case 'line':
      endpoint = '/line-chart-data/';
      break;
    case 'bar':
      endpoint = '/bar-chart-data/';
      break;
    case 'pie':
      endpoint = '/pie-chart-data/';
      break;
    default:
      return NextResponse.json({ error: 'Invalid chart type' }, { status: 400 });
  }

  try {
    const response = await fetch(`${DJANGO_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching chart data:', error);
    return NextResponse.json({ error: 'Failed to fetch chart data' }, { status: 500 });
  }
}