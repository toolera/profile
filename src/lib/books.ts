import { executeQuery } from './database';

export interface Book {
  id: number;
  'Book Name': string;
  'Author': string;
  'Language': string;
  'Physical': string;
  'Status': string;
  'Notes': string | null;
}

export interface CreateBookData {
  bookName: string;
  author: string;
  language: string;
  physical: string;
  status: string;
  notes?: string;
}

export interface UpdateBookData extends CreateBookData {
  id: number;
}

export async function getAllBooks(): Promise<Book[]> {
  return executeQuery(async (client) => {
    const result = await client.sql`
      SELECT id, "Book Name", "Author", "Language", "Physical", "Status", "Notes"
      FROM public.books
      ORDER BY id DESC;
    `;
    return result.rows as Book[];
  });
}

export async function getBookById(id: number): Promise<Book | null> {
  return executeQuery(async (client) => {
    const result = await client.sql`
      SELECT id, "Book Name", "Author", "Language", "Physical", "Status", "Notes"
      FROM public.books
      WHERE id = ${id};
    `;
    return result.rows[0] as Book || null;
  });
}

export async function createBook(data: CreateBookData): Promise<Book> {
  return executeQuery(async (client) => {
    const result = await client.sql`
      INSERT INTO public.books ("Book Name", "Author", "Language", "Physical", "Status", "Notes")
      VALUES (${data.bookName}, ${data.author}, ${data.language}, ${data.physical}, ${data.status}, ${data.notes || null})
      RETURNING id, "Book Name", "Author", "Language", "Physical", "Status", "Notes";
    `;
    return result.rows[0] as Book;
  });
}

export async function updateBook(data: UpdateBookData): Promise<Book> {
  return executeQuery(async (client) => {
    const result = await client.sql`
      UPDATE public.books 
      SET "Book Name" = ${data.bookName}, 
          "Author" = ${data.author}, 
          "Language" = ${data.language}, 
          "Physical" = ${data.physical}, 
          "Status" = ${data.status}, 
          "Notes" = ${data.notes || null}
      WHERE id = ${data.id}
      RETURNING id, "Book Name", "Author", "Language", "Physical", "Status", "Notes";
    `;
    return result.rows[0] as Book;
  });
}

export async function deleteBook(id: number): Promise<boolean> {
  return executeQuery(async (client) => {
    const result = await client.sql`
      DELETE FROM public.books 
      WHERE id = ${id};
    `;
    return result.rowCount > 0;
  });
}