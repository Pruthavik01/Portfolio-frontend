export default function Header({ headerRef, headerTextRef }) {
    return (
        <header
            ref={headerRef}
            className="
                    fixed top-0 left-0 w-full h-20 bg-black text-white
                    flex items-center justify-between
                    px-4 sm:px-6 lg:px-10
                    z-50
                    -translate-y-full opacity-0
                    transition-all duration-300 ease-out
                "
        >

            {/* Left - Logo */}
            <div className="flex items-center gap-2">
                <span className="text-lg font-semibold hidden sm:block">
                    Portfolio
                </span>
            </div>

            {/* Center - Name (True Center + Safe) */}
            <div
                ref={headerTextRef}
                className="absolute left-1/2 top-1/2 
                   -translate-x-1/2 -translate-y-1/2
                   pointer-events-none
                   hidden sm:block"
            >
                <h1 className="text-xl md:text-2xl font-bold tracking-wide">
                    PRUTHAVIK
                </h1>
            </div>

            {/* Right - Navigation */}
            <nav className="flex items-center gap-6">
                <a href="#home" className="text-sm font-medium hover:text-gray-300 hidden md:block focus:outline-none focus:ring-2 focus:ring-white/40">
                    Home
                </a>
                <a href="#about" className="text-sm font-medium hover:text-gray-300 hidden md:block focus:outline-none focus:ring-2 focus:ring-white/40">
                    About
                </a>
                <a href="#projects" className="text-sm font-medium hover:text-gray-300 hidden md:block focus:outline-none focus:ring-2 focus:ring-white/40">
                    Projects
                </a>
                <a href="#contact" className="text-sm font-medium hover:text-gray-300 hidden md:block focus:outline-none focus:ring-2 focus:ring-white/40">
                    Contact
                </a>

                {/* Mobile Menu */}
                <button
                    className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5
                     focus:outline-none focus:ring-2 focus:ring-white/40"
                    aria-label="Menu"
                >
                    <span className="w-6 h-0.5 bg-white"></span>
                    <span className="w-6 h-0.5 bg-white"></span>
                    <span className="w-6 h-0.5 bg-white"></span>
                </button>
            </nav>
        </header>
    );
}
