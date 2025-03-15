let marks=[80, 90, 70, 85, 95, 60, 55, 75, 65, 45];

let total=0;
marks.forEach(mark=>total+=mark);
let avg=total/marks.length;

if(avg>=80) console.log("A+");
else if(avg>=70) console.log("A");
else if(avg>=60) console.log("A-");
else if(avg>=50) console.log("B");
else if(avg>=40) console.log("C");
else if(avg>=33) console.log("D");
else console.log("F");