import '@/devlink/./global.css'
import { Inter } from 'next/font/google'
import { DevLinkProvider } from '@/devlink';

const inter = Inter({ subsets: ['latin'] })

 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DevLinkProvider>
        {children}
        </DevLinkProvider>
        </body>
    </html>
  )
}
