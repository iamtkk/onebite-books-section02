import { useRouter } from 'next/router';
import SearchableLayout from '@/components/searchable-layout';
const Search = () => {
  const router = useRouter();
  const { q } = router.query;

  return <h1>Search {q}</h1>;
};

export default Search;

Search.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
