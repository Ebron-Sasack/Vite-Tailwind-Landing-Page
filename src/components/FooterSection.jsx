

export const FooterSection = ()=>{
    return (
        <>
            <footer className="mt-24 p-12 bg-gray-900 text-gray-400">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div>
                        <h4 className="text-lg font-semibold text-white">Companny</h4>
                        <ul className="mt-3 flex flex-col gap-2">
                            <li><a href="" className="hover:text-white">About</a></li>
                            <li><a href="" className="hover:text-white">Careers</a></li>
                            <li><a href="" className="hover:text-white">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white">Resources</h4>
                        <ul className="mt-3 flex flex-col gap-2">
                            <li><a href="" className="hover:text-white">Docs</a></li>
                            <li><a href="" className="hover:text-white">Guides</a></li>
                            <li><a href="" className="hover:text-white">Community</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white">Support</h4>
                        <ul className="mt-3 flex flex-col gap-2">
                            <li><a href="" className="hover:text-white">Help Center</a></li>
                            <li><a href="" className="hover:text-white">Contact</a></li>
                            <li><a href="" className="hover:text-white">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white">Follow Us</h4>
                        <ul className="mt-3 flex flex-col gap-2">
                            <li><a href="" className="hover:text-white">Twitter</a></li>
                            <li><a href="" className="hover:text-white">Linkedin</a></li>
                            <li><a href="" className="hover:text-white">GitHub</a></li>
                        </ul>
                    </div>
                </div>
                <p className="mt-8 text-center">&copy; {new Date().getFullYear()} LaunchPage. Built with Tailwind CSS.</p>
            </footer>
        </>
    );
}