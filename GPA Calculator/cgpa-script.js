//FIRSTLY 
//These are the systems and fomulas that will be used in this script

/* GRADING SYSTEM
70 - 100 = A
60 - 69 = B
50 - 59 = C
45 - 49 = D
40 - 44 = E
00 - 39 = F
*/

/*  REMARK SYSTEM 
A - Excellent
B - Very Good
C - Good
D - Satisfactory
E - Pass
F - Fail 
*/

//GP
/* 
A - 5.0
B - 4.0
C - 3.0
D - 2.0
E - 1.0
F - 0.0

//GP UNITS FORMULA
(Grade Point × Unit)

//GPA 
Total (Grade Point × Unit) / Total Units

//CGPA 
Total GPA/number of GPA
*/

//ERROR
/* from the previous script was that I was just dsiplaying the grade and gpa and I was not putting them in the Database i.i our array of objects so when time came to add all the gpu and divide them by the gp they were never values */


//DATABASE 
//The Database stores the students results per year 

//Incase the student is in year1 first semester the values for second semester will be stored as 0 


//GPA Calculator
function gpaCalculator(studentResult){
    //GRADING

    /* Step 1: 
        Looping over the the array of objects and creating new properties
        If the condition is met

        Using - `else..if`
        forflexibility
    */

    //forEach does not work here because it does not alter the array
    //to mutate you do it inside the forEach with the use of array parameter[index parameter]

    /* to explain further the forEach() method does not naturally change the 
        orignal array 

        it has 3 parameters 
        -counter
        -index
        -array

    */   

    studentResult.forEach((result) => {
        /* if serves as Error Handling for score values of:
            < 0
            > 100
            empty
            NaN
            null
        */

        if(result.score < 0 || result.score > 100 || result.score == '' || result.score == null || result.score == NaN){
        console.log('Invalid Input');
        }
        else if(result.score >= 70){
            result.grade = 'A';
            result.gradePoint = 5;
            result.gradePointUnit = result.gradePoint * result.unit;
        }
        else if(result.score >= 60){
            result.grade = 'B';
            result.gradePoint = 4;
            result.gradePointUnit = result.gradePoint * result.unit;
        }
        else if(result.score >= 50){
            result.grade = 'C';
            result.gradePoint = 3;
            result.gradePointUnit = result.gradePoint * result.unit;
        }
        else if(result.score >= 45){
            result.grade = 'D';
            result.gradePoint = 2;
            result.gradePointUnit = result.gradePoint * result.unit;
        }
        else if(result.score >= 40){
            result.grade = 'E';
            result.gradePoint = 1;
            result.gradePointUnit = result.gradePoint * result.unit;
        }
        else if(result.score >= 0){
            result.grade = 'F';
            result.gradePoint = 0;
            result.gradePointUnit = result.gradePoint * result.unit;
        }
        else{
            console.log('Error 422: Check to Database');
        }
        /* When this control flow is a new property grade will be created
        and assigned a value(GRADE) based on the condition(SCORE)*/
    });


    /* Step 2: 
        Calculate the GPA
        i.e sum total of GPU / sum total of units
    */

    // TOTAL UNITS
    let totalUnits = studentResult.reduce((sum,item) =>{
        return sum + item.unit
    },0);

    //TOTAL GRADE POINTS
    let totalGP = studentResult.reduce((sum,item) =>{
        return sum + item.gradePointUnit;
    },0)


    //GPA = sum total of (Grade Points * Units) / sum total of units
    let gpa = totalGP / totalUnits;
    console.log(gpa);

}


//Year One Database
let studentResultYearOne = [
    { course: 'Introduction to Computer Science', score: 84, unit: 3 },  
    { course: 'Mathematics for Computing', score: 72, unit: 3 },         
    { course: 'Introduction to Programming', score: 67, unit: 4 },       
    { course: 'Communication Skills', score: 59, unit: 2 },              
    { course: 'Computer Hardware Fundamentals', score: 76, unit: 3 },    
    { course: 'Use of Library and Study Skills', score: 88, unit: 1 }
];

gpaCalculator(studentResultYearOne)



