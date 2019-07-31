$(document).ready(function(){
    var sum=0;
    function sumofdigits(numb,callback)
    {
        
        for(var temp1=numb;temp1>0;temp1=parseInt(temp1/10))
        {
                sum+=(temp1%10);
                //console.log(sum);
                
        }
        callback(sum);
    }

    $('#b1').click(function(){
        var num=$('#inp1').val();
        //console.log(num);
        var i=0;
        for(var temp=num;temp>0;temp=parseInt(temp/10))
        {
            //console.log(temp);
            i++;
            //console.log(i);
            
        }
        if(i!=4)
        {
            alert("Please enter a four digit number");
        }
        else
        {
            //console.log("sum");
            sumofdigits(num,(res)=>{
                //console.log(sum);
                //console.log("sum");
                document.getElementById("result").innerHTML=res;

            })
        }



    })
});