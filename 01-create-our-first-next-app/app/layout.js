// default metadata
export const metadata = {
  // title: 'Test app'
  title: {
    default: 'Test app',
    template: '%s | Test app'
  },
  description: 'My first next-js app'
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className= "h-full antialiased"
    >
      <header style={{backgroundColor: "yellow", fontSize: "24px"}}>Header</header>
      <body className="min-h-full flex flex-col">{children}</body>
      <footer style={{backgroundColor: "green", fontSize: "24px"}}>Footer</footer>
    </html>
  );
}
