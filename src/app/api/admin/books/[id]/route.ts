import { NextRequest } from 'next/server';
import { isAuthenticated } from '@/lib/auth';
import { getBookById, updateBook, deleteBook } from '@/lib/books';

export async function GET(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!isAuthenticated(request)) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const book = await getBookById(parseInt(id));
    
    if (!book) {
      return new Response('Book not found', { status: 404 });
    }
    
    return Response.json(book);
  } catch (error) {
    console.error('Error fetching book:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

export async function PUT(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!isAuthenticated(request)) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const data = await request.json();
    const bookData = { ...data, id: parseInt(id) };
    const book = await updateBook(bookData);
    return Response.json(book);
  } catch (error) {
    console.error('Error updating book:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!isAuthenticated(request)) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const success = await deleteBook(parseInt(id));
    
    if (!success) {
      return new Response('Book not found', { status: 404 });
    }
    
    return new Response('', { status: 204 });
  } catch (error) {
    console.error('Error deleting book:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}