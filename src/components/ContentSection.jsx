export default function ContentSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Beautiful Content
        </h2>

        <p className="text-xl text-gray-600 leading-relaxed">
          This is your second section with professional styling and smooth
          transitions. The header now has a glassmorphism effect and the text
          emerges beautifully.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">
                Feature {item}
              </h3>
              <p className="text-gray-600">
                Professional card design with smooth animations
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
