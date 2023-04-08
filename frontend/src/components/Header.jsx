import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    return (
        <nav class="sticky top-0 bg-teal-500">
            <div class="container mx-auto flex items-center justify-between flex-wrap p-6">
                <Link
                    to={"/"}
                    class="flex items-center flex-shrink-0 text-white"
                >
                    <span class="font-semibold text-xl tracking-tight">PhoneBook.</span>
                </Link>
                <div class="flex items-center flex-shrink-0 text-white">
                    <button
                        type="button"
                        onClick={() => navigate("/add")}
                        class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white"
                    >
                        Add Contact +
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header;