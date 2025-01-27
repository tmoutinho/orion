export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input type="text" id="name" name="name" className="w-full p-2 bg-gray-800 rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input type="email" id="email" name="email" className="w-full p-2 bg-gray-800 rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea id="message" name="message" rows={4} className="w-full p-2 bg-gray-800 rounded" required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Send
        </button>
      </form>
    </div>
  )
}

