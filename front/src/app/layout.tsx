import './globals.css';
import { ChakraWrapProvider } from '@/components/Wrapper';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <ChakraWrapProvider>
          {children}
        </ChakraWrapProvider>
      </body>
    </html>
  )
}
