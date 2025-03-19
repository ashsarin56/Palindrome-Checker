const btn=document.querySelector("#check-btn");
const inp=document.querySelector("#text-input");
const out=document.querySelector("#result");
let a=inp.value;
function ispalindrome(s){
    for(let i=0;i<s.length;i++){
        let a=s[i];
        let b=s[s.length-i-1];
        if(a!=b)return false;
    }
    return true;
}

btn.addEventListener('click',function(){
    a=inp.value;
    let s="";
    for(let i=0;i<a.length;i++){
        let x=a[i].toLowerCase();
        if(x.charCodeAt(0)>=97 && x.charCodeAt(0)<=122){
            s+=x;
        }else if(i+1==a.length && x.charCodeAt(0)==46){
            s+=x;
        }
    }
    if(a==""){
        alert("Please input a value");
    }
    else { 
        if(ispalindrome(s) ){
             out.textContent=a+" is a palindrome"
         }
         else{
             out.textContent=a+" is not a palindrome"
            }
        }
});