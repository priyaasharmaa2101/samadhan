//Find Highest marks from an array:
let marks=[87,89,99,98,95,92];
let highest =marks[0];
for(let i=1;i<marks.length;i++){
    if(marks[i]>highest){
        highest=marks[i];;
    }
}
console.log("Highest mark is:", highest);
