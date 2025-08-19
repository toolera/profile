import { NextRequest } from 'next/server';
import { isAuthenticated } from '@/lib/auth';
import { getAllBooks, createBook } from '@/lib/books';

export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const books = await getAllBooks();
    return Response.json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const data = await request.json();
    const book = await createBook(data);
    return Response.json(book, { status: 201 });
  } catch (error) {
    console.error('Error creating book:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}