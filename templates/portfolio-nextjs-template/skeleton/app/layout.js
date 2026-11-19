import './globals.css';

export const metadata = { title: 'Portfolio ${{ values.fullName }}' };

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
