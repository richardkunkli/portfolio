import "../styles/globals.css";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Richard Kunkli</title>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
