name_of_the_student_array=[];
function submit(){
    var display_student_name=[];
    for(var j=1;j<=4;j++)
    {
        var name_student=document.getElementById("name_of_the_student_"+j).value;
        console.log(name_student);
        name_of_the_student_array.push(name_student);
    }
   console.log(name_of_the_student_array);
   var length=name_of_the_student_array.length;
    console.log(length);
    
    for(var k=0;k<length;k++)
    {
        display_student_name.push("<h4>-name-"+name_of_the_student_array[k]+"</h4><br>");
        console.log(display_student_name) 
    }
    function sorting(){
        name_of_the_student_array.sort();
        var display_student_name_sorting=[];
        var length=name_of_the_student_array.length;
        console.log(length);
    
        for(var k=0;k<length;k++)
        {
            display_student_name_sorting.push("<h4>-name-"+name_of_the_student_array[k]+"</h4><br>");
            console.log(display_student_name_sorting) 
        }
    }
}
