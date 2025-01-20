//Defining the texts to variables
var Orig= "My Bonnie lies over the ocean. <br> &nbsp &nbsp My Bonnie lies over the sea. <br> My Bonnie lies over the ocean. <br> &nbsp &nbsp Oh, bring back my Bonnie to me. <br>";
var My= "My Pony flies over the ocean. <br> &nbsp &nbsp My Pony flies over the sea. <br> My Pony flies over the ocean. <br> &nbsp &nbsp Oh, bring back my Pony to me. ";
var V1= "Last night as I lay on my pillow, <br> &nbsp &nbsp Last night as I lay on my bed, <br> I stuck my feet out of the window, <br> &nbsp &nbsp In the morning the neighbors were dead. ";
var V2= "My mother makes beer in the bathtub, <br> &nbsp &nbsp My father makes synthetic gin, <br> My sister makes fudge for a quarter, <br> &nbsp &nbsp My God, how the money rolls in.";
//Flex Container
document.getElementById("t1").innerHTML= "Original Version";
document.getElementById("t2").innerHTML= "My Version";
document.getElementById("t3").innerHTML= "Variation Nr 1";
document.getElementById("t4").innerHTML= "Variation Nr 2";

document.getElementById("fc").innerHTML= Orig;
document.getElementById("ff").innerHTML= My;
document.getElementById("fg").innerHTML= V1;
document.getElementById("fh").innerHTML= V2;

//Paragraph mit Buttonclick ersetzen
let x = 1;

document.getElementById("pony").style.backgroundColor = "rgb(200, 200, 200)";
        
    document.getElementById("pony").innerHTML = Orig;
        
    document.getElementById("but").innerHTML = "Show: <br> My song Version";
    
function myFunction() {
        
if (x==1) {
    document.getElementById("pony").style.backgroundColor = "rgb(150,150,150)";   
    document.getElementById("pony").innerHTML = My;    
    document.getElementById("but").innerHTML = "Show: <br> alternative Version 1";
    x=x+1;}   else if (x==2){
    document.getElementById("pony").style.backgroundColor = "rgb(100,100,100)";
    document.getElementById("pony").innerHTML = V1;
    document.getElementById("but").innerHTML = "Show: <br> alternative Version 2";
    x=x+1;} else if (x==3){
    document.getElementById("pony").style.backgroundColor = "rgb(50,50,50)";
    document.getElementById("pony").innerHTML = V2;
    document.getElementById("but").innerHTML = "Show: <br> Original Version";
    x=x+1;} else {
    document.getElementById("pony").style.backgroundColor = "rgb(200, 200, 200)";
    document.getElementById("pony").innerHTML = Orig;
    document.getElementById("but").innerHTML = "Show: <br> My song Version";
    x=x-3;}}
//replacing words in Text
document.getElementById("rep").innerHTML=Orig;
let isOriginal = true;

    function repFunction() {
//if isOriginal = true, which was defined true in the beginning of the script, then do the following
    if (isOriginal) {
    //change in <p> all Bonnie's to Pony's
    let text1 = document.getElementById("rep").innerHTML;
    document.getElementById("rep").innerHTML = text1.replaceAll("Bonnie", "Pony");
    // replace all lies that are noncase sensitive and globally to flies
    let text2 = document.getElementById("rep").innerHTML;
    document.getElementById("rep").innerHTML = text2.replaceAll(/LIES/gi, "flies");
    //change button
    let text3 = document.getElementById("repla").innerHTML;
    document.getElementById("repla").innerHTML = text3.replace("My", "Original");
    //define the boolean variable to false
    isOriginal = false;
    //if isOriginal is false use else to change everything back
    } else {
    let text1 = document.getElementById("rep").innerHTML;
    document.getElementById("rep").innerHTML = text1.replaceAll("Pony", "Bonnie");
    let text2 = document.getElementById("rep").innerHTML;
    document.getElementById("rep").innerHTML = text2.replaceAll(/flies/gi, "lies");
         
    let text3 = document.getElementById("repla").innerHTML;
    document.getElementById("repla").innerHTML = text3.replace("Original", "My");
                 
    isOriginal = true;} }      
//checkboxes
let Var1=document.getElementById("Var1");
let Var2=document.getElementById("Var2");
let Var3=document.getElementById("Var3");
let Var4=document.getElementById("Var4");
         
function cbFunction(){
    if (Var1.checked==true) {
        document.getElementById("cb").innerHTML= "<h3 class='hg'>Original Version</h3>"+Orig;} 
    else {document.getElementById("cb").innerHTML=""}
    if (Var2.checked==true) {
        document.getElementById("cc").innerHTML="<h3 class='hg'>My Version</h3>"+My;} 
    else {document.getElementById("cc").innerHTML=""}
    if (Var3.checked==true) {
        document.getElementById("cd").innerHTML= "<h3 class='hg'>Variation Nr 1</h3>"+V1;} 
    else {document.getElementById("cd").innerHTML=""}
    if (Var4.checked==true) {
        document.getElementById("cf").innerHTML= "<h3 class='hg'>Variation Nr 2</h3>"+V2;} 
    else {document.getElementById("cf").innerHTML=""}
             }
// Clear the checkboxes 
 function clFunction() {
    Var1.checked=false;
    Var2.checked=false;
    Var3.checked=false;
    Var4.checked=false;}

           