import SearchableLayout from '@/components/searchable-layout';

const Home = () => {
  return <h1>인덱스</h1>;
};
export default Home;

Home.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
