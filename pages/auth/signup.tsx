import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import SEOHead from 'components/common/SEOHead/SEOHead';
import AuthLayout from 'components/feature/Auth/AuthLayout';

import { useForm } from '@mantine/form';
import { TextInput, createStyles, PasswordInput, Button, Grid, FileInput, ActionIcon } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { toast } from 'react-toastify';
import { IconEyeCheck, IconEyeOff, IconHome } from '@tabler/icons';
import AuthConsumer from 'hooks/useAuth';

import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import { storage, auth } from '../../firebase/store';
import userApi from '../../firebase/api/userApi';
import authApi from '../../firebase/api/authApi';

const useStyles = createStyles({
  input: {
    label: {
      fontSize: '14px',
      fontWeight: 700,
      marginBottom: '4px',
      span: {
        color: 'red',
      },
    },
  },
  file: {
    label: {
      fontSize: '14px',
      fontWeight: 700,
      marginBottom: '4px',
      span: {
        color: 'red',
      },
    },
    button: {
      color: 'black',
    },
  },
});

const SignUp = () => {
  const { classes } = useStyles();
  const router = useRouter();
  const { signUp } = AuthConsumer();

  const handleSignUp = async (values: any) => {
    if (values.password !== values.confirm) {
      toast.error('Mật khẩu chưa khớp');
    } else {
      const res = await authApi.signUp({ email: values.email, password: values.password });
      const id = res.user?.uid;
      uploadBytes(ref(storage, id), values.avatar)
        .then(() => {
          return getDownloadURL(ref(storage, id));
        })
        .then((url) => {
          return userApi.addUser(id, {
            ...values,
            avatar: url,
          });
        })
        .then(() => {
          router.push('/auth/signin');
        })
        .catch(() => {
          toast.error('register fail');
        });
    }

    // try {
    //   await signUp(values);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      address: '',
      avatar: null,
      phone: '',
      birth: '',
      password: '',
      confirm: '',
    },
  });
  return (
    <AuthLayout>
      <SEOHead seoTitle="SXus | Đăng ký" />
      <Link href={'/'} className="absolute right-[24px] top-[20px] cursor-pointer z-10">
        <ActionIcon>
          <IconHome size={24} className="text-palette-2" />
        </ActionIcon>
      </Link>
      <div className=" px-6 sm:px-[100px] flex items-center justify-center gap-[24px] flex-col text-center">
        <h3 className="font-heading text-[32px]">Đăng ký</h3>
        <form
          className="text-left"
          autoComplete="off"
          onSubmit={form.onSubmit((values) => {
            handleSignUp(values);
          })}
        >
          <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={20} className="mb-6">
            <Grid.Col sm={6}>
              <TextInput required size="sm" label="Email" type={'email'} placeholder="example@email.com" {...form.getInputProps('email')} className={classes.input} />
            </Grid.Col>
            <Grid.Col sm={6}>
              <TextInput required size="sm" label="Tên" type={'text'} placeholder="abc" {...form.getInputProps('name')} className={classes.input} />
            </Grid.Col>
            <Grid.Col sm={6}>
              <TextInput size="sm" label="Phone" type={'phone'} placeholder="0929303234" {...form.getInputProps('phone')} className={classes.input} />
            </Grid.Col>
            <Grid.Col sm={6}>
              <TextInput size="sm" label="Địa chỉ" type={'text'} placeholder="Địa chỉ" {...form.getInputProps('address')} className={classes.input} />
            </Grid.Col>
            <Grid.Col sm={6}>
              <DatePicker label="Ngày sinh" className={classes.file} {...form.getInputProps('birth')} />
            </Grid.Col>
            <Grid.Col sm={6}>
              <FileInput
                placeholder="Chọn file"
                label="Avatar"
                accept="image/png,image/jpeg,image/jpg,image/bmp,image/gif"
                className={classes.input}
                {...form.getInputProps('avatar')}
              />
            </Grid.Col>
            <Grid.Col sm={6}>
              <PasswordInput
                size="sm"
                label="Mật khẩu"
                placeholder=""
                visibilityToggleIcon={({ reveal, size }) => (reveal ? <IconEyeOff size={size} className="text-black" /> : <IconEyeCheck size={size} className="text-black" />)}
                {...form.getInputProps('password')}
                className={classes.input}
                required
              />
            </Grid.Col>
            <Grid.Col sm={6}>
              <PasswordInput
                size="sm"
                label="Xác nhận mật khẩu"
                placeholder=""
                visibilityToggleIcon={({ reveal, size }) => (reveal ? <IconEyeOff size={size} className="text-black" /> : <IconEyeCheck size={size} className="text-black" />)}
                {...form.getInputProps('confirm')}
                className={classes.input}
                required
              />
            </Grid.Col>
          </Grid>
          <Button radius={'sm'} fullWidth color={'palate.1'} type="submit" className="mt-4">
            Đăng ký
          </Button>
        </form>

        <p className="text-[14px] ">
          Bạn đã có tài khoản?{' '}
          <Link href={'/auth/signin'} className="text-palette-2 active:text-palette-3">
            Đăng nhập
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
