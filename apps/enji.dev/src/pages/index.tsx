import Head from '@/components/meta/Head';
import sanity from '@/lib/sanity';
import { getBaseUrl } from '@/helpers/url';

import IndexContents from '@/contents/index';

function Index({ movies }) {
  console.log(movies);
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

// const client = createClient({
//   projectId: 'lqz08o01',
//   dataset: 'production',
//   apiVersion: '2021-10-14',
//   useCdn: false,
// });

export async function getStaticProps() {
  const movies = await sanity.fetch(`*[_type == "pet"]`);

  return {
    props: {
      movies,
    },
  };
}

export default Index;
