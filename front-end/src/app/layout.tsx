import './globals.css';

    export const metadata = {
      title: 'Community Help Platform',
      description: 'Empowering communities through collaboration and support',
    };

    export default function RootLayout({ children }: { children: React.ReactNode }) {
      return (
        <html lang="en">
          <head>
            {/* Optionally add a custom favicon */}
            {/* <link rel="icon" href="/custom-favicon.ico" /> */}
          </head>
          <body>{children}</body>
        </html>
      );
    }