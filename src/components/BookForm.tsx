'use client';

import { useState, useEffect } from 'react';
import { Book } from '@/lib/books';

interface BookFormProps {
  book?: Book | null;
  onSubmit: (data: {
    bookName: string;
    author: string;
    language: string;
    physical: string;
    status: string;
    notes?: string;
  }) => void;
  onCancel: () => void;
  loading?: boolean;
}

export default function BookForm({ book, onSubmit, onCancel, loading = false }: BookFormProps) {
  const [formData, setFormData] = useState({
    bookName: '',
    author: '',
    language: '',
    physical: '',
    status: '',
    notes: ''
  });

  useEffect(() => {
    if (book) {
      setFormData({
        bookName: book['Book Name'],
        author: book['Author'],
        language: book['Language'],
        physical: book['Physical'],
        status: book['Status'],
        notes: book['Notes'] || ''
      });
    }
  }, [book]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="bookName" className="block text-sm font-medium text-gray-700">
          Book Name
        </label>
        <input
          type="text"
          id="bookName"
          name="bookName"
          required
          value={formData.bookName}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-700">
          Author
        </label>
        <input
          type="text"
          id="author"
          name="author"
          required
          value={formData.author}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="language" className="block text-sm font-medium text-gray-700">
          Language
        </label>
        <select
          id="language"
          name="language"
          required
          value={formData.language}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select Language</option>
          <option value="English">English</option>
          <option value="Turkish">Turkish</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="German">German</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="physical" className="block text-sm font-medium text-gray-700">
          Physical Copy
        </label>
        <select
          id="physical"
          name="physical"
          required
          value={formData.physical}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select</option>
          <option value="✓">Yes (✓)</option>
          <option value="✗">No (✗)</option>
        </select>
      </div>

      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
          Status
        </label>
        <select
          id="status"
          name="status"
          required
          value={formData.status}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select Status</option>
          <option value="To Read">To Read</option>
          <option value="Reading">Reading</option>
          <option value="Completed">Completed</option>
          <option value="Paused">Paused</option>
          <option value="Abandoned">Abandoned</option>
        </select>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Optional notes about the book..."
        />
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {loading ? 'Saving...' : (book ? 'Update Book' : 'Add Book')}
        </button>
      </div>
    </form>
  );
}