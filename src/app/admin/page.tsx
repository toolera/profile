'use client';

import { useState, useEffect } from 'react';
import AdminLogin from '@/components/AdminLogin';
import BooksTable from '@/components/BooksTable';
import BookForm from '@/components/BookForm';
import { Book } from '@/lib/books';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      fetchBooks();
    }
  }, [isAuthenticated]);

  const fetchBooks = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/admin/books');
      if (response.ok) {
        const data = await response.json();
        setBooks(data);
      } else if (response.status === 401) {
        setIsAuthenticated(false);
      } else {
        setError('Failed to fetch books');
      }
    } catch {
      setError('Failed to fetch books');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth', { method: 'DELETE' });
    } catch (error) {
      console.error('Logout error:', error);
    }
    setIsAuthenticated(false);
    setBooks([]);
  };

  const handleAddBook = () => {
    setEditingBook(null);
    setShowForm(true);
  };

  const handleEditBook = (book: Book) => {
    setEditingBook(book);
    setShowForm(true);
  };

  const handleDeleteBook = async (id: number) => {
    if (!confirm('Are you sure you want to delete this book?')) return;

    try {
      const response = await fetch(`/api/admin/books/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setBooks(books.filter(book => book.id !== id));
      } else {
        setError('Failed to delete book');
      }
    } catch {
      setError('Failed to delete book');
    }
  };

  const handleFormSubmit = async (data: {
    bookName: string;
    author: string;
    language: string;
    physical: string;
    status: string;
    notes?: string;
  }) => {
    setLoading(true);
    setError('');

    try {
      const url = editingBook 
        ? `/api/admin/books/${editingBook.id}`
        : '/api/admin/books';
      
      const method = editingBook ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const book = await response.json();
        
        if (editingBook) {
          setBooks(books.map(b => b.id === book.id ? book : b));
        } else {
          setBooks([book, ...books]);
        }
        
        setShowForm(false);
        setEditingBook(null);
      } else {
        setError('Failed to save book');
      }
    } catch {
      setError('Failed to save book');
    } finally {
      setLoading(false);
    }
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingBook(null);
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Books Admin Panel</h1>
          <div className="space-x-4">
            <button
              onClick={handleAddBook}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Book
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Logout
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {showForm ? (
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              {editingBook ? 'Edit Book' : 'Add New Book'}
            </h2>
            <BookForm
              book={editingBook}
              onSubmit={handleFormSubmit}
              onCancel={handleFormCancel}
              loading={loading}
            />
          </div>
        ) : null}

        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">
              All Books ({books.length})
            </h2>
          </div>
          <BooksTable
            books={books}
            onEdit={handleEditBook}
            onDelete={handleDeleteBook}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}