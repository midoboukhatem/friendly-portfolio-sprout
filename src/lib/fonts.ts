import localFont from 'next/font/local';

export const montserrat = localFont({
  src: [
    {
      path: '../../public/fonts/Montserrat-Black.ttf',
      weight: '900',
      style: 'normal',
    }
  ],
  variable: '--font-montserrat'
});
