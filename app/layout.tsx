import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Felipe Dias',
  description: 'Meu Portifolio pessoal 2024',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        <main className='w-full min-h-screen flex justify-center items-center flex-col mx-auto p-1'>
          {children}
        </main>
      </body>
    </html>
  )
}
