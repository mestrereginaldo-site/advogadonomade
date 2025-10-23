export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Advogado <span className="text-yellow-400">Nômade</span>
        </h1>
        <p className="text-xl mb-8">
          OAB/SC 57.879 | Atendimento 24h em todo Brasil
        </p>
        <p className="text-lg mb-8">
          Atualmente em: <strong>Salvador, BA</strong>
        </p>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300">
          Chamar no WhatsApp
        </button>
      </div>
    </main>
  )
}
