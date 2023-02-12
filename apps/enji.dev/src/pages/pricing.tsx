import PricingContents from '@/contents/pricing';
import Page from '@/contents-layouts/Page';

function Services() {
  return (
    <Page
      frontMatter={{
        title: 'Pricing',
        description: 'Pricing plans for business',
      }}
    >
      <PricingContents />
    </Page>
  );
}

export default Services;
