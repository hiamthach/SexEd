import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import SEOHead from 'components/common/SEOHead/SEOHead';
import AuthLayout from 'components/feature/Auth/AuthLayout';
import authApi from '../../firebase/api/authApi';

import { useForm } from '@mantine/form';
import { TextInput, createStyles, Button } from '@mantine/core';
import { IconHome } from '@tabler/icons';

const useStyles = createStyles({
  input: {
    label: {
      fontSize: '14px',
      fontWeight: 700,
      marginBottom: '4px',
    },
  },
});

const ForgotPassword = () => {
  const formRef = useRef<any>();

  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      email: '',
    },
  });

  const handleForgotPassword = async (email: string) => {
    await authApi.forgotPassword(email);
  };

  return (
    <AuthLayout>
      <SEOHead seoTitle="SXus | Đăng nhập" />

      <div className="hidden lg:flex w-[400px] h-[600px] bg-palette-2 p-[32px] justify-center items-center">
        <Image src="/images/auth-icon-left.png" height={360} width={360} alt={'logo'} className="w-full h-auto" />
      </div>
      <Link href={'/'} className="absolute right-[24px] top-[20px] cursor-pointer z-10">
        <IconHome size={24} className="text-palette-2" />
      </Link>
      <div className="px-4 sm:px-[100px] pt-[100px] text-center flex-1 relative">
        <h3 className="font-heading text-[32px]">Quên mật khẩu</h3>
        <form
          className="my-[36px] text-left"
          autoComplete="off"
          ref={formRef}
          onSubmit={form.onSubmit((values) => {
            handleForgotPassword(values.email);
          })}
        >
          <TextInput size="sm" label="Email" type={'email'} placeholder="example@email.com" {...form.getInputProps('email')} className={classes.input} />

          <Button radius={'sm'} fullWidth color={'palate.1'} type="submit" className="mt-4">
            Quên mật khẩu
          </Button>
        </form>
        <p className="text-[14px] mt-[16px]">
          Bạn đã có tài khoản?{' '}
          <Link href={'/auth/signin'} className="text-palette-2 active:text-palette-3">
            Đăng nhập
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
