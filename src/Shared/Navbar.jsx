import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isBlock, setBlock] = useState(false);
    return (
        <div>
            <div className="flex justify-between px-3 lg:px-20 items-center py-4">
                <Link className="text-4xl font-bold text-[#333]" to='/'>Youtube</Link>
                <div>
                    <ul className="menu space-x-8 font-medium text-[#333] items-center hidden lg:block">
                        <Link className='menu-item' to='/'>Home</Link>
                        <Link className='menu-item' to='/about'>About</Link>
                        <Link className='menu-item' to='/contact'>Contact</Link>
                        <Link className='menu-item btn px-4 hover:border-green-400 font-semibold' to='/create-channel'>Create </Link>
                    </ul>

                    {/* Mobile */}
                    <div className="relative lg:hidden ">
                        {/* menu button */}
                        <button onClick={() => setBlock(!isBlock)} className={`btn px-4`}>
                            Menu
                        </button>
                        {/* menu items */}
                        <ul onBlur={() => setBlock(!isBlock)} className={`${isBlock ? 'block transition-all' : 'hidden '} w-36  bg-white space-y-2 py-3 absolute right-0 shadow-lg flex flex-col text-center font-medium text-[#333]`}>
                            <Link className='menu-item' to='/'>Home</Link>
                            <Link className='menu-item' to='/about'>About</Link>
                            <Link className='menu-item' to='/contact'>Contact</Link>
                            <Link className='menu-item px-4 py-1 text-red-400 font-semibold' to='/create-channel'>Create </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;