alert("salam");
//tek tek elementleri kvadrata yukseldib yeni arraya elave eledim

function Sum() {
    let arr=Array.from(arguments)
    let array=[]
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
     if (element%2==0) {
         array.push(element*element)

    } 
    
    
}console.log(array) 

  //array elmentlerin topla
  let sum=0;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum+=element;
    
}
return sum
}

//3 ve 7 ye bolunme
console.log(Sum(1,2,3,4))


 let Divide = n=> 
    n%3==0 && n%7==0




console.log(Divide(21))