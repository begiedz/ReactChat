import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">React Chat</span>
            <div className="user">
                <img
                    src="https://cdn.pixabay.com/photo/2023/05/20/16/48/dog-8006839_960_720.jpg"
                    alt="user"
                />
                <span>John</span>
                <button>Logout</button>
            </div>
        </div>
    );
};

export default Navbar;
