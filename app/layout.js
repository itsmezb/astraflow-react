import '@/devlink/./global.css'
import { Inter } from 'next/font/google'
import "@/devlink/global.css";

const inter = Inter({ subsets: ['latin'] })

 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
