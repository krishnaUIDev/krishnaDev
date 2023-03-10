import ServicesContents from '@/contents/services';
import Page from '@/contents-layouts/Page';

function Services() {
  return (
    <Page
      frontMatter={{
        title: 'Services',
        description: 'Showcase of my services.',
      }}
    >
      <ServicesContents />
    </Page>
  );
}

export default Services;
