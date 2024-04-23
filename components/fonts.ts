import { Inter, Roboto } from 'next/font/google'
// import localFont from 'next/font/local'

// const roboto = localFont({
//   src: [
//     {
//       path: './Roboto-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './Roboto-Italic.woff2',
//       weight: '400',
//       style: 'italic',
//     },
//     {
//       path: './Roboto-Bold.woff2',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: './Roboto-BoldItalic.woff2',
//       weight: '700',
//       style: 'italic',
//     },
//   ],
// })
export const roboto = Roboto({
  weight: ['500', '700', "300", '100'],
  subsets: ['latin']
})
export const inter = Inter({
  weight: ["100", "200", "300", "400", "700", "800", "900"],
  subsets: ['latin']
})