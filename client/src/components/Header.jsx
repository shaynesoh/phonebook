import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    return (
        <nav className="sticky top-0 bg-teal-500 z-50">
            <div className="container mx-auto flex items-center justify-between flex-wrap p-6">
                <Link
                    to={"/"}
                    className="flex items-center flex-shrink-0 text-white"
                >
                    <span className="font-semibold text-xl tracking-tight">PhoneBook</span>
                </Link>
                <div className="flex items-center flex-shrink-0 text-white">
                    <button
                        type="button"
                        onClick={() => navigate("/add")}
                        className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white"
                    >
                        Add Contact +
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header;