class Shape {
    constructor(sides = []){
        this.sides = sides
    }
    perimeter = () => this.sides.length > 0 ? this.sides.reduce((acc, val) => acc + val, 0) : 0
}

//console.log(new Shape([5, 10]).perimeter());  // 15
//console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
//console.log(new Shape().perimeter()); // 0

class Rectangle extends Shape{
    constructor(length = 0, width = 0){
        super([length, width, length, width]);
        this.length = length
        this.width = width
    }
    area = () => (this.length * this.width)
}

//console.log(new Rectangle(4, 4).perimeter());  // 16
//console.log(new Rectangle(4, 4).area());  // 16
//console.log(new Rectangle(5, 5).perimeter()); // 20
//console.log(new Rectangle(5, 5).area()); // 25
//console.log(new Rectangle().perimeter()); // 0
//console.log(new Rectangle().area()); // 0

class Triangle extends Shape{
    constructor(sideA = 0, sideB = 0, sideC = 0){
        super([sideA, sideB, sideC]);
        this.sideA = sideA
        this.sideB = sideB
        this.sideC = sideC
    }
    area = () => {
        const s = ((this.sideA + this.sideB + this.sideC) / 2)
        const area = Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC))
        return area
    }
}

//console.log(new Triangle(3, 4, 5).perimeter());  // 12
//console.log(new Triangle(3, 4, 5).area());  // 6
//console.log(new Triangle().perimeter()); // 0
//console.log(new Triangle().area()); // 0


// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];


for(const arr of data){
    switch(arr.length){
        case 2:
            if (arr[0] === arr[1]){
                const square = new Rectangle(arr[0], arr[1])
                console.log(`Square with sides ${arr[0]},${arr[1]} has perimeter of ${square.perimeter()} and area of ${square.area()}`)
            } else{
                const rectangle = new Rectangle(arr[0], arr[1])
                console.log(`Rectangle with sides ${arr[0]},${arr[1]} has perimeter of ${rectangle.perimeter()} and area of ${rectangle.area()}`)
            }
            break;
        case 3:
            const triangle = new Triangle(arr[0], arr[1], arr[2])
            console.log(`Triangle with sides ${arr[0]},${arr[1]},${arr[2]} has perimeter of ${triangle.perimeter()} and area of ${triangle.area()}`)
            break;
        default:
            console.log(`Shape with ${arr.length} side(s) unsupported`)

    }       
}

//   :)
// :) :)