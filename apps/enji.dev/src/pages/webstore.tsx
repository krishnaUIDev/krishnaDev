import { GetServerSideProps } from 'next';

import sanity from '@/lib/sanity';

import WebStoreContents from '@/contents/webstore';
import Page from '@/contents-layouts/Page';
import { storeItemsQuery } from '@/queries';

function WebStore() {
  return (
    <Page
      frontMatter={{
        title: 'WebStore',
        description: '',
      }}
    >
      <WebStoreContents />
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
