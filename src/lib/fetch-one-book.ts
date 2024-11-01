import { BookData } from '@/types';

const fetchOneBook = async (id: number): Promise<BookData | null> => {
  const url = `http://localhost:12345/book/${id}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Failed to fetch book');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export default fetchOneBook;
