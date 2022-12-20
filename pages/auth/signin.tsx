import React from 'react';

import SEOHead from 'components/common/SEOHead/SEOHead';
import AuthLayout from 'components/feature/Auth/AuthLayout';

const SignIn = () => {
  return (
    <AuthLayout>
      <SEOHead seoTitle="SXus | Đăng nhập" />
      <div>SignIn</div>
    </AuthLayout>
  );
};

export default SignIn;
