function view(i){
 document.form.textview.value=document.form.textview.value+i;
}
function equal(){
    var i=document.form.textview.value;
    if (i){
        document.form.textview.value=eval(i)
    }
}
function clean (){
    document.form.textview.value="";
}

function back(){
    var i=document.form.textview.value;
    document.form.textview.value=i.substring(0,i.length-1)
}