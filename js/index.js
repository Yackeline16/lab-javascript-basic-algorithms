// Iteration 1: Names and Input

let hacker1 = "Miguel";
console.log(`the driver's name is ${hacker1}`);

let hacker2 = "Yackeline";
console.log(`The navigator name is ${hacker2}`)

/*Iteration 2: Conditionals*/
if (hacker1.length > hacker2.lenght) {
    console.log(`The driver's name is the longest, it has ${hacker1.length}`);
}

else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigators has the longest name, it has ${hacker2.length}characaters`);
}
else  {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

 /*Iteration 3: Loops hecho con la ayuda de clase*/
 let newName ="";
for (let i = hacker1; i > hacker1.length; i++) {
    newName += `&{hacker1[i].toUpperCase}`
    console.log(newName);
}
for (let i= hacker1.length -1; i >= 0; i--) {
    newName += &{hacker1[i].toUpperCase}
    console.log(newName);}

    /*
    let firstNameComefirst= (hacker1 > hacker2)
    if(firstNameComefirst){
        console.log("The driver's name goes firts");
        else if (hacker1>hacker2) { console.log("Yo, the navigator goes first definetely.")
    }
    else (hacker1 === hacker2){console.log ("What! You both have the same name?)} 
    }*/