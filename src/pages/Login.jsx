import Layout from '@/common/Layout/Layout';
import LoginBannerContainer from '@/components/login/LoginBannerContainer';
import LoginFormContainer from '@/components/login/LoginFormContainer';

const Login = () => {
  return (
    <Layout>
      <div className="flex justify-center mt-[30px] mb-[70px]">
        <div className="max-w-[1246px] flex">
          <LoginBannerContainer />
          <LoginFormContainer />
        </div>
      </div>
    </Layout>
  );
};

export default Login;
