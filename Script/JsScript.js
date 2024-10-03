const ShowResult=()=>{
   
    let arr1=[10,20,30,40,50];
    arr1.push(60);
    arr1.pop();
    arr1.pop();
    let arr2;
    arr2=[...arr1];

    //  let msg=document.querySelector("#divMsg");
   // msg.innerHTML=arr2;


   // GetResult("Sunita","Female",93,47,39,28);

   let arr3=[93,43,29,10,100];
    GetResult("Ajit Kumar","Male",...arr3);

}

const GetResult=(StudentName,Gender,...marks)=>{

    let x=0;
  
    marks.forEach((n)=>{
            x=x+n;
    });

   const msg=document.querySelector("#divMsg");
   msg.innerHTML=`Student Name : ${StudentName} and Gender : ${Gender} and Total Marks : ${x}`;

}

const ShowSpreadResult=()=>{

    let arr1=[90,37,23,28,39,99];
    let arr2;
    let arr3;
    arr2=arr1;
    arr3=[...arr1];
    arr1.pop();
    arr1.pop();
    arr1.pop();
    arr1.push(800);


/*
    if(arr1==arr2){
        alert("true");
    }
    else
    {
        alert("false");
    }
*/

    let [a,b,c]=[...arr1];

    const msg=document.querySelector("#divMsg");
    //msg.innerHTML=`Array arr1 = ${arr1} .Value of a = ${a} , b=${b} ,c=${c}`;
msg.innerHTML=`arr1 = ${arr1} and arr2 =${arr2} and arr3=${arr3}`;

SpreadOperatorWithObjects();

}

const SpreadOperatorWithObjects=()=>{
    let obj ={
        name:"Sanjay",
        designation:"Developer"
    }
    let obj2={
        JobType:"Coders",
        NoOfExperience:5
    }

    let x=obj.name;
    //let obj3={...obj2,...obj};
    let obj3={...obj2,x};


    console.log(obj3);


}