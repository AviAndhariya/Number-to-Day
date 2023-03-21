const handleClick=()=>{
    
    let N = document.getElementById("num").value; 
    console.log(N);

    let ans = check(N);
    document.getElementById("ans").innerText = ans;
    
}


document.getElementById('btn').addEventListener('click',handleClick);

function check(N){
    let arr = [31,28,31,30,31,30,31,31,30,31,30,31];
    let years = 0;
    let days = 0;
    let months =0;
    let sum =0;
    
    for(let i=0; i<arr.length; i++){
          if(N<arr[i]){
            days = N;
            break;
        }
        else{
        sum=sum+arr[i];
       while(N>=365){
           years = years + 1;
           N = N-365;
       }
         if(N>=arr[i]){
            if(N>=sum){
            months = months +1;
          }else{
              N = N -(sum-arr[i]);
              days =  N ;
              break;
          }
        }else{
            days =  N ;
              break;
        }
      }
    }
    let res = years+" Year "+months+" Month "+days+" Day ";
    return res;
}
