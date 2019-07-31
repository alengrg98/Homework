$(document).ready(function(){
    
    function pal(numb)
    {
        var rev=0;
        var pal=0;
        console.log(pal);
        for(var temp=numb;temp>0;temp=temp/10)
        {
            
            rev=(rev*10)+(temp%10);

        }
        if(rev==numb)
        {
            pal=1;
            console.log(pal);
            
         
        }
        else
        {
            pal=0;
            console.log(pal);
        }
    }


    $('.b1').click(function(){
        var num=$('.num1').val();
        console.log(num);   
        num2=parseInt(num);
        //console.log(num2);        
        pal(num);
        var mypromise=new Promise((resolve,reject)=>{

            
            if(pal==1)
            {
                resolve();
            }
            else
            {
                reject();
            }
        
        });
        mypromise.then(()=>{
            console.log("Number is Pallindrome");
            document.getElementById("result").innerHTML="Number is Pallindrome";
        }).catch(()=>{
            console.log("Number is not Pallindrome ");
            document.getElementById("result").innerHTML="Number is not Pallindrome ";
        })
    })


    
});