$(document).ready(function(){
   let text = "i am wevdevloper";
   let index = 0;
    setInterval(function(){
   
  
    let b = text.slice(0,index++);
  if(index >= text.length){
    // clearInterval(setinterval);
    index=0

  }
  let a =  $(".animation").text(b);
    
   },1000);


   let msg = ['hello1','i am wevdevelopment',"hello"];
  
   let count = 0;

 let counter = 0;


   setInterval(function(){

 let array  = msg[count];


 let anim = array.slice(0,counter++);
 let text3= $(".text").text();


 $(".text").text(anim);

if(text3.length==array.length){
    count++;
    counter=0;

}

if(msg.length==count){
   count=0;

}

  


   },1000)



})



