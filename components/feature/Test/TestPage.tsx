import React from 'react';

import Layout from 'components/layout/Layout';
import TestBanner from './components/TestBanner';
import TestContent from './components/TestContent';
import Container from 'components/layout/Container';

const TestPage = () => {
  return (
    <Layout seoTitle="SXus | Làm trắc nghiệm">
      <Container>
        <TestBanner />
        <TestContent />
      </Container>
    </Layout>
  );
};

export default TestPage;
