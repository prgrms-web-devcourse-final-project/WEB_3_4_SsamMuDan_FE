import Layout from '@/common/Layout/Layout';
import LoginBannerContainer from '@/components/login/LoginBannerContainer';
import LoginFormContainer from '@/components/login/LoginFormContainer';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Login = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div className="flex justify-center mt-[30px] mb-[70px]">
          <div className="max-w-[1246px] flex">
            <LoginBannerContainer />
            <LoginFormContainer />
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Login;
