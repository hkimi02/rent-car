let cars = [{
        name: "audi",
        model: "X5",
        year: 2010,
        price: 50,
        rented: false,
        photo: '../assets/x5_car.jpg'
    },
    {
        name: "punto",
        model: "X5",
        year: 2010,
        price: 50,
        rented: false,
        photo: '../assets/x5_car.jpg'
    }, {
        name: "fox",
        model: "X5",
        year: 2010,
        price: 50,
        rented: false,
        photo: '../assets/x5_car.jpg'
    }, {
        name: "BMW",
        model: "X5",
        year: 2010,
        price: 50,
        rented: false,
        photo: '../assets/x5_car.jpg'
    }, {
        name: "BMW",
        model: "X5",
        year: 2010,
        price: 50,
        rented: false,
        photo: '../assets/x5_car.jpg'
    }, {
        name: "BMW",
        model: "X5",
        year: 2010,
        price: 50,
        rented: false,
        photo: '../assets/x5_car.jpg'
    }, {
        name: "BMW",
        model: "X5",
        year: 2010,
        price: 50,
        rented: false,
        photo: '../assets/x5_car.jpg'
    }, {
        name: "BMW",
        model: "X5",
        year: 2010,
        price: 50,
        rented: false,
        photo: '../assets/x5_car.jpg'
    }, {
        name: "BMW",
        model: "X5",
        year: 2010,
        price: 50,
        rented: true,
        photo: '../assets/x5_car.jpg'
    },
    {
        name: "BMW",
        model: "X5",
        year: 2010,
        price: 50,
        rented: true,
        photo: '../assets/x5_car.jpg'
    },
    {
        name: "BMW",
        model: "X5",
        year: 2010,
        price: 50,
        rented: true,
        photo: '../assets/x5_car.jpg'
    },
    {
        name: "BMW",
        model: "X5",
        year: 2010,
        price: 50,
        rented: true,
        photo: '../assets/x5_car.jpg'
    },
]

function rent() {
    let btns = document.querySelectorAll('.btn-rent');
    btns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (cars[index].rented == false) {
                cars[index].rented = true;
                btn.innerHTML = 'RENTED';
                btn.style.backgroundColor = 'red';
            } else {
                cars[index].rented = false;
                btn.innerHTML = 'RENT';
                btn.style.backgroundColor = '#41f1b6';
            }
        })
    })
}

function deleteCar() {
    let btns = document.querySelectorAll('.btn-delete');
    btns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            cars.splice(index, 1);
            let space = document.getElementById('cars');
            space.innerHTML = '';
            showCars();
        })
    })
}

function showCars() {
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
        <h3>${"car number : " + (i+1)}</h3>
        <h3>${cars[i].name + ' '+cars[i].model }</h3>
        <h3>${cars[i].price + ' TND/par jour'}</h3>
        <h3>${cars[i].year}</h3>
    </div>
    <div class="card-footer">
    <button class="btn-rent">RENT</button>
    <button class="btn-delete">delete</button>
    </div>
</div>`;
    }
}
showCars();
rent();
deleteCar();