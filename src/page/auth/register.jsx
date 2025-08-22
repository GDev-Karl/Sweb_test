import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SwebLogo from '../../compoment/SwebLogo.jsx';
import Button from '../../compoment/Button.jsx';
import { GoogleIcon, FacebookIcon, EyeOpenIcon, EyeClosedIcon, RadioCheckIcon, UserOutlineIcon } from '../../compoment/icons/Icons.jsx';

const Register = () => {
  const navigate = useNavigate();
  // State
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasNumeric, setHasNumeric] = useState(false);

  useEffect(() => {
    setHasLowercase(/[a-z]/.test(password));
    setHasNumeric(/[0-9]/.test(password));
  }, [password]);

  const validateEmail = (mail) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);

  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!fullName) newErrors.fullName = 'Full name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!validateEmail(email)) newErrors.email = 'Invalid email address';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password is too short';
    else if (!hasLowercase || !hasNumeric) newErrors.password = 'Password must include a lowercase letter and a number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    console.log('Register form valid. Proceed to next step.');
    // navigate('/location'); // Uncomment if route exists
  };

  return (
    <>
      {/* En-tête avec logo (mêmes gutters que l'auth screen) */}
      <header className="w-full px-4 py-4 flex justify-start md:justify-center mb-[32px]">
        <SwebLogo />
      </header>

      {/* Bloc contenu avec mêmes marges que Authscreen, en scroll */}
      <div className="px-4 sm:px-6 lg:px-4 pb-[32px]">
        <div className="pr-[16px] pl-[16px] w-full">
          {/* Titre */}
          <div className="w-full text-left">
            <h1 className="text-[26px] align-self: stretch; leading-[32px] font-bold text-neutral-black" style={{ fontFamily: 'Dm-Sans, sans-serif', fontWeight: 700 }}>
          Book a <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FD2A94] to-[#FF7C44]">haircut</span> in minutes
            </h1>
           
          </div>

          {/* Form fields - match Authscreen container width (w-full inside max-w-[360px]) */}
          <div className="w-full flex flex-col items-start gap-4 mt-[24px]">
            {/* Username */}
            <div className="w-full flex flex-col items-start gap-2 ">
              <label htmlFor="username" className="text-[13px] leading-[18px] text-neutral-black font-rethink-sans">Username</label>
              <div className="w-full relative">
                <UserOutlineIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 aspect-square pointer-events-none flex items-center justify-center px-[3px] py-[3px]" stroke="#827384" />
                <input
                  id="username"
                  type="text"
                  placeholder="username"
                  className="w-full h-14 pl-[52px] pr-4 rounded-[12px] border border-[#E9E7E9] bg-[#FAFAFA] text-neutral-black placeholder-[#9D919F] focus:outline-none focus:ring-2 focus:ring-magenta-600/50 focus:border-magenta-600 overflow-hidden text-ellipsis whitespace-nowrap text-[16px] leading-6 font-normal font-['DM_Sans']"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              {errors.username && (
                <p className="text-red-500 text-[12px] leading-4 mt-1">{errors.username}</p>
              )}
            </div>

            {/* Full name */}
            <div className="w-full flex flex-col items-start gap-2">
              <label htmlFor="fullname" className="text-[13px] leading-[18px] text-neutral-black font-rethink-sans">Full name</label>
              <div className="w-full h-14 px-4 flex items-center gap-3 self-stretch rounded-[12px] border border-[#E9E7E9] bg-[#FAFAFA] focus-within:ring-2 focus-within:ring-magenta-600/50 focus-within:border-magenta-600">
                <input
                  id="fullname"
                  type="text"
                  placeholder="John Doe"
                  className="w-full flex-1 pl-[24px] h-full bg-transparent text-neutral-black placeholder-[#9D919F] focus:outline-none overflow-hidden text-ellipsis whitespace-nowrap text-[16px] leading-6 font-normal font-['DM_Sans']"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              {errors.fullName && (
                <p className="text-red-500 text-[12px] leading-4 mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div className="w-full flex flex-col items-start gap-2">
              <label htmlFor="email" className="text-[13px] leading-[18px] text-neutral-black font-rethink-sans">Email</label>
              <div className="w-full h-14 px-4 flex items-center gap-3 self-stretch rounded-[12px] border border-[#E9E7E9] bg-[#FAFAFA] focus-within:ring-2 focus-within:ring-magenta-600/50 focus-within:border-magenta-600">
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="w-full flex-1 pl-[24px] h-full bg-transparent text-neutral-black placeholder-[#9D919F] focus:outline-none overflow-hidden text-ellipsis whitespace-nowrap text-[16px] leading-6 font-normal font-['DM_Sans']"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-[12px] leading-4 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="w-full flex flex-col items-start gap-2">
              <label htmlFor="password" className="text-[13px] leading-[18px] text-neutral-black font-rethink-sans">Password</label>
              <div className="w-full h-14 px-4 flex items-center gap-3 self-stretch rounded-[12px] border border-[#E9E7E9] bg-[#FAFAFA] focus-within:ring-2 focus-within:ring-magenta-600/50 focus-within:border-magenta-600">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="flex-1 pl-[24px] h-full bg-transparent text-neutral-black placeholder-[#9D919F] focus:outline-none overflow-hidden text-ellipsis whitespace-nowrap text-[16px] leading-6 font-normal font-['DM_Sans']"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword((v) => !v)}
                  className="flex w-6 h-6 px-[2px] py-[3px] items-center justify-center aspect-square text-magenta-600 hover:text-magenta-600 focus:outline-none mr-[16px]"
                >
                  {/* Eye icon */}
                  {showPassword ? (
                    <EyeClosedIcon className="w-full h-full" stroke="#EE1477" />
                  ) : (
                    <EyeOpenIcon className="w-full h-full" stroke="#EE1477" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-[12px] leading-4 mt-1">{errors.password}</p>
              )}
              <p className="text-[12px] leading-4 font-normal mt-[8px] text-[#827384] text-left font-['DM_Sans', sans-serif]">
                Password must be between 6-24 characters long with no spaces and contain
              </p>
              <div className="flex flex-col space-y-1 mt-[4px]">
                <div className="flex items-center gap-2">
                  <RadioCheckIcon className="shrink-0" color={hasLowercase ? '#1B181B' : '#9D919F'} />
                  <span className="text-[12px] leading-4 font-normal text-neutral-black">
                    Lowercase letter
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-[4px]">
                  <RadioCheckIcon className="shrink-0" color={hasNumeric ? '#1B181B' : '#9D919F'} />
                  <span className="text-[12px] leading-4 font-normal text-neutral-black">
                    Number
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions (placeholders) */}
          <div className="flex flex-col gap-2 sm:gap-3 w-full mt-[16px]">
            <Button
              label="Continue with email"
              variant="gradient"
              gradientStart="#FF7C44"
              gradientEnd="#FD2A94"
              textColor="text-white"
              size="md"
              fullWidth={true}
              onClick={handleSubmit}
            />

            {/* OR separator */}
            <div className="flex justify-center items-center gap-4 self-stretch">
              <span className="h-px flex-1 w-[140px] bg-[#E9E7E9]"></span>
              <span className="text-[16px] leading-5 font-semibold text-[#6B5D6C] font-['DM_Sans sans-serif']">or</span>
              <span className="h-px flex-1 w-[140px] bg-[#E9E7E9]"></span>
            </div>

            <div className="w-full flex items-stretch gap-2">
              <Button
                label="Gmail"
                variant="solid"
                className="bg-[#F5F4F5] flex-[1_0_0]"
                textColor="text-neutral-black"
                size="md"
                fullWidth={false}
                icon={<GoogleIcon size={20} />}
                onClick={() => {/* TODO: trigger Google OAuth */}}
              />
              <Button
                label="Facebook"
                variant="solid"
                className="bg-[#F5F4F5] flex-[1_0_0]"
                textColor="text-neutral-black"
                size="md"
                fullWidth={false}
                icon={
                  <div className="flex w-6 h-6 items-center justify-center">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <path fill="#1877F2" d="M24 4C12.954 4 4 12.954 4 24c0 9.673 6.865 17.708 16 19.542V30h-4v-6h4v-4c0-4.418 3.582-8 8-8h6v6h-6a2 2 0 0 0-2 2v4h8l-1.143 6H26v13.684c9.274-.823 16.575-8.63 15.951-18.001A20.013 20.013 0 0 0 24 4" />
                      <path fill="#fff" d="M26 44.001V30h6.857L34 24h-8v-4a2 2 0 0 1 2-2h6v-6h-6c-4.418 0-8 3.582-8 8v4h-4v6h4v13.684a19.9 19.9 0 0 0 6 0" />
                    </svg>
                  </div>
                }
                onClick={() => {/* TODO: trigger Facebook OAuth */}}
              />
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-[16px]">
            <p className="text-[16px] leading-[16px] font-normal text-neutral-600 font-DM-sans text-left">
              By signing up, you agree to our{' '}
              <span className="text-gray-500 cursor-pointer underline transition-colors font-medium">
                Terms and Privacy Policy
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
