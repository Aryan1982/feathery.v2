import AuthProvider from "@/context/authProvider"
import "./globals.css";
import { ThemeProvider } from "@/context/themProvider";
import Footer from "@/components/public/footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: 'Feathery',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <AuthProvider>
      <ThemeProvider>
      <body>{children}
      <Footer/>
      <Toaster/>
      </body>
      </ThemeProvider>
      </AuthProvider>
    </html>
  )
}
