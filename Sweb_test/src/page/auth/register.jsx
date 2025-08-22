import React from 'react';
import { useNavigate } from 'react-router-dom';
import SwebLogo from '../../compoment/SwebLogo.jsx';
import Button from '../../compoment/Button.jsx';

const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Header with logo (same gutters as the auth screen) */}
      <header className="w-full px-4 py-4 flex justify-start md:justify-center">
        <SwebLogo />
      </header>

      {/* Text + actions block fixed 32px above the bottom (same margins) */}
      <div className="absolute left-0 right-0 bottom-[32px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[360px] mx-auto flex flex-col items-start gap-3 sm:gap-4 w-full">
          {/* Title */}
          <div className="w-full text-left">
            <h1 className="text-[22px] sm:text-[24px] md:text-[28px] font-bold leading-tight text-neutral-black font-rethink-sans">
              Create your account
            </h1>
            <p className="mt-1 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed text-neutral-black font-rethink-sans">
              Already have an account?{' '}
              <span
                className="font-semibold text-magenta-600 cursor-pointer"
                role="button"
                tabIndex={0}
                onClick={() => navigate('/login')}
                onKeyDown={(e) => e.key === 'Enter' && navigate('/login')}
              >
                Login
              </span>
            </p>
          </div>

          {/* Actions (placeholders) */}
          <div className="flex flex-col gap-2 sm:gap-3 w-full">
            <Button
              label="Continue with email"
              variant="gradient"
              gradientStart="#FF7C44"
              gradientEnd="#FD2A94"
              textColor="text-white"
              size="md"
              fullWidth={true}
              onClick={() => {/* Hook up to form/register flow */}}
            />

            <Button
              label="Back to Home"
              variant="solid"
              className="bg-[#F5F4F5]"
              textColor="text-neutral-black"
              size="md"
              fullWidth={true}
              onClick={() => navigate('/')}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

