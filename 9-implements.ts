// Base/ Parent Class
export class Animal {
    age: number;
    legs: number;
    name: string;

    constructor(age: number, legs:number, name:string){
        this.age = age;
        this.legs = age;
        this.name = name;
    }

}

// Derived  / Child Class / Same Shape

export class Dog implements Animal {
    age: number;
    legs: number;
    name: string;

    
    woof(): string {
        return 'Woof! Woof!';
    }

}

const dog = new Dog(2,4, 'Gator');
dog.name;
dog.woof();


export class Cat extends Animal {

    meow(): string {
        return 'Meow! Meow!';
    }

}

const cat = new Cat(19, 5, 'Baby');
cat.age;
cat.meow();