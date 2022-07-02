// var inputdata=document.getElementById('name1').value;
var form1=document.getElementById('name1');
console.log(form1);
let btn=document.querySelector("input[type='submit']");
console.log(btn);


btn.addEventListener('click',e=>
{
    if(form1.value=="")
    {
        alert("fill data");
    }
    else{
        let x=form1.value;
        form1.value="";
        console.log(x);
        var data1=document.createElement('td');
        var data2=document.createElement('td');
        var data3=document.createElement('td');
        var row=document.createElement('tr');
    
        var btn1=document.createElement("button");
        btn1.setAttribute("type","submit");
        btn1.textContent="edit";
    console.log(btn1);
        var btn2=document.createElement("button");
        btn2.setAttribute("type","submit");
        btn2.textContent="delete";
    
        data1.innerHTML=x;
        
        data2.appendChild(btn1);
        data3.appendChild(btn2);
    
        row.appendChild(data1);
        row.appendChild(data2);
        row.appendChild(data3);
        document.getElementById('crudSection').appendChild(row);
      
        btn2.addEventListener("click", e=>{
            console.log(data3);
            data3.parentElement.remove();
        });
    
    
        btn1.addEventListener("click", e=>{
            console.log(form1);
            //  form1.value=data1.textContent;
            // data2.parentElement.remove();
         
            let input1=document.createElement("input");
            input1.setAttribute("type","text");
            input1.value=data1.textContent;
           
            data1.textContent="";
            data1.appendChild(input1);
    
            var btn3=document.createElement("button");
            btn3.setAttribute("type","submit");
            btn3.textContent="update";
           btn1.remove();
            data2.appendChild(btn3);
    
    
           btn3.addEventListener("click",e=>{
            data1.innerHTML=input1.value;
            data2.appendChild(btn1);
            btn3.remove();
           })
            
        })
    }

    
})