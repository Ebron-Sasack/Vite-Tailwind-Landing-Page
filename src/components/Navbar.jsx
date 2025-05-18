export const Navbar = ()=>{
    return(
        <>
            <div className="flex justify-between items-center p-6 max-w-7xl m-auto">
                <h1 className="text-2xl font-bold">LandingPage</h1>
                <nav className="hidden md:flex justify-center items-center gap-6">
                    <a href="#features" className="text-gray-400 hover:text-white transition">Features</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Pricing</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Docs</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
                </nav>
                <button className="bg-white text-black rounded-md hover:bg-gray-200 transition px-4 py-2 cursor-pointer">Sign In</button>
            </div>
        </>
    );
}