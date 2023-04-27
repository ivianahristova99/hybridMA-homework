// //zad 1

// function zad1(array){
//     let sum=0;
//     for (const value of array) {
//         sum+=Number(value);
//     }
//     console.log(sum);
// }

// zad1(['2','3','4']);

// //zad 2

// function zad2(array){
//     let sum=0;
//     let vat=0;
//     let total=0;
//     for (const value of array) {
//         sum+=Number(value);
//     }
//     vat=Number(sum)*0.2;
//     total=vat+sum;
//     console.log(`Sumata e ${sum} lv., DDS e ${vat} lv i krayno saldo e ${total} lv.`);
// }

// zad2(['2.3','2.2','1','6.6']);

// //zad 3

// function zad3([word, letter]){
//     let count=0;
//     for(let i=0;i<word.length;i++){
//         if(word.charAt(i)==letter){
//             count++;
//         }
//     }
//     console.log(count);
// }

// zad3(['apple','p']);

// //zad 4

// function zad4([w,h,W,H]){
//     let shape1 = Number(w)* Number(h);
//     let shape2 = Number(W) * Number(H);
//     let common=Math.min(Number(w), Number(W))*Math.min(Number(h),Number(H));
//     let result=shape1+shape2-common;
//     console.log(result);
// }

// zad4(['2','4','5','3']);

// //zad 5

// function zad5(year){
//     let cond1=year%100!=0 && year%4==0;
//     let cond2=year%400==0;
//     if(cond1||cond2){
//         console.log("leap year");
//     }
//     else{
//         console.log("not leap year");
//     }
// }

// zad5(2000);


// //zad 6

// function zad6(n){
//     let sequence='';
//     for (let i = 1; i <= n; i++) {
//         sequence+=i;
//     }
//     console.log(sequence);
// }

// zad6(7);

// //zad 7
// function zad7([x1,y1,x2,y2]){
//     let v1 = Math.pow(Number(x2)-Number(x1),2);
//     let v2 = Math.pow(Number(y2)-Number(y1),2);
//     let dist = Math.sqrt(v1+v2);
//     console.log(dist);
// }

// zad7([1,2,4,6]);

// //zad 8
// function zad8(bottles,capacity){
//     let res = Math.ceil(bottles/capacity);
//     console.log(res);
// }
// zad8(20,5);

// //zad 9
// function zad9(a,b,c){
//     if(a+b<=c || a+c<=b || b+c<=a || a<=0 || b<=0 || c<=0){
//         console.log("such triangle doesn't exist!");
//     }
//     else{
//         let p=(a+b+c)/2;
//         let S=Math.sqrt(p*(p-a)*(p-b)*(p-c));
//         console.log(S);
//     }
// }
// zad9(1,2,3);
// zad9(3,4,5);

// //zad 10
// function zad10([r, h]){
//     let Pi=Math.PI;
//     let V = (Pi*r*r*h)/3;
//     let S = Pi*r*r;
//     let B = Pi*r*Math.sqrt(r*r + h*h);
//     let S1 = S+B;
//     console.log(`Volume: ${V} \nSurface: ${S1}`);
// }

// zad10([3,10])

// //zad 11
// function zad11(x){
//     if(x%1!=0){
//         console.log("invalid");
//     }
//     else{
//         if(x%2==0){
//             console.log("even");
//         }
//         else{
//             console.log("odd");
//         }
//     }
// }

// zad11(1);
// zad11(-2);
// zad11(3.4);

// //zad 12

// function zad12(n){
//     if(n==0 || n==1){
//         console.log("slojno");
//     }
//     else if(n==2){
//         console.log("prosto");
//     }
//     let flag = true;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if(n%i==0){
//             flag=false;
//             break;
//         }
//     }
//     if(flag)
//         console.log("prosto");
//     else
//         console.log("slojno");
// }
// zad12(7);
// zad12(14);
// zad12(47);
// zad12(49);

// //zad 13
// function zad13([v1,v2,ts]){
//     let th = ts/3600.00;
//     let s1 = v1 * th;
//     let s2 = v2*th;
//     let distkm = Math.abs(s1-s2);
//     let distm = distkm *1000;
//     console.log(distm);
// }
// zad13([5,6,3600]);
// zad13([60,120,7200]);

// //zad14 

// function zad14([pr1, v1, pr2, v2, pr3, v3]){
//     let person = {
//         name: v1,
//         age: v2,
//         gender: v3,
//     };
//     console.log(person);
// }
// zad14(['name','Pesho','age','23','gender','male'])
// //zad15

// function zad15([a,b,c]){
//     console.log(Math.max(Number(a),Number(b),Number(c)));
// }
// zad15(['4','7','8']);

// //zad16
// function zad16([n1,n2,op]){
//     let x = Number(n1);
//     let y = Number(n2);
//     switch(op){
//         case '-':
//             console.log(x-y);
//             break;
//         case '*':
//             console.log(x*y);
//             break;
//         case '/':
//             console.log(x/y);
//             break;
//         case '+':
//         default:
//             console.log(x+y);
//             break;
//     }
// }
// zad16(['6','-4','&']);
// zad16(['18','-1','*']);

// //zad 17
// function zad17(s){
//     let sentence = s.replace(/[^\w\s]/gi, '');
// console.log(sentence);
//     let words = sentence.split(" ");
//     let res="";
//     for (const word of words) {
//         res+=word.toUpperCase() +", ";
//     }
//     console.log(res.substring(0,res.length-2));
// }
// zad17("Hi, how are you?");
// zad17("I am @alalala, very hungry &*so i am going to eat!");