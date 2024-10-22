

const Header = () => {
    return (
        <header className="flex items-center justify-between px-28 py-4 bg-blue-500">
            <h2 className="text-2xl font-bold text-white">Premium Code</h2>
            <button className="px-4 py-2 font-bold text-blue-500 bg-white rounded hover:bg-[#eff1f2] transition-colors">
                Sign In
            </button>
        </header>
    );
};

export default Header;