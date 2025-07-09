# Understanding The Script

### What is it?
This script calculates a students GPA.

--

### Where can i run it?
You can easily run it on your browser console
**Note:** It is a console only script no `HTML-DOM` manipulation.

---

### Where are the results stored?
The results are stored in an object of arrays.

---

##### The example used in the script

```js
let studentResultYearOne = [
    { course: 'Introduction to Computer Science', score: 84, unit: 3 },  
    { course: 'Mathematics for Computing', score: 72, unit: 3 },         
    { course: 'Introduction to Programming', score: 67, unit: 4 },       
    { course: 'Communication Skills', score: 59, unit: 2 },              
    { course: 'Computer Hardware Fundamentals', score: 76, unit: 3 },    
    { course: 'Use of Library and Study Skills', score: 88, unit: 1 }
];
```

---

### What are the Limitations (Possible Error)?
The array of objects ==MUST== have an object with these properties 

- `course` - The name of the course/subject
- `score` - The ==numerical== score the student got on the subject 
- `unit` - The number of units of the course/subject

---

### What happens if `course` `score` or `unit` isn't in the array of objects?
It will most likely throw the error `Invalid Input`

### How Does the Grading Work?
| **Score Range** | **Letter Grade** | **GPA (Grade Point)** | **Remark**         |
|-----------------|------------------|------------------------|--------------------|
| 70 – 100        | A                | 5.0                    | Excellent          |
| 60 – 69         | B                | 4.0                    | Very Good          |
| 50 – 59         | C                | 3.0                    | Good               |
| 45 – 49         | D                | 2.0                    | Fair               |
| 40 – 44         | E                | 1.0                    | Pass               |
| 0 – 39          | F                | 0.0                    | Fail               |

---

#### GPA Formula

```
GPA = (Σ (Grade Point × Course Unit)) / Σ (Total Course Units)
```

Where:
- Grade Point is based on the letter grade.
- Course Unit is the unit assigned to each course.
- Σ means "sum of".

---

## What does it work? (Technical Overview)
The `gpaCalculator()` is mainly one single function
Inside the function we have 
- `else...if` Statement
- `.reduce()` Method

---

##### Why `else...if`** ?
Because it a more flexible control flow

---

##### What does `.reduce()` do?
`reduce()` is used to convert an array into a single value
here it is used twice 
- for calculating all the sum total of `unit`s
- for calculating the sum total of `GradepointUnits` i.e the result from multiplint `gradePoint` by `unit`

---

### How does the fuction `gpaCalculator` work with the control flow?

#### The parameter
The parameter here is the array of objects

#### What happens when the function is called?

##### Flow 1
It uses `forEach()` to loop over the array of obejcts and mutates/add a new property to the array element it is looping over.

It creates a new property

- `grade`
- `gradepoint`
- `gradePointUnit`

based on the conditions set

##### Flow 2
To calculate the total `unit`s it uses `reduce()` to convert/add all the `unit` properties into a single value i.e. the sum total of units


##### Flow 3
To calculate the total `gradePoint`s it uses `reduce()` to convert/add all the `gradePoint` properties into a single value i.e. the sum total of grade points refered to as `gradePointUnits` in the script (Yes not very creative)

##### Flow 4
Creation of the array of objects where the students info is stored and passing it into the function `gpaCalculator(studentResultYearOne)` as a parameter.

