import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import SEOHead from 'components/common/SEOHead/SEOHead';
import AuthLayout from 'components/feature/Auth/AuthLayout';
import SignUpStep1 from 'components/feature/Auth/components/SignUpStep1';
import SignUpStep2 from 'components/feature/Auth/components/SignUpStep2';
import SignUpStep3 from 'components/feature/Auth/components/SignUpStep3';

import { useForm } from '@mantine/form';
import { TextInput, createStyles, PasswordInput, Button, Stepper } from '@mantine/core';
import { IconEyeCheck, IconEyeOff } from '@tabler/icons';
import { IAuthForm } from 'firebase/api/authApi';
import AuthConsumer from 'hooks/useAuth';

const useStyles = createStyles({
  input: {
    label: {
      fontSize: '14px',
      fontWeight: 700,
      marginBottom: '4px',
    },
  },
  stepper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '12px',
  },
  step: {
    'minHeight': '120px',
    'mantine-Stepper-stepBody': {
      div: {
        color: 'white',
      },
    },
  },
});

const SignUp = () => {
  const { classes } = useStyles();
  const router = useRouter();
  const { signUp } = AuthConsumer();
  const [active, setActive] = useState(1);
  const [signUpData, setSignUpData] = useState({});
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const handleSignUp = async (values: IAuthForm) => {
    try {
      await signUp(values);
    } catch (error) {
      console.log(error);
    }
  };

  const renderStep = () => {
    switch (active) {
      case 1:
        return <SignUpStep2 />;
      case 2:
        return <SignUpStep3 />;
      default:
        return <SignUpStep1 />;
    }
  };

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      confirm: '',
    },
  });
  return (
    <AuthLayout>
      <SEOHead seoTitle="SXus | Đăng ký" />
      <div className="w-[400px] h-full bg-palette-2 p-[32px] flex justify-center items-center">
        <Stepper active={active} onStepClick={setActive} breakpoint="lg" orientation="vertical" className={classes.stepper}>
          <Stepper.Step
            label={<span className="text-[#E0BBE4FF] font-heading font-[700] text-[16px]">First step</span>}
            description={<span className="text-[#F1F3F5] font-[500] text-[14px]">Description</span>}
            className={classes.step}
          ></Stepper.Step>
          <Stepper.Step
            label={<span className="text-[#E0BBE4FF] font-heading font-[700] text-[16px]">Second step</span>}
            description={<span className="text-[#F1F3F5] font-[500] text-[14px]">Description</span>}
            className={classes.step}
          ></Stepper.Step>
          <Stepper.Step
            label={<span className="text-[#E0BBE4FF] font-heading font-[700] text-[16px]">Third step</span>}
            description={<span className="text-[#F1F3F5] font-[500] text-[14px]">Description</span>}
            className={classes.step}
          ></Stepper.Step>
        </Stepper>
      </div>
      <div className="px-[100px] pt-[100px] text-center flex-1">
        <h3 className="font-heading text-[32px]">Đăng ký </h3>
        <form
          className="my-[36px] text-left"
          autoComplete="off"
          onSubmit={form.onSubmit((values) => {
            handleSignUp({ email: values.email, password: values.password });
          })}
        >
          <TextInput required size="sm" label="Email" type={'email'} placeholder="example@email.com" {...form.getInputProps('email')} className={classes.input} />
          <PasswordInput
            size="sm"
            mt="md"
            label="Mật khẩu"
            placeholder=""
            visibilityToggleIcon={({ reveal, size }) => (reveal ? <IconEyeOff size={size} className="text-black" /> : <IconEyeCheck size={size} className="text-black" />)}
            {...form.getInputProps('password')}
            className={classes.input}
            required
          />
          <PasswordInput
            size="sm"
            mt="md"
            label="Xác nhận mật khẩu"
            placeholder=""
            visibilityToggleIcon={({ reveal, size }) => (reveal ? <IconEyeOff size={size} className="text-black" /> : <IconEyeCheck size={size} className="text-black" />)}
            {...form.getInputProps('confirm')}
            className={classes.input}
            required
          />
          <Button radius={'sm'} fullWidth color={'palate.1'} type="submit" className="mt-4">
            Đăng ký
          </Button>
        </form>

        <p className="text-[14px] mt-[32px]">
          Bạn đã có tài khoản?{' '}
          <Link href={'/auth/signin'} className="text-palette-2 active:text-palette-3">
            Đăng ký
          </Link>
        </p>
        {renderStep()}
      </div>
    </AuthLayout>
  );
};

export default SignUp;
