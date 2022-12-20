import React from 'react';

import SEOHead from 'components/common/SEOHead/SEOHead';
import AuthLayout from 'components/feature/Auth/AuthLayout';

const SignUp = () => {
  return (
    <AuthLayout>
      <SEOHead seoTitle="SXus | Đăng ký" />
      <div>SignUp</div>
    </AuthLayout>
  );
};

export default SignUp;
