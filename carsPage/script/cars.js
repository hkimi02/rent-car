let cars = [{
        name: "audi",
        model: "X5",
        year: 2010,
        price: 50000,
        rented: false, //rented false , true mekreya
        photo: '../assets/x5_car.jpg'
    },
    {
        name: "punto",
        model: "X5",
        year: 2010,
        price: 50000,
        rented: false,
        photo: '../assets/x5_car.jpg'
    }, {
        name: "fox",
        model: "X5",
        year: 2010,
        price: 50000,
        rented: false,
        photo: '../assets/x5_car.jpg'
    }, {
        name: "BMW",
        model: "X5",
        year: 2010,
        price: 50000,
        rented: false,
        photo: '../assets/x5_car.jpg'
    }, {
        name: "BMW",
        model: "X5",
        year: 2010,
        price: 50000,
        rented: false,
        photo: '../assets/x5_car.jpg'
    }, {
        name: "BMW",
        model: "X5",
        year: 2010,
        price: 50000,
        rented: false,
        photo: '../assets/x5_car.jpg'
    }, {
        name: "BMW",
        model: "X5",
        year: 2010,
        price: 50000,
        rented: false,
        photo: '../assets/x5_car.jpg'
    }, {
        name: "BMW",
        model: "X5",
        year: 2010,
        price: 50000,
        rented: false,
        photo: '../assets/x5_car.jpg'
    }, {
        name: "BMW",
        model: "X5",
        year: 2010,
        price: 50000,
        rented: true,
        photo: '../assets/x5_car.jpg'
    },
]
let space = document.getElementById('cars');
let length = cars.length;
let i = 0;
for (i = 0; i < length; i++) {
    space.innerHTML += `
    <div class="car">
    <div class="car-image">
        <img src="${cars[i].photo}" alt="" width="300px" width="300px">
    </div>
    <div class="card-body">
        <h3>${cars[i].name + ' '+cars[i].model }</h3>
        <h3>${cars[i].price}</h3>
        <h3>${cars[i].year}</h3>
        <h3>${cars[i].rented==false ? 'not rented' : 'rented'}</h3>
    </div>
    <div class="card-footer">
        <button class="btn-rent">RENT</button>
    </div>
</div>
    `;
}