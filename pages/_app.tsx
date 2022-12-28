import type { AppProps } from 'next/app';
import ThemeProvider from 'theme/ThemeProvider';
import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from 'hooks/useAuth';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Component {...pageProps} />
        <ToastContainer position="top-center" autoClose={2000} hideProgressBar={true} />
      </AuthProvider>
    </ThemeProvider>
  );
}
