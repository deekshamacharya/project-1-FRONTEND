var userList=[ "BANGALORE","BENGALURU" , "MYSORE" ,"MYSURU",
            "HUBLI",
            "MANGALORE"
           ," BELGAUM",
            "GULBARGA", "KALABURAGI",
            "DANAVAGERE",
            "BELLARY" ,"BALLARI",
            "TUMKUR","TUMAKURU",
            "SHIMOGA",
            "BIJAPUR", "VIJAYAPURA",
            "HASSAN",
            "BIDAR",
            "RAICHUR",
            "UDUPI"];
            
            var userInput= prompt("Enter your city name within karnataka (in CAPS)");

if(userList.includes(userInput))
{
    alert("SELECT THE MOVIE");
}
else{
    
   do{ var ans=prompt("Enter valid city name within karnataka (in CAPS)");}
while(!userList.includes(ans));
alert("SELECT THE MOVIE");
}




 
       