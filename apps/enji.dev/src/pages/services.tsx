import HeaderImage from '@/contents/projects/HeaderImage';
import Page from '@/contents-layouts/Page';
import ServicesContents from '@/contents/services';

function Services() {
  return (
    <Page
      frontMatter={{
        title: 'Services',
        description: 'Showcase of my services.',
      }}
      headerImage={<HeaderImage />}
    >
      <ServicesContents />
    </Page>
  );
}

export default Services;
