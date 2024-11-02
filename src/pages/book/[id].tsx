import styles from './[id].module.css';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import fetchOneBook from '@/lib/fetch-one-book';
import { useRouter } from 'next/router';

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { id: '1' } }, 
      { params: { id: '2' } }, 
      { params: { id: '3' } }
    ],
    fallback: true,
  };
};

export const getStaticProps = async (
  context: GetStaticPropsContext
) => {
  const id = context.params!.id;
  const book = await fetchOneBook(Number(id));

  if (!book) {
    return {
      notFound: true,
    }
  }

  return {
    props: { book },
  };
};

const Book = ({
  book,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;
  return (
    <div className={styles.container}>
      <div
        className={styles.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} alt='coverImg' />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.subTitle}>{subTitle}</div>
      <div className={styles.author}>
        {author} | {publisher}
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
export default Book;
