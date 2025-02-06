import React from 'react'

const page = () => {
  return (
    <section className="container mx-auto py-16 mt-5 mb-3 px-6 md:px-12 lg:px-20 dark:text-white dark:bg-gray-800">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white dark:text-white dark:bg-gray-900 shadow-lg rounded-2xl overflow-hidden">
      {/* Left Side - Contact Information */}
      <div className="bg-blue-600 text-white dark:text-white dark:bg-gray-900 p-8 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-200">
          We'd love to hear from you! Fill out the form and our team will get back to you soon.
        </p>
        <div className="mt-6 space-y-4">
          <p className="flex items-center">
            📍 <span className="ml-2">123 Street, Dhaka, Bangladesh</span>
          </p>
          <p className="flex items-center">
            📧 <span className="ml-2">contact@regularnews.com</span>
          </p>
          <p className="flex items-center">
            📞 <span className="ml-2">+880 1234 567 890</span>
          </p>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="p-8 dark:text-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold  mb-6">Send a Message</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border dark:text-white dark:bg-gray-900 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border dark:text-white dark:bg-gray-900 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border dark:text-white dark:bg-gray-900 border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button className="w-full dark:text-white dark:bg-gray-800 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
  )
}

export default page
