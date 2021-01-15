// @ts-check

const { add, subtract, divide, multiply } = require('./calculator')

/**
 * @file index.js is the root file for this eample app
 * @author Ken Okapra
 * @see <a href="https://www.youtube.com/watch?v=YK-GurROGIg">Documenting Your JavaScript | JSDoc Crash Course</a>
 * @see <a href="https://jsdoc.app/index.html">JSDoc Refernce</a>
 */

/**
 * Student Name
 * @type {string}
 */
const studentName = "john";

/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [98, 67, 48, 100, 97.7]

/**
 * Todo object
 * @type {{id: number|string, text: string}}
 */
const todo = {
          id: "klnljk",
          text: 'hello'
}

/**
 * Calculate tax
 * @param {number} amount - Total amount
 * @param {number} tax  - Tax percentage
 * @returns {string} - Total with a dollar sign
 */
const calculateTax = (amount, tax) => {
          return `$${amount + tax * amount}`
}

/**
 * A student 
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student Name
 * @property {string|number} [age] - Student Age (optional)
 * @property {boolean} isActive - Student status
 */
//this↑ will define Student object prototype object

/**
 * @type {Student}
 */
const student = {
          id: 1,
          name: "ken",
          age: "N/A",
          isActive: true
}


/**
 * Class to create a person object
 */
class Person{
          /**
           * 
           * @param {Object} personInfo - Information about the person
           */
          constructor(personInfo){
                    /**
                     * @property {string} name Persons name
                     */
                    this.name = personInfo.name;
                    /**
                     * @property {string} name Persons age
                     */
                    this.age = personInfo.age;
          }

          /**
           * @property {Function} greeting - A greeting with the name and age
           * @returns {void}
           */
          greeting(){
                    console.log(`Hello my name is ${this.name} and I'm ${this.age}`);
          }
}

/**
 * Person One
 * See {@link Person}
 */
const person1 = new Person({
          name: "john",
          age: 30
})
person1.greeting();

console.log(add(20, 30));