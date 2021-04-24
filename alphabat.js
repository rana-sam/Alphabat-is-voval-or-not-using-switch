let num=prompt("Enter any Alphabat");
let num1=num.charCodeAt(0);
if( (num1>=65 && num1<=90)||(num1>=97 && num1<=122)) {
switch (true) {
    case (num==='a' || num=='A' || num=='e' || num=='E' || num=='i' || num=='I' || num=='o' || num=='O' || num=='u' || num=='U'  ):
        console.log(num+" is voval");
        break;

    default:
        console.log(num+" is consonent");
        break;
}
}
else{
    console.log("Enter valid input:");
}