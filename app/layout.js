import './globals.css'
import { Poppins } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700']
})

export const metadata = {
  title: 'Todo App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className='max-w-5xl p-4 mx-auto '>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}