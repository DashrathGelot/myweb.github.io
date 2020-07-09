(function(){var n=0;
var val=0;
function Questionbank(q,answer,correct){
    this.q=q;
    this.answer=answer;
    this.correct=correct;
}
Questionbank.prototype.qdisplay=function(){
    document.getElementById('q').innerHTML="A.  "+this.q;
    for(var i=0;i<this.answer.length;i++){
        document.getElementById('q'+(i+1)).innerHTML=(i+1)+". "+this.answer[i];
    }
}
Questionbank.prototype.checkanswer=function(an){
        if(an==this.correct){
            console.log("correct");
            val++;
        }
        else{
            console.log("wrong");
        }
}
var q1=new Questionbank("What is capital Of gujrat",['Ahmedabad','Gandhinagar','Surat','Bk'],2);
var q2=new Questionbank("What is capital Of India",['Mumbai','Delhi','Bangloru','Gujrat'],2);
var q3=new Questionbank("2+3*2/2 = ",['5','4','6','8'],1);
var qarray=[q1,q2,q3];
qarray[n].qdisplay();
function getans(){
    var ans=document.getElementById('ans').value;
    qarray[n].checkanswer(ans); 
    document.querySelector('.score').innerHTML=val;
    nextq();
}
function nextq(){
    n++;
    qarray[n].qdisplay();
    document.getElementById('ans').value="";
}
document.querySelector('#sub').addEventListener('click',getans);
document.querySelector('#next').addEventListener('click',nextq);
})();
