import { personalInfo, socialLinks } from '../data/portfolioData'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Fun Zone', href: '#fun-zone' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </h3>
            <p className="text-gray-400 mb-4">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links (2 Columns ONLY change here) */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-1 gap-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact (UNCHANGED) */}
          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <div className="space-y-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {social.name}
                </a>
              ))}
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Made with 💙 using React & Tailwind CSS
            </p>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-8">
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
