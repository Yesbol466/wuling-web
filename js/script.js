document.addEventListener('DOMContentLoaded', function () {
    const carImages = [
        'images/car1.jpg',
        'images/car2.jpg',
        'images/car3.jpg'
    ];

    let currentImageIndex = 0;
    const carImageElement = document.getElementById('car-image');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', function () {
            currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : carImages.length - 1;
            carImageElement.src = carImages[currentImageIndex];
        });

        nextButton.addEventListener('click', function () {
            currentImageIndex = (currentImageIndex < carImages.length - 1) ? currentImageIndex + 1 : 0;
            carImageElement.src = carImages[currentImageIndex];
        });
    }

    const buyButton = document.getElementById('buy-button');
    if (buyButton) {
        buyButton.addEventListener('click', function () {
            alert('Redirecting to payment options...');
            // Implement payment logic here
        });
    }

    // Simulating data fetch for cars
    const carListElement = document.getElementById('car-list');
    if (carListElement) {
        const cars = [
            { id: 1, name: 'Car 1', price: 30000, image: 'images/car1.jpg' },
            { id: 2, name: 'Car 2', price: 40000, image: 'images/car2.jpg' },
            { id: 3, name: 'Car 3', price: 50000, image: 'images/car3.jpg' },
            { id: 4, name: 'Car 4', price: 60000, image: 'images/car4.jpg' },
            { id: 5, name: 'Car 5', price: 70000, image: 'images/car5.jpg' },
            { id: 6, name: 'Car 6', price: 80000, image: 'images/car6.jpg' },
            { id: 7, name: 'Car 7', price: 90000, image: 'images/car7.jpg' },
            { id: 8, name: 'Car 8', price: 100000, image: 'images/car8.jpg' },
            { id: 9, name: 'Car 9', price: 110000, image: 'images/car9.jpg' },
            { id: 10, name: 'Car 10', price: 120000, image: 'images/car10.jpg' },
            { id: 11, name: 'Car 11', price: 130000, image: 'images/car11.jpg' },
            { id: 12, name: 'Car 12', price: 140000, image: 'images/car12.jpg' },
            { id: 13, name: 'Car 13', price: 150000, image: 'images/car13.jpg' },
            { id: 14, name: 'Car 14', price: 160000, image: 'images/car14.jpg' },
            { id: 15, name: 'Car 15', price: 170000, image: 'images/car15.jpg' },
            { id: 16, name: 'Car 16', price: 180000, image: 'images/car16.jpg' },
            { id: 17, name: 'Car 17', price: 190000, image: 'images/car17.jpg' },
            { id: 18, name: 'Car 18', price: 200000, image: 'images/car18.jpg' },
            { id: 19, name: 'Car 19', price: 210000, image: 'images/car19.jpg' }
        ];

        cars.forEach(car => {
            const carItem = document.createElement('div');
            carItem.classList.add('car-item');
            carItem.innerHTML = `
                <img src="${car.image}" alt="${car.name}">
                <h2>${car.name}</h2>
                <p>Price: $${car.price}</p>
                <a href="car.html?id=${car.id}">Details</a>
            `;
            carListElement.appendChild(carItem);
        });
    }

    // Simulating car detail fetch
    const urlParams = new URLSearchParams(window.location.search);
    const carId = urlParams.get('id');
    if (carId) {
        const carDetail = {
            id: carId,
            name: `Car ${carId}`,
            price: 30000 + carId * 1000,
            dimensions: '4490/1615/1900',
            power: 73,
            torque: 136,
            engine: '1.5L 102 HP',
            wheelbase: 3050,
            frontTrack: 1386,
            rearTrack: 1408,
            fuelCapacity: 45,
            cargoSpace: 4500
        };

        document.getElementById('car-name').innerText = carDetail.name;
        document.getElementById('car-price').innerText = carDetail.price;
        document.getElementById('car-dimensions').innerText = carDetail.dimensions;
        document.getElementById('car-power').innerText = carDetail.power;
        document.getElementById('car-torque').innerText = carDetail.torque;
        document.getElementById('car-engine').innerText = carDetail.engine;
        document.getElementById('car-wheelbase').innerText = carDetail.wheelbase;
        document.getElementById('car-front-track').innerText = carDetail.frontTrack;
        document.getElementById('car-rear-track').innerText = carDetail.rearTrack;
        document.getElementById('car-fuel-capacity').innerText = carDetail.fuelCapacity;
        document.getElementById('car-cargo-space').innerText = carDetail.cargoSpace;
    }
});
