export const metadata = {
  title: 'Advogado Nômade - OAB/SC 57.879',
  description: 'Atendimento jurídico 24h em todo Brasil. Especialista em Direito Digital e Contratos Internacionais.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
