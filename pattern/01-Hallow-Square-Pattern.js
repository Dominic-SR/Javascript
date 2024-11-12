let number = 5;
let string = '';

for(let i=1; i<=number; i++){
  for(let j=1; j<=number; j++){
 
  if(i===1 || i===number){
      string += "*";
   }

   if(j===1 || j===number){
    string += "*";
 }
  else{
      if(j===1 || j===number){
        string += "*";
      }
      else{
        string += ' '
      }
    }
  
 }
   string += '\n';
}

console.log(string)
