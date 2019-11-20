let equ=document.querySelector("#equ");
let answer=document.getElementById("answer");
var num={
    
    zero: function () {
        let k=equ.value;
        if(k==="0"||k===""){
        
        }else{
        equ.value=k+"0";
        this.ans();
        }
        
    },
    disp: function (num) {
        let k=equ.value;
        if(k!="0")
        equ.value=k+num;
        else
        equ.value=num;
        this.ans();
    },
    add: function (opt) {
        let k=equ.value;
        let i=k.length-1;
        if(k[i]!=opt)
        {
         
         if(k[i]==="-"||k[i]==="*"||k[i]==="/"||k[i]==="%"||k[i]==="+")
        {var j= k.slice(0,i);
         equ.value=j+opt;}
         else{
        if(k=="")
        {
            if(opt!="%")
            equ.value="0"+opt;
        }else
        equ.value=k+opt;
        }}
        this.ans();
    },
    
    dec:function(){
        let k=equ.value;
        let i=k.length-1;
        if(k[i]!=".")
        {   let j=i;
            while(i!=0){
                
                if(k[i]==="."){
                    return;
                }else if(k[i]==="-"||k[i]==="*"||k[i]==="/"||k[i]==="%"||k[i]==="+"){
                  equ.value=k+".";
                  return;
                } 
                i=i-1;
            }
            
             equ.value=k+".";
        }
    }
    ,
   
   ans: function(){
       let val=equ.value;
       answer.style.fontSize="25px";
       if(val===""||val==="0")
       {
           answer.value="0";
       }else
       {let k=eval(val);
       answer.value="="+k;}
   },
   final:function(){
       this.ans();
    answer.style.fontSize="35px";
   }
   
   ,
   eraseAll :function(){
       equ.value="";
       answer.value="0";
   },
    erase:function(){
      
      let k=equ.value;
      if(k.length>0){
      let i=k.length-1;
       var j= k.slice(0,i);
      equ.value=j;
      this.ans();}
      else
       answer.value="0";
   }
    
};