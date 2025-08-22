


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