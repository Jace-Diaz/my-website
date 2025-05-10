import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'Facebook',
    icon: FaFacebook,
    url: 'https://facebook.com/zentic',
    followers: '10K',
    color: 'bg-blue-600',
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    url: 'https://twitter.com/zentic',
    followers: '5K',
    color: 'bg-blue-400',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://instagram.com/zentic',
    followers: '15K',
    color: 'bg-pink-600',
  },
  {
    name: 'YouTube',
    icon: FaYoutube,
    url: 'https://youtube.com/zentic',
    followers: '20K',
    color: 'bg-red-600',
  },
  {
    name: 'TikTok',
    icon: FaTiktok,
    url: 'https://tiktok.com/@zentic',
    followers: '25K',
    color: 'bg-black',
  },
];

export default function Socials() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Connect With Us</h1>
          <p className="text-xl text-gray-600 mb-12">
            Follow us on social media for the latest updates, promotions, and exclusive content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <div className={`${social.color} rounded-lg shadow-lg overflow-hidden`}>
                <div className="p-6 text-white">
                  <div className="flex items-center justify-between">
                    <social.icon className="h-12 w-12" />
                    <span className="text-2xl font-bold">{social.followers}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{social.name}</h3>
                  <p className="mt-2 text-white text-opacity-80">
                    Follow us on {social.name} for exclusive content and updates
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for exclusive offers and updates
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 
