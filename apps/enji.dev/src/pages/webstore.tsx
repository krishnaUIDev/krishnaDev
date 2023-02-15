import WebStoreContents from '@/contents/webstore';
import Page from '@/contents-layouts/Page';
import sanity from '@/lib/sanity';
import { GetServerSideProps } from 'next';
import { storeItemsQuery } from '@/queries';

function WebStore({ items }) {
  return (
    <Page
      frontMatter={{
        title: 'WebStore',
        description: '',
      }}
    >
      <WebStoreContents items={items} />
    </Page>
  );
}

export default WebStore;

export const getServerSideProps: GetServerSideProps = async () => {
  const items = await sanity.fetch(storeItemsQuery);
  return {
    props: {
      items,
    },
  };
};
