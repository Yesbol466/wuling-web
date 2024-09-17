document.addEventListener('DOMContentLoaded', function () {
    const translations = {
        en: "language/en.json",
        ru: "language/ru.json",
        kz: "language/kz.json",
        cn: "language/cn.json"
    };

    let currentLanguage = 'en'; // Default language
    let translationData = {}; // To store the translation data

    function loadLanguage(lang) {
        fetch(translations[lang])
            .then(response => response.json())
            .then(data => {
                translationData = data;
                document.querySelectorAll('[data-translate]').forEach(el => {
                    const key = el.getAttribute('data-translate');
                    if (data[key]) {
                        el.innerText = data[key];
                    }
                });
                updateCarNames(); // Update car names based on the selected language
            });
    }

    document.querySelectorAll('.language-options a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const lang = this.getAttribute('href').substring(1);
            currentLanguage = lang;
            loadLanguage(lang);
        });
    });

    // Load the default language
    loadLanguage(currentLanguage);

    // List of cars with details and image paths
    const cars = [
        { id: 1, name: 'wuling yangguang', price: 19700, dimensions: '4985/1800/1975', power: '60 kW', torque: 220, seat: '5', battery: '300 km', wheelbase: 3050, frontTrack: '1566 mm', rearTrack: '1566 mm', cargoSpace: 6500, imageFiles: ['五菱杨光.png'] },
        { id: 2, name: 'wuling xingguang', price: 17600, dimensions: '4835/1860/1515', power: '150 kW', motorPower: '204 HP', torque: 130, engine: '1.5L 106 HP', wheelbase: 3050, frontTrack: 1610, rearTrack: 1620, batteryLife: '1100 km', imageFiles: ['星光.jpg','星光(2).jpg','星光(3).jpg','星光(4).jpg','星光(5).jpg','星光(6).jpg','星光(7).jpg','星光(8).jpg','星光(9).jpg','星光(10).jpg','星光(11).jpg','星光(12).jpg','星光(13).jpg','星光(14).jpg','星光(15).jpg','星光(16).jpg'] },
        { id: 3, name: 'haval xiaolong', price: 22603, dimensions: '4600/1877/1675', power: '185 kW', torque: 375, engine: '1.5L 101 HP', wheelbase: 2710, frontTrack: 1583, rearTrack: 1587, fuelCapacity: 45, batteryLife: '1100 km', imageFiles: ['哈弗枭龙.jpg'] },
        { id: 4, name: 'haval dragon', price: 22603, dimensions: '4600/1877/1675', power: '185 kW', torque: 375, engine: '1.5L 101 HP', wheelbase: 2710, frontTrack: 1583, rearTrack: 1587, fuelCapacity: 45, batteryLife: '1100 km', imageFiles: ['哈弗猛龙.jpg'] },
        { id: 5, name: 'wuling rongguang', price: 16700, dimensions: '4490/1615/1900', power: '73 kW', torque: 136, engine: '1.5L 102 HP', wheelbase: 3050, frontTrack: 1386, rearTrack: 1408, fuelCapacity: 45, cargoSpace: 4500, imageFiles: ['荣光加长封窗.jpg'] },
        { id: 6, name: 'wuling li l7', price: 53800, dimensions: '5050/1995/1750', power: '330 kW', torque: 620, engine: '154 HP', wheelbase: 3005, frontTrack: 1725, rearTrack: 1741, combinedRange: '1185 km', pureElectricRange: '240 km', imageFiles: ['理想L7.jpg'] },
        { id: 7, name: 'wuling rongguang new truck extended double row double rear wheels', price: 19100, dimensions: '2600/1770/360', power: '100 kW', torque: 192, engine: '2.0L 136 HP', wheelbase: 3350, frontTrack: 1519, rearTrack: 1458, fuelCapacity: 50, cargoWeight: '1500 kg', imageFiles: ['荣光新卡加长双排双后轮.jpg'] },
        { id: 8, name: 'wuling rongguang new truck extended double row double container', price: 18900, dimensions: '3280/360', power: '100 kW', torque: 192, engine: '2.0L 136 HP', wheelbase: 3350, frontTrack: 1519, rearTrack: 1458, fuelCapacity: 50, cargoSpace: 9200, imageFiles: ['荣光新卡加长双排双层货柜.jpg','荣光新卡加长双排双层货柜(2).jpg','荣光新卡加长双排双层货柜(3).jpg','荣光新卡加长双排双层货柜(4).jpg','荣光新卡加长双排双层货柜(5).jpg'] },
        { id: 9, name: 'wuling sunshine', price: 13800, dimensions: '3797/1510/1820', power: '75 kW', torque: 136, engine: '1.5L 102 HP', wheelbase: 2500, frontTrack: 1519, rearTrack: 1290, fuelCapacity: 38, seat: '7', imageFiles: ['之光.jpg'] },
        { id: 10, name: 'wuling honggong s', price: 16200, dimensions: '4515/1725/1790', power: '73 kW', torque: 140, engine: '1.5L 99 HP', wheelbase: 2850, frontTrack: 1485, rearTrack: 1500, fuelCapacity: 50, seat: '7', imageFiles: ['新宏光s.jpg'] },
        { id: 11, name: 'wuling rongguang mini truck', price: 13800, dimensions: '2710/1520/360', power: '75 kW', torque: 136, engine: '1.5L 102 HP', wheelbase: 3050, frontTrack: 1378, rearTrack: 1408, fuelCapacity: 45, cargoWeight: '1200 kg', imageFiles: ['荣光小卡.jpg'] },
        { id: 12, name: 'wuling dragon truck', price: 18900, dimensions: '2710/1520/360', power: '75 kW', torque: 136, engine: '2.0L 136 HP', wheelbase: 3350, frontTrack: 1626, rearTrack: 1538, fuelCapacity: 50, cargoWeight: '2500 kg', imageFiles: ['龙卡.jpg','龙卡(2).jpg','龙卡(3).jpg','龙卡(4).jpg','龙卡(5).jpg','龙卡(6).jpg','龙卡(7).jpg',] },
        { id: 13, name: 'wuling rongguang new truck double row 2.0l version', price: 17600, dimensions: '2450/1630/360', power: '100 kW', torque: 192, engine: '2.0L 136 HP', wheelbase: 3350, frontTrack: 1519, rearTrack: 1519, fuelCapacity: 50, cargoWeight: '1500 kg', imageFiles: ['荣光新卡双排2.0 L.jpg','荣光新卡双排2.0 L(2).jpg','荣光新卡双排2.0 L(3).jpg','荣光新卡双排2.0 L(4).jpg','荣光新卡双排2.0 L(5).jpg','荣光新卡双排2.0 L(6).jpg',] },
        { id: 14, name: 'wuling li l9', price: 61775, dimensions: '5218/1998/1800', power: '330 kW', torque: 620, engine: '154 HP', wheelbase: 3105, frontTrack: 1725, rearTrack: 1741, combinedRange: '1176 km', pureElectricRange: '235 km', imageFiles: ['理想L7.jpg'] },
        { id: 15, name: 'wuling rongguang new mini truck', price: 14700, dimensions: '3150/1630/360', power: '75 kW', torque: 136, engine: '1.5L 102 HP', wheelbase: 3350, frontTrack: 1519, rearTrack: 1519, fuelCapacity: 50, cargoWeight: '1500 kg', imageFiles: ['新卡单排.jpg','新卡单排(2).jpg','新卡单排(3).jpg','新卡单排(4).jpg','新卡单排(5).jpg','新卡单排(6).jpg','新卡单排(7).jpg',] },
        { id: 16, name: 'wuling rongguang new truck extended double row double rear wheels', price: 18400, dimensions: '3300/1650/360', power: '100 kW', torque: 192, engine: '2.0L 136 HP', wheelbase: 3350, frontTrack: 1519, rearTrack: 1458, fuelCapacity: 50, cargoWeight: '1800 kg', imageFiles: ['荣光新卡加长双排双后轮.jpg','荣光新卡加长单排双后轮(2).jpg','荣光新卡加长单排双后轮(3).jpg','荣光新卡加长单排双后轮(4).jpg','荣光新卡加长单排双后轮(5).jpg','荣光新卡加长单排双后轮(6).jpg','荣光新卡加长单排双后轮(7).jpg',] },
        { id: 17, name: 'wuling rongguang new truck with cage', price: 18700, dimensions: '3300/1770/1625', power: '100 kW', torque: 192, engine: '2.0L 136 HP', wheelbase: 3350, frontTrack: 1519, rearTrack: 1458, fuelCapacity: 50, cargoSpace: 9200, imageFiles: ['荣光单排加强仓栅双后轮.jpg','荣光单排加强仓栅双后轮(2).jpg','荣光单排加强仓栅双后轮(3).jpg',] },
        { id: 18, name: 'wuling hongguang v', price: 14200, dimensions: '4425/1670/1490', power: '73 kW', torque: 140, engine: '1.5L 99 HP', wheelbase: 2850, frontTrack: 1420, rearTrack: 1440, fuelCapacity: 45, cargoSpace: 4300, imageFiles: ['宏光V封窗.jpg'] },
        { id: 19, name: 'wuling JiXing', price: 61775, dimensions: '4606/1859/2482', power: '165 kW', torque: 330, engine: '154 HP', wheelbase: 2735, frontTrack: 1602, rearTrack: 1601, combinedRange: '1176 km', pureElectricRange: '480 km', imageFiles: ['五菱级星.png'] },
        { id: 20, name: 'wuling Bingo', price: 61775, dimensions: '4090/1720/1575', power: '75 kW', torque: 180, speedLimit: '140 HP', wheelbase: 2610, frontTrack: 1492, rearTrack: 1485, combinedRange: '401 km', pureElectricRange: '480 km', imageFiles: ['bingoPlus.jpg','bingoPlus(2).jpg','bingoPlus(3).jpg',] }
    ];
    let currentImageIndex = 0;
    
    // Function to update the car image dynamically
    function updateCarImage(carDetail) {
        const carImageElement = document.getElementById('car-image');
        carImageElement.src = `images/${carDetail.imageFiles[currentImageIndex]}`;
    }

    // Function to change the displayed car image
    function changeCarImage(carDetail, direction) {
        currentImageIndex += direction;
    
        // Ensure the image index wraps around
        if (currentImageIndex < 0) {
            currentImageIndex = carDetail.imageFiles.length - 1; // Loop to the last image
        } else if (currentImageIndex >= carDetail.imageFiles.length) {
            currentImageIndex = 0; // Loop back to the first image
        }
    
        updateCarImage(carDetail);
    }

    // Populate the car list on cars.html
    const carListElement = document.getElementById('car-list');
    if (carListElement) {
        cars.forEach(car => {
            const carItem = document.createElement('div');
            carItem.classList.add('car-item');
            carItem.innerHTML = `
                <img src="images/${car.imageFiles[0]}" alt="${car.name}">
                <h2>${translationData[car.name] || car.name}</h2>
                <p><span data-translate="price">Price</span>: $<span>${car.price}</span></p>
                <a href="car.html?id=${car.id}" class="btn" data-translate="details">Details</a>
            `;
            carListElement.appendChild(carItem);
        });
    }
    function sortCarsBy(attribute) {
        if (attribute === 'price') {
            cars.sort((a, b) => a.price - b.price);
        } else if (attribute === 'name') {
            cars.sort((a, b) => a.name.localeCompare(b.name));
        }
        displayCars(); // Re-render cars after sorting
    }

    // Event listener for sort dropdown
    const sortDropdown = document.getElementById('sort-cars');
    if (sortDropdown) {
        sortDropdown.addEventListener('change', function () {
            sortCarsBy(this.value);
        });
    }

    // Update car names when the language is changed
    function updateCarNames() {
        document.querySelectorAll('.car-item h2').forEach((h2, index) => {
            h2.innerText = translationData[cars[index].name] || cars[index].name;
        });
    }

    // Populate the car details on car.html
    const urlParams = new URLSearchParams(window.location.search);
    const carId = urlParams.get('id');
    if (carId) {
        const carDetail = cars.find(car => car.id === parseInt(carId));

        document.getElementById('car-name').innerText = translationData[carDetail.name] || carDetail.name;
        document.getElementById('car-image').src = carDetail.image;
        document.getElementById('car-price').innerText = carDetail.price;
        document.getElementById('car-dimensions').innerText = carDetail.dimensions;
        document.getElementById('car-power').innerText = carDetail.power;
        document.getElementById('car-torque').innerText = carDetail.torque;
        if (carDetail.engine) {
            document.getElementById('car-engine').innerText = carDetail.engine;
        } else if (carDetail.motorPower) {
            document.getElementById('car-engine').innerText = `${carDetail.motorPower} (Motor Power)`;
        }
        document.getElementById('car-wheelbase').innerText = carDetail.wheelbase;
        document.getElementById('car-front-track').innerText = carDetail.frontTrack;
        document.getElementById('car-rear-track').innerText = carDetail.rearTrack;
        if (carDetail.fuelCapacity) {
            document.getElementById('car-fuel-capacity').innerText = carDetail.fuelCapacity;
        }
        if (carDetail.cargoSpace) {
            document.getElementById('car-cargo-space').innerText = carDetail.cargoSpace;
        } else if (carDetail.cargoWeight) {
            document.getElementById('car-cargo-space').innerText = `${carDetail.cargoWeight} (Cargo Weight)`;
        }
        if (carDetail.battery) {
            document.getElementById('car-battery').innerText = carDetail.battery;
        }
        if (carDetail.seat) {
            document.getElementById('car-seat').innerText = carDetail.seat;
        }
        updateCarImage(carDetail);
        document.getElementById('next-image').addEventListener('click', () => changeCarImage(carDetail, 1));
        document.getElementById('prev-image').addEventListener('click', () => changeCarImage(carDetail, -1));
    }

    // Function to update car names in the car list after loading a language
    function updateCarNames() {
        document.querySelectorAll('.car-item h2').forEach((h2, index) => {
            h2.innerText = translationData[cars[index].name] || cars[index].name;
        });
    }
    displayCars();
});
