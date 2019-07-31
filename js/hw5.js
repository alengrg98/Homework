$(document).ready(function(){
    
    function pal(numb)
    {
        var rev=0;
        var pali=0;
        //console.log(pal);
        var dig;
        for(var temp=numb;temp>0;  temp=parseInt(temp/10))
        {
            dig=(temp%10);
            //console.log(dig);
            rev=(rev*10)+dig;
            //console.log(rev);
            

        }
        if(rev==numb)
        {
            pali=1;
            return(pali);
            //console.log(pali);
            
         
        }
        else
        {
            pali=0;
            return(pali);
            //console.log(pal);
        }
    }


    $('#b1').click(function(){
        var num=$('#num1').val();
        //console.log(num);   
        num2=parseInt(num);
        //console.log(num2);        
        var p=pal(num2);
        //console.log(p);
        var mypromise=new Promise((resolve,reject)=>{

            
            if(p==1)
            {
                resolve();
            }
            else
            {
                reject();
            }
        
        });
        mypromise.then(()=>{
            //console.log("Number is Pallindrome");
            document.getElementById("result").innerHTML="Number is Pallindrome";
        }).catch(()=>{
            //console.log("Number is not Pallindrome ");
            document.getElementById("result").innerHTML="Number is not Pallindrome ";
        })
    })


    
});