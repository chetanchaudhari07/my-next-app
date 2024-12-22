import { Navbar } from '../navigation/Navbar';
import { SearchBar } from '../search/SearchBar';
import { UserMenu } from '../auth/UserMenu';

import React from 'react';


export function Header() {



    return (

        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Navbar />
                    <div className="flex items-center space-x-4">
                        <SearchBar />
                        <UserMenu />
                    </div>
                </div>
            </div>
        </header>


    );
}