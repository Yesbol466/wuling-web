import React, { useState } from 'react';

function CarDetail() {
    const car = {
        id: 1,
        name: 'Car 1',
        price: 30000,
        images: ['images/car1.jpg', 'images/car2.jpg', 'images/car3.jpg']
    };

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((currentImageIndex + 1) % car.images.length);
    };

    const handlePrev = () => {
        setCurrentImageIndex((currentImageIndex - 1 + car.images.length) % car.images.length);
    };

    return (
        <div>
            <h1>{car.name}</h1>
            <div className="gallery">
                <button onClick={handlePrev}>Previous</button>
                <img src={car.images[currentImageIndex]} alt={car.name} />
                <button onClick={handleNext}>Next</button>
            </div>
            <p>Price: ${car.price}</p>
            <form>
                <label for="phone">Leave your contact: </label>
                <input type="text" id="phone" name="phone" />
                <button type="button" onClick={() => alert('Redirecting to payment options...')}>Buy</button>
            </form>
        </div>
    );
}

export default CarDetail;
