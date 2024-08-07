import React from 'react';

function NavBar() {
    return (
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="cars.html">Cars</a></li>
                <li><a href="offers.html">Offers</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <div className="language-options">
                <a href="#">EN</a>
                <a href="#">RU</a>
                <a href="#">KZ</a>
                <a href="#">CN</a>
            </div>
        </nav>
    );
}

export default NavBar;
