// Variables
let numero_maximo_posible = 10;
let numero_secreto = Math.floor(Math.random() * numero_maximo_posible) + 1;
let numero_usuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximos_intentos = 6;

while (numero_usuario != numero_secreto)
{
    numero_usuario = ParseInt(prompt(`Me indicas un número entre 1 y ${numero_maximo_posible} por favor:`)); 

    console.log(numero_usuario);

    if (numero_usuario == numero_secreto)
    {
        // Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numero_usuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
    }
    else 
    {
        if ("numero_usuario" > numero_secreto)
        {
            // La condición no se cumplió
            alert("El número secreto es menor");
        } 
        else
        {
            alert("El número secreto es mayor");
        }
        // Incrementamos el contador cuando no se acierta
        intentos++;
        //palabraVeces = "veces";
        if (intentos > maximos_intentos){
            alert(`Llegaste al máximo de${maximos_intentos} intentos`);
            break;
        }
    }
}
