let str=new String("abc")
let str1=new String("abc")
if(str.valueOf()===str1.valueOf())
console.log("same")
else
console.log("different")

let str11=new String("abc cd")
let str12="abc cd"
if(str12==str11.valueOf())
console.log("same")
else
console.log("different")
