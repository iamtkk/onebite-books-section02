import { BookData } from '@/types';

const fetchBooks = async (q?: string): Promise<BookData[]> => {
  let url = 'http://localhost:12345/book';

  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Failed to fetch books');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export default fetchBooks;
