// components/Footer.jsx

import Link from 'next/link';

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © 2025 Yusuf Harry Setiawan
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="https://github.com/Harr24/my-portofolio-nextjs"
              target="_blank"
              className="uppercase hover:text-[#16f2b3]"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
