
function calendar()
{
 var currentday= new Date();
 var nam=currentday.getFullYear();
 var thang=currentday.getMonth();
 var months=["january","february","march","april","may","june","july","august","september","october","november","december"];
 var ngay=currentday.getDate();
 var gio=currentday.getHours();
 var phut=currentday.getMinutes();
 var text="";
 var image="";
 var suffix="";

if(gio<11&&gio>5)
{
  text="good morning stranger";
  image="sprite/desktop/icon_desktop_neru_noon.png";
  suffix="am";

}
else if(gio<18&&gio>5)
{
  text="good afternoon stranger";
    image="sprite/desktop/icon_desktop_neru_evening.png";
    suffix="pm";
    gio-=12;
}
else if(gio<23&&gio>18)
{
  text="good evening stranger";
    image="sprite/desktop/icon_desktop_neru_night.png";
    suffix="pm";
    gio-=12;

}
else
{
  text="sweet dream stranger";
      image="sprite/desktop/icon_desktop_neru_night.png";
      suffix="am";
}
if(phut<10)
{
  phut="0"+phut;
}
document.getElementById("calendarcontent").innerHTML=text+"^^";
document.getElementById("calendarimage").src=image;
document.getElementById("calendardate").innerHTML=months[thang] + " " + ngay + ", " + nam;
document.getElementById("calendartime").innerHTML=gio+":"+phut+" "+suffix;
}
calendar();
setInterval(calendar,60000);