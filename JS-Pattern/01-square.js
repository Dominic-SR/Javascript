// method-1
// let n=5;
// for(i=0; i<n; i++){
//     console.log("*".repeat(n));
// }

//method-2
let num=5;

for(i=1;i<=num;i++){
    let data=""
    for(j=1;j<=i;j++){
        data+= "*"
    }
    console.log("--->",data);    
}

