import { Share2, Camera, PlayCircle, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low pt-20 pb-10 px-grid-margin">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link
            href="#"
            className="font-hero-display text-2xl tracking-tighter font-black text-primary mb-6 block"
          >
            TRAVEL TRIBES
          </Link>
          <p className="font-body-md text-on-surface-variant mb-6">
            Curating unforgettable journeys and building communities of passionate travelers.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-on-surface-variant hover:text-primary">
              <Share2 className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-on-surface-variant hover:text-primary">
              <Camera className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-on-surface-variant hover:text-primary">
              <PlayCircle className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-label-bold text-primary mb-6">Destinations</h4>
          <ul className="space-y-3 font-body-md text-on-surface-variant">
            <li><Link href="#" className="hover:text-primary transition-colors">India</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Southeast Asia</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Europe</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Middle East</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-bold text-primary mb-6">Trip Types</h4>
          <ul className="space-y-3 font-body-md text-on-surface-variant">
            <li><Link href="#" className="hover:text-primary transition-colors">Group Tours</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Solo Travel</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Honeymoons</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Corporate Retreats</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-bold text-primary mb-6">Contact Us</h4>
          <ul className="space-y-3 font-body-md text-on-surface-variant">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> hello@traveltribes.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +91 98765 43210
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto border-t border-surface-variant pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body-md text-sm text-on-surface-variant">
          © 2024 Travel Tribes. All rights reserved.
        </p>
        <div className="flex gap-6 font-body-md text-sm text-on-surface-variant">
          <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
