var am=document.getElementById('am')
var ap=document.getElementById('ap')
function p() {
    var m=Number(am.value)
    var p=Number(ap.value)
    var afh=(m+p+12.5)/2
    var afm=(m+p-12.5)/2

    res.innerHTML+='<p>seu filho terá '+afh+'</p>'
    res.innerHTML+='<p>sua filha terá '+afm+'</p>'
}