import { GetServerSideProps } from 'next';

import Head from '@/components/meta/Head';

import { getBaseUrl } from '@/helpers/url';
import sanity from '@/lib/sanity';

import IndexContents from '@/contents/index';
import { exerienceQuery } from '@/queries';

function Home() {
  return (
    <>
      <Head
        title="KrishnaKanth · Front-End Developer"
        description="An online portfolio featuring a showcase of my projects and some thoughts as a Front-End Developer who loves intuitive, clean and modern UI design."
        ogImage={`${getBaseUrl()}/assets/images/og-image.png`}
        overrideTitle
      />
      <IndexContents />
    </>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const experince = await sanity.fetch(exerienceQuery);
  return {
    props: {
      experince,
    },
  };
};
