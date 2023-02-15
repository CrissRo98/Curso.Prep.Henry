let crono = [2, 5, 1, 3, 9, 7];
// let artemisa = [0];
//   for(let i = 0; i < crono.length; i++){
//     if(crono[i] > artemisa[0]){
//       artemisa[0] = crono[i];
//     }
//   } //return artemisa;

//   console.log(artemisa);
let res = [];
for(let i = 0; i < crono.length -1; i++){
    if(crono[i] > crono[i+1]){
        res = i;
    }
}
console.log(res)