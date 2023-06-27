import './globals.css'

export const metadata = {
  title: 'Todo List App',
  description: 'Todo list app built using NextJS 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
