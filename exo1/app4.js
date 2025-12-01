let questionArray=[];
let answerArray=[];
let index=0;
document.querySelectorAll(".plus").forEach((data)=>{
    data.addEventListener("click",toggle);
    data.index=index;
    questionArray.push(data);
    index +=1;
});
index=0;
document.querySelectorAll(".artQuest").forEach((data)=>{
    data.index=index;
    answerArray.push(data);
    index +=1;
});
console.log("tableau",questionArray,answerArray);
function toggle(e){
    e.preventDefault();
    let event=e.target;
    if(event.innerText==="+"){
        event.innerText="-";
        event.style.backgroundColor="black";
        answerArray[event.index].classList.remove("hidden");
    }else{
        event.innerText="+";
        event.style.backgroundColor="blueviolet";
        answerArray[event.index].classList.add("hidden");
        
    }
    console.log(event);
}