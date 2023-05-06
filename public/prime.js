//--- write a script to show all prime numbers between 2 to 200

for(let s=2;s<=200;s++)
{
var count=0;
for(let i=1;i<=s;i++)
{
    if(s%i==0)
    count++;
}
if(count==2)
console.log(s+" ");


}