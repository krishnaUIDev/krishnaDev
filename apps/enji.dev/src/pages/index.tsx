import Head from '@/components/meta/Head';
import sanity from '@/lib/sanity';
import { getBaseUrl } from '@/helpers/url';
import { GetServerSideProps } from 'next';
import IndexContents from '@/contents/index';
import { Experince } from '@/types/typings';

interface HomeProps {
  experince: Experince;
}

const Home = ({ experince }: HomeProps) => {
  console.log(experince);
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
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `*[_type == "experience"] {
    _id,
    company,
    description[] {children[] {_key, text }},
    designation,
    location,  
    roles[] { children [] { text } } ,
    skills   
 }`;
  const experince = await sanity.fetch(query);
  return {
    props: {
      experince,
    },
  };
};
