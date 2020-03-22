const student = [
    {id: 12, name: 'Omor Sunny'},
    {id: 41, name: 'Deepjol'},
    {id: 52, name: 'Omit Hasan'},
    {id: 36, name: 'Shabnur'},
    {id: 61, name: 'mannaa'}
];

const studentName = [];

for(let i = 0; i < student.length; i++){
    const element = student[i];
    const name = element.name;
    studentName.push(name);

}
//console.log(studentName);


                            /**Easy way (using map) */

const name = student.map(s => s.name); //[kotha: create an array named 'name' using the name of the students from the array named 'student'.]

const ids = student.map(s => s.id); //[amar bhasha: student nam er array theke id gula niye amare ekta notun deikha array banai dao bappp!!!]

const bigger = student.filter(s => s.id>50);

const biggerOne = student.find(s => s.id>30);

const hero = student.find(s => s.id=51);

console.log(hero);
