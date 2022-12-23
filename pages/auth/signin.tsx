import React from 'react';
import Image from 'next/image';

import SEOHead from 'components/common/SEOHead/SEOHead';
import AuthLayout from 'components/feature/Auth/AuthLayout';
import CusBtn from 'components/common/CusBtn/CusBtn';

import { useForm } from '@mantine/form';
import { TextInput, createStyles, PasswordInput, Checkbox } from '@mantine/core';
import { IconEyeCheck, IconEyeOff } from '@tabler/icons';

const useStyles = createStyles({
  input: {
    label: {
      fontSize: '14px',
      fontWeight: 700,
      marginBottom: '4px',
    },
  },
});

const SignIn = () => {
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });

  return (
    <AuthLayout>
      <SEOHead seoTitle="SXus | Đăng nhập" />

      <div className="w-[400px] h-full bg-palette-2 p-[32px] flex justify-center items-center">
        <Image src="/images/auth-icon-left.png" height={360} width={360} alt={'logo'} className="w-full h-auto" />
      </div>
      <div className="px-[100px] pt-[100px] text-center flex-1">
        <h3 className="font-heading text-[32px]">Đăng nhập</h3>
        <form className="my-[36px] text-left" autoComplete="off">
          <TextInput size="sm" label="Email" type={'email'} placeholder="example@email.com" {...form.getInputProps('email')} className={classes.input} />
          <PasswordInput
            size="sm"
            mt="md"
            label="Password"
            placeholder=""
            visibilityToggleIcon={({ reveal, size }) => (reveal ? <IconEyeOff size={size} className="text-black" /> : <IconEyeCheck size={size} className="text-black" />)}
            {...form.getInputProps('password')}
            className={classes.input}
          />
          <Checkbox color={'palate.2'} label="Lưu đăng nhập" mt="md" />
        </form>
        <CusBtn content="Đăng nhập" fill="full" size="md"></CusBtn>
      </div>
    </AuthLayout>
  );
};

export default SignIn;