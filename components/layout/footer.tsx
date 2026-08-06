import Link from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-primary mt-20">
      <div className="w-[95%] mx-auto py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h2 className="text-5xl font-black uppercase">Reel</h2>

            <p className="text-secondary mt-3 max-w-sm">
              Every Frame Has a Story
            </p>
          </div>
          <div>
            <h3 className="uppercase font-bold mb-4">Navigation</h3>

            <div className="flex flex-col gap-2 text-secondary">
              <Link href="#" className="hover:text-accent transition">
                Home
              </Link>

              <Link href="#" className="hover:text-accent transition">
                Movies
              </Link>

              <Link href="#" className="hover:text-accent transition">
                Archive
              </Link>

              <Link href="#" className="hover:text-accent transition">
                Genres
              </Link>
            </div>
          </div>
          <div>
            <h3 className="uppercase font-bold mb-4">Follow us</h3>
            <div className="flex gap-3">
              <Link
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 border border-primary flex items-center justify-center transition hover:border-accent hover:text-accent"
              >
                <FaInstagram size={18} />
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 border border-primary flex items-center justify-center transition hover:border-accent hover:text-accent"
              >
                <FaFacebookF size={18} />
              </Link>
              <Link
                href="#"
                aria-label="X / Twitter"
                className="w-10 h-10 border border-primary flex items-center justify-center transition hover:border-accent hover:text-accent"
              >
                <FaXTwitter size={18} />
              </Link>
              <Link
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 border border-primary flex items-center justify-center transition hover:border-accent hover:text-accent"
              >
                <FaYoutube size={18} />
              </Link>
              <Link
                href="#"
                aria-label="GitHub"
                className="w-10 h-10 border border-primary flex items-center justify-center transition hover:border-accent hover:text-accent"
              >
                <FaGithub size={18} />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-primary mt-10 pt-5 flex flex-col md:flex-row justify-between gap-3 text-sm text-secondary uppercase">
          <span>© 2026 Reel. All rights reserved.</span>

          <div className="flex gap-5">
            <Link href="#" className="hover:text-accent transition">
              Privacy
            </Link>

            <Link href="#" className="hover:text-accent transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
