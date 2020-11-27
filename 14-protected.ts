export class Animal{
    protected age: number;
    legs: number;
    name: string;

constructor(age:number, legs: number, name: string){
    this.age = age;
    this.legs = legs;
    this.name=name;
}

}

// child
export class Cat extends Animal{
    constructor(data: {age: number, legs: number, name: string}){
        super(data.age, data.legs, data.name);
    }

    get birthday(): number{
        return this.age + 1;
    }

}

const cat = new Cat({age: 19, legs: 4, name:'Baby'});
// Property 'age' is protected and only accessible within class 'Animal' and its subclasses.
cat.age;

// shape of the object
// Class 'Dog' incorrectly implements class 'Animal'. Did you mean to extend 'Animal' and inherit its members as a subclass?
//   Property 'age' is protected but type 'Dog' is not a class derived from 'Animal'.
export class Dog implements Animal {
    age:number;
    legs:number;
    name: string;
}