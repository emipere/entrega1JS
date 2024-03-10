
const pm = "tarde"
const am = "mañana"



    let admision = prompt (" Bienvenido, le solicitaremos sus datos para poder otorgarle un turno. \n Esta de acuerdo? (si/no) ").toLocaleLowerCase ();
  
 switch (admision){
    case "si":
       alert ("Por favor responder las siguientes preguntas");
       let apellido = prompt ("Cual es su Apellido?");
       let nombre = prompt ("Cual es su Nombre?");
       let edad =  parseInt (prompt("Indique su edad"));
       let telefono =  parseInt (prompt("Indique su telefono"));
       let turno = prompt ("Por favor  indique si su preferencia es por la "+am+ " o por la " +pm).toLocaleLowerCase ();
        if (edad<13){
          alert( "Notamos que esta solicitando un turno para un menor de edad de nombre " +nombre+" "+apellido+" nos pondremos en contacto a la brevedad al numero "+telefono+ " para poder brindarle un turno por la " +turno+ " con un especialista en niños y adolecentes."+  " \nMuchas gracias por elegirnos.")
     }else {
       alert (" Gracias "+nombre+" "+apellido+" nos pondremos en contacto a la brevedad al numero "+telefono+ " para poder brindarle un turno por la " +turno+"."+  " \nMuchas gracias por elegirnos.");
   }
      
       const paciente = (apellido+nombre+edad+telefono);
       const baseDeDatos= [];
       baseDeDatos.push (paciente);
       console.log ("base de datos",baseDeDatos);  
       
       function pacientesParaOtorgarTurno(){
       return paciente;
       }
       console.log (pacientesParaOtorgarTurno())
      
       break;
     

    case "no":
       alert ("Gracias por contactarnos")  
    break;
    default: alert ("Por favor responda si o no. \nVuelva a ingresar. \nMuchas Gracias. ");
   break;

   
 }


    console.log ( "todos los datos adquiridos en la admision se almacenara en al array baseDeDatos")

    
      
  
