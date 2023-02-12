// import HeaderImage from '@/contents/projects/HeaderImage';
import WebStoreContents from '@/contents/webstore';
import Page from '@/contents-layouts/Page';

function WebStore() {
  return (
    <Page
      frontMatter={{
        title: 'WebStore',
        description: '',
      }}
      // headerImage={<HeaderImage />}
    >
      <WebStoreContents />
    </Page>
  );
}

export default WebStore;
