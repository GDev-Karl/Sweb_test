import React from 'react';

// Generic props: className, size, color, ...rest

export const GoogleIcon = ({ size = 20, className = '', ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden className={className} {...rest}>
    <path d="M19.6 10.227c0-.68-.061-1.333-.175-1.96H10v3.708h5.381a4.6 4.6 0 0 1-1.997 3.02v2.51h3.234c1.893-1.744 2.982-4.31 2.982-7.278Z" fill="#4285F4"/>
    <path d="M10 20c2.7 0 4.968-.894 6.624-2.41l-3.234-2.51c-.897.602-2.043.96-3.39.96-2.607 0-4.814-1.76-5.603-4.125H1.04v2.594A10 10 0 0 0 10 20Z" fill="#34A853"/>
    <path d="M4.397 11.915A5.997 5.997 0 0 1 4.084 10c0-.664.114-1.309.313-1.915V5.49H1.04A10 10 0 0 0 0 10c0 1.62.387 3.151 1.04 4.51l3.357-2.595Z" fill="#FBBC05"/>
    <path d="M10 3.958c1.468 0 2.785.505 3.825 1.495l2.869-2.87C14.964.93 12.7 0 10 0A10 10 0 0 0 1.04 5.49l3.357 2.595C5.183 5.72 7.39 3.958 10 3.958Z" fill="#EA4335"/>
  </svg>
);

export const FacebookIcon = ({ size = 20, className = '', variant = 'brand', color = 'currentColor', ...rest }) => (
  variant === 'brand' ? (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 21 20" fill="none" aria-hidden className={className} {...rest}>
      <path d="M20.5 10C20.5 4.47719 16.0228 0 10.5 0C4.97719 0 0.5 4.47719 0.5 10C0.5 14.9913 4.15687 19.1284 8.9375 19.8785V12.8906H6.39844V10H8.9375V7.79688C8.9375 5.29063 10.4305 3.90625 12.7147 3.90625C13.8088 3.90625 14.9531 4.10156 14.9531 4.10156V6.5625H13.6922C12.4499 6.5625 12.0625 7.33336 12.0625 8.12422V10H14.8359L14.3926 12.8906H12.0625V19.8785C16.8431 19.1284 20.5 14.9913 20.5 10Z" fill="#1877F2"/>
      <path d="M14.3926 12.8906L14.8359 10H12.0625V8.12422C12.0625 7.33328 12.4499 6.5625 13.6922 6.5625H14.9531V4.10156C14.9531 4.10156 13.8088 3.90625 12.7146 3.90625C10.4305 3.90625 8.9375 5.29063 8.9375 7.79688V10H6.39844V12.8906H8.9375V19.8785C9.45439 19.9595 9.9768 20.0001 10.5 20C11.0232 20.0002 11.5456 19.9595 12.0625 19.8785V12.8906H14.3926Z" fill="white"/>
    </svg>
  ) : (
    // Glyph-only 'f' — inherits currentColor and works on neutral backgrounds
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden className={className} {...rest}>
      <path d="M13.5 8.5H15V6.125C14.747 6.086 13.91 6 12.936 6 10.903 6 9.5 7.24 9.5 9.522V11.5H7.25v2.75H9.5V20h2.75v-5.75h2.148l.342-2.75H12.25V9.79c0-.794.214-1.289 1.25-1.289Z" />
    </svg>
  )
);

export const EyeOpenIcon = ({ size = 24, stroke = '#EE1477', className = '', ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...rest}>
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" stroke={stroke} strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="12" r="3" stroke={stroke} strokeWidth="1.5" fill="none"/>
  </svg>
);

export const EyeClosedIcon = ({ size = 24, stroke = '#EE1477', className = '', ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...rest}>
    <path d="M3 3l18 18" stroke={stroke} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" stroke={stroke} strokeWidth="1.5" fill="none"/>
  </svg>
);

export const RadioCheckIcon = ({ size = 14, color = '#9D919F', className = '', ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden className={className} {...rest}>
    <path fillRule="evenodd" clipRule="evenodd" d="M0.333984 6.99998C0.333984 3.31798 3.31865 0.333313 7.00065 0.333313C10.6827 0.333313 13.6673 3.31798 13.6673 6.99998C13.6673 10.682 10.6827 13.6666 7.00065 13.6666C3.31865 13.6666 0.333984 10.682 0.333984 6.99998ZM9.47198 6.13798C9.59342 6.01224 9.66062 5.84384 9.6591 5.66905C9.65758 5.49425 9.58747 5.32704 9.46386 5.20343C9.34026 5.07983 9.17305 5.00972 8.99825 5.0082C8.82345 5.00668 8.65505 5.07387 8.52932 5.19531L6.33398 7.39065L5.47198 6.52865C5.34625 6.40721 5.17785 6.34001 5.00305 6.34153C4.82825 6.34305 4.66104 6.41316 4.53744 6.53677C4.41383 6.66037 4.34372 6.82758 4.3422 7.00238C4.34068 7.17718 4.40788 7.34558 4.52932 7.47131L5.86265 8.80465C5.98767 8.92963 6.15721 8.99984 6.33398 8.99984C6.51076 8.99984 6.6803 8.92963 6.80532 8.80465L9.47198 6.13798Z" fill={color} />
  </svg>
);

export const UserOutlineIcon = ({ size = 24, stroke = '#827384', className = '', ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
    {...rest}
  >
    <path d="M16 11.996V7.998M16 11.996C16 6.839 8 6.839 8 11.996C8 17.163 16 17.106 16 11.996ZM16 11.996C16 16.996 21 16.996 21 11.996C21 7.027 16.97 3 12 3C7.03 3 3 7.027 3 11.996C3 16.964 7.03 20.991 12 20.991C13.675 21.075 15.938 20.57 17.776 19.16" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default {
  GoogleIcon,
  FacebookIcon,
  EyeOpenIcon,
  EyeClosedIcon,
  RadioCheckIcon,
  UserOutlineIcon,
};
