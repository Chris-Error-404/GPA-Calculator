#Understanding The Script

### What is it?
This script calculates a students GPA.

---

### Where can i run it?
You can easily run it on your browser console
**Note:** It is a console only script no `HTML_DOM` manipulation.

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

