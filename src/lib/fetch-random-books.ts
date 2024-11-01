import { BookData } from '@/types';

const fetchRandomBooks = async (): Promise<BookData[]> => {
  const url = 'http://localhost:12345/book/random';
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Failed to fetch random books');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export default fetchRandomBooks;
