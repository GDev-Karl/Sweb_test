<<<<<<< HEAD



import React from 'react';
import SwebLogo from '../../compoment/SwebLogo.jsx';
import Button from '../../compoment/Button.jsx';

const Authscreen = () => {
  return (
    <>
      {/* Full-bleed header (outside main container) */}
      <header className="flex flex-col items-start gap-2 w-full px-4 py-3 justify-start md:justify-center md:flex-row md:items-center">
        <div className="w-full max-w-[328px] xs:mx-0 md:mx-auto">
          <SwebLogo />
        </div>
      </header>
      <div className="min-h-dvh md:min-h-screen flex items-center justify-center px-4">
        {/* Frame retains original 360px width on mobile, centered and fluid without forcing overflow */}
        <div className="w-full max-w-[360px]">
          {/* Contenu principal */}
          <div className="flex flex-col items-start gap-3 w-full max-w-[328px] mx-auto xs:mx-0 xs:self-start mt-[12vh] xs:mt-[340px] md:mt-[240px] lg:mt-[300px]">
            <h1
              className="self-stretch m-0 text-left text-[28px] leading-[32px] tracking-[0] font-[750] text-neutral-black font-rethink-sans not-italic"
            >
              Create an account to continue
            </h1>
            <p
              className="flex items-center gap-1 opacity-100 m-0 text-left text-[16px] leading-[24px] font-normal font-rethink-sans not-italic text-neutral-black xs:w-[328px] xs:h-[24px]"
            >
              Already have an account? <span
                className="font-rethink-sans text-[16px] leading-5 font-semibold not-italic cursor-pointer outline-none text-magenta-600"
                role="button"
                tabIndex={0}
                onClick={() => navigate('/login')}
                onKeyDown={(e) => e.key === 'Enter' && navigate('/login')}
              >
                Login
              </span>
            </p>
            <div className="flex flex-col justify-center items-center gap-3 md:gap-4 self-stretch mt-6">
              <Button
                label="Continue with email"
                variant="gradient"
                gradientStart="#FF7C44"
                gradientEnd="#FD2A94"
                textColor="text-white"
                size="md"
                fullWidth={true}
                onClick={() => navigate('/register')}
              />
              <Button
                label="Continue with Gmail"
                variant="solid"
                className="bg-[#F5F4F5]"
                textColor="text-neutral-black"
                size="md"
                fullWidth={true}
                onClick={() => navigate('/login')}
                icon={
                  (
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" aria-hidden>
                      <path d="M20.1 10.2222C20.1 9.40001 20.0333 8.80001 19.8889 8.1778H10.5V11.8889H16.0111C15.9 12.8111 15.3 14.2 13.9666 15.1333L13.9479 15.2575L16.9165 17.5573L17.1222 17.5778C19.0111 15.8333 20.1 13.2666 20.1 10.2222Z" fill="#4285F4"/>
                      <path d="M10.4998 20C13.1997 20 15.4664 19.1111 17.122 17.5778L13.9664 15.1333C13.122 15.7222 11.9886 16.1333 10.4998 16.1333C7.85534 16.1333 5.61091 14.3889 4.81083 11.9778L4.69356 11.9877L1.60677 14.3766L1.56641 14.4889C3.21083 17.7555 6.58862 20 10.4998 20Z" fill="#34A853"/>
                      <path d="M4.81107 11.9778C4.59996 11.3556 4.47779 10.6889 4.47779 10C4.47779 9.3111 4.59996 8.64446 4.79996 8.02225L4.79437 7.88973L1.6689 5.46246L1.56664 5.5111C0.888893 6.86668 0.5 8.38893 0.5 10C0.5 11.6111 0.888893 13.1333 1.56664 14.4889L4.81107 11.9778Z" fill="#FBBC05"/>
                      <path d="M10.4998 3.86664C12.3775 3.86664 13.6442 4.67775 14.3664 5.35557L17.1886 2.6C15.4553 0.988893 13.1997 0 10.4998 0C6.58862 0 3.21083 2.24443 1.56641 5.51107L4.79973 8.02221C5.61091 5.61111 7.85534 3.86664 10.4998 3.86664Z" fill="#EB4335"/>
                    </svg>
                  )
                }
              />
              <Button
                label=" Continue with Facebook"
                variant="solid"
                className="bg-[#F5F4F5]"
                textColor="text-neutral-black"
                size="md"
                fullWidth={true}
                icon={
                  (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                      <path d="M20 10C20 4.47719 15.5228 0 10 0C4.47719 0 0 4.47719 0 10C0 14.9913 3.65687 19.1284 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2147 3.90625C13.3088 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.9499 6.5625 11.5625 7.33336 11.5625 8.12422V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3431 19.1284 20 14.9913 20 10Z" fill="#1877F2"/>
                      <path d="M13.8926 12.8906L14.3359 10H11.5625V8.12422C11.5625 7.33336 11.9499 6.5625 13.1922 6.5625H14.4531V4.10156C14.4531 4.10156 13.3088 3.90625 12.2147 3.90625C9.93047 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C9.62031 20.0609 10.3797 20.0609 11.5625 19.8785V12.8906H13.8926Z" fill="white"/>
                    </svg>
                  )
                }
              />
              <Button
                label="Continue with Apple"
                variant="solid"
                className="bg-[#F5F4F5]"
                textColor="text-neutral-black"
                size="md"
                fullWidth={true}
                icon={
                  (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M17.3627 12.6253C17.3903 15.652 19.9714 16.6592 20 16.6721C19.9781 16.7431 19.5876 18.1074 18.6402 19.5166C17.8212 20.735 16.9711 21.9489 15.6321 21.974C14.3164 21.9987 13.8933 21.1799 12.3891 21.1799C10.8853 21.1799 10.4152 21.9489 9.1697 21.9987C7.8772 22.0485 6.89295 20.6812 6.0672 19.4673C4.3797 16.9843 3.09014 12.4508 4.8217 9.39059C5.68189 7.87087 7.2192 6.90859 8.8877 6.88391C10.1569 6.85929 11.3549 7.75299 12.1308 7.75299C12.9061 7.75299 14.3619 6.67825 15.8924 6.83607C16.533 6.86323 18.3315 7.09943 19.4863 8.81992C19.3932 8.87863 17.3404 10.095 17.3627 12.6254M14.89 5.19332C15.5763 4.3479 16.0381 3.17106 15.9121 2C14.9229 2.04046 13.7269 2.67087 13.0174 3.51578C12.3816 4.26406 11.8248 5.46164 11.9751 6.60948C13.0776 6.69631 14.2038 6.03925 14.89 5.19332Z" fill="black"/>
                    </svg>
                  )
                }
              />
            </div>
          </div>
        </div>
        {/* Autres contenus de l'écran d'accueil */}
      </div>
    </>
  );
};

export default Authscreen;
=======
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
        <div className="max-w-[360px] mx-auto flex flex-col items-start gap-3 sm:gap-4 w-full">
          {/* Title */}
          <div className="w-full text-left">
            <h1 className="text-[22px] sm:text-[24px] md:text-[28px] font-bold leading-tight text-neutral-black font-rethink-sans">
              Create an account to continue
            </h1>
            <p className="mt-1 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed text-neutral-black font-rethink-sans">
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
          <div className="flex flex-col gap-2 sm:gap-3 w-full">
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

>>>>>>> fix-auth
