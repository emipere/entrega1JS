
const pm = "tarde"

const am = "mañana"



let admision = prompt(

   "Bienvenido, le solicitaremos sus datos para poder otorgarle un turno. \n ¿Está de acuerdo? (si/no)"

 ).toLocaleLowerCase();

 while (admision !== "si" && admision !== "no") {

   admision = prompt(

     "Por favor responda si o no. \n ¿Está de acuerdo? (si/no)"

   ).toLocaleLowerCase();

 }

  if (admision === "si") {

 
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

      }else{

       alert ("Gracias por contactarnos")  

   }
   

      console.log ( "todos los datos adquiridos en la admision se almacenara en al array baseDeDatos")

    function validarTelefono(telefono) {

      if (telefono < 0 ) {

        alert("El teléfono ingresado no es válido. Por favor, ingrese un número mayor a 0.");

        return false;

      }

      return true;

    }





    

      

  

   
      
  
