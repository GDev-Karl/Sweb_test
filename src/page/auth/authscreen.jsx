import React from 'react';
import { useNavigate } from 'react-router-dom';
import SwebLogo from '../../compoment/SwebLogo.jsx';
import Button from '../../compoment/Button.jsx';

const Authscreen = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Header with logo */}
      <header className="w-full px-4 py-4 flex justify-start md:justify-center">
        <SwebLogo />
      </header>

      {/* Text + buttons block fixed 32px above the bottom */}
      <div className="absolute left-0 right-0 bottom-[32px] px-4 sm:px-6 lg:px-8">
        <div className="pr-[16px] pl-[16px]  w-full">
          {/* Title */}
          <div className="w-full text-left">
          <h1 className="text-[26px] align-self: stretch; leading-[32px] font-bold text-neutral-black" style={{ fontFamily: 'Dm-Sans, sans-serif', fontWeight: 700 }}>
          Create an account to continue
            </h1>
            <p className="mt-[12px] text-[16px] sm:text-[16px] md:text-[16px] leading-relaxed text-neutral-black font-dm-sans">
              Already have an account?{" "}
              <span
                className="font-semibold text-magenta-600 cursor-pointer"
                role="button"
                tabIndex={0}
                onClick={() => navigate("/login")}
                onKeyDown={(e) => e.key === "Enter" && navigate("/login")}
              >
                Login
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 sm:gap-3 w-full mt-[24px]">
            {/* Email */}
            <Button
              label="Continue with email"
              variant="gradient"
              gradientStart="#FF7C44"
              gradientEnd="#FD2A94"
              textColor="text-white"
              size="md"
              fullWidth={true} // takes 100% of the container
              onClick={() => navigate("/register")}
            />

            {/* Gmail */}
            <Button
              label="Continue with Gmail"
              variant="solid"
              className="bg-[#F5F4F5]"
              textColor="text-neutral-black"
              size="md"
              fullWidth={true}
              onClick={() => navigate("/login")}
              icon={
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20c11.045 0 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                  <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4c-7.838 0-14.645 4.448-17.694 10.691z" />
                  <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.181 39.556 16.07 44 24 44z" />
                  <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a11.96 11.96 0 0 1-4.094 5.489l.003-.002l6.19 5.238C36.971 39.199 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
                </svg>
              }
            />

            {/* Facebook */}
            <Button
              label="Continue with Facebook"
              variant="solid"
              className="bg-[#F5F4F5]"
              textColor="text-neutral-black"
              size="md"
              fullWidth={true}
              onClick={() => navigate("/login")}
              icon={
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path fill="#1877F2" d="M24 4C12.954 4 4 12.954 4 24c0 9.673 6.865 17.708 16 19.542V30h-4v-6h4v-4c0-4.418 3.582-8 8-8h6v6h-6a2 2 0 0 0-2 2v4h8l-1.143 6H26v13.684c9.274-.823 16.575-8.63 15.951-18.001A20.013 20.013 0 0 0 24 4" />
                  <path fill="#fff" d="M26 44.001V30h6.857L34 24h-8v-4a2 2 0 0 1 2-2h6v-6h-6c-4.418 0-8 3.582-8 8v4h-4v6h4v13.684a19.9 19.9 0 0 0 6 0" />
                </svg>
              }
            />

            {/* Apple */}
            <Button
              label="Continue with Apple"
              variant="solid"
              className="bg-[#F5F4F5]"
              textColor="text-neutral-black"
              size="md"
              fullWidth={true}
              onClick={() => navigate("/login")}
              icon={
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                  <path fill="currentColor" d="M784.448 543.232c-.192-80.192 35.84-140.672 109.12-185.792c-41.024-59.136-102.912-91.648-184.064-97.792c-77.44-6.016-162.176 45.12-192.448 45.12c-32.256 0-106.112-42.88-164.416-42.88c-119.04 1.856-244.672 92.288-244.672 275.808c0 56.32 10.24 114.56 30.72 174.656c27.392 80.192 126.208 276.032 229.312 273.152c53.824-1.28 91.52-38.4 160.896-38.4c67.84 0 102.272 38.4 164.416 38.4c103.36-1.536 192.768-183.936 219.712-264.32c-139.84-65.92-168.96-193.28-168.896-227.552m-98.176-313.152c58.88-71.104 53.44-135.936 51.456-158.08c-51.168 2.976-110.592 34.56-144.512 73.28c-37.248 41.984-58.752 93.568-54.08 154.304c55.04 4.224 105.44-24.128 147.136-69.504" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Authscreen;

