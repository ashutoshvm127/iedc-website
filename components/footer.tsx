import Link from "next/link"
import { footerData, socialLinks, contactInfo } from "@/data/data"

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h2 className="text-2xl font-bold">IEDC ASIET</h2>
            <p className="mt-4 text-blue-200">{footerData.description}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-blue-200 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2">
                {/* Replace or remove the invalid property */}
                <span className="sr-only">Contact Icon</span>
                <a href={`mailto:${contactInfo.email}`} className="text-blue-200 hover:text-white">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                {/* Replace with the correct property or remove if not applicable */}
                {/* Icon placeholder removed as 'icon' does not exist on 'ContactInfo' */}
                <a href={`tel:${contactInfo.phone}`} className="text-blue-200 hover:text-white">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                {/* Placeholder for icon or remove this line */}
                <span className="text-blue-200">
                  {contactInfo.address[0]}
                  <br />
                  {contactInfo.address[1]}
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-blue-200 hover:text-white">
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-700 pt-8 text-center">
          <p className="text-blue-200">&copy; {footerData.copyright.year} IEDC ASIET. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
