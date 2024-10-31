import { useRouter } from 'next/router';

const Book = () => {
  const router = useRouter();
  console.log(router.query);
  const { id } = router.query;

  return <div>Book {id}</div>;
};
export default Book;
