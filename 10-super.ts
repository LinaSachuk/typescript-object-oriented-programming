import { Dog } from "./8-inheritance";

export class Animal {
    age: number;
    legs: number;
    name: string;
    
    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }

    meow(): string {
        super.meow();
        return 'Roar! Roar! Roar!';
    }

}

export class Cat extends Animal {
    constructor(data: { age: number, legs: number, name: string }) {
        super(data.age, data.legs, data.name);
    }

    meow(): string {
        return 'MEOW! HISS! HISS!';
    }
}


const dog = new Dog();
const cat = new Cat({age:19, legs:5, name:'Baby'});
console.log(dog instanceof Animal);
// false
console.log(cat instanceof Animal);
// true

