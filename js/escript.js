e1=document.querySelector('ul li:nth-child(1)');
e2=document.querySelector('ul li:nth-child(2)');
e3=document.querySelector('ul li:nth-child(3)');
e4=document.querySelector('ul li:nth-child(4)');
p=document.querySelector("p");

t1="INFORMACIÓN INICIAL"
t2="ENCUENTRA EL ÁREA DEL CONOCIMIENTO EN LA CUAL DESEAS REALIZAR TU PROYECTO."
t3="ELIJE UN ASESOR DE LA LISTA."
t4="CONTACTA A DJGO1978@GMAIL.COM"


function cambiar(event, t){
    event.preventDefault();
        p.innerHTML=t;
    }


e1.addEventListener('click',function(event){cambiar(event,t1)});
e2.addEventListener('click',function(event){cambiar(event,t2)});
e3.addEventListener('click',function(event){cambiar(event,t3)});
e4.addEventListener('click',function(event){cambiar(event,t4)});

