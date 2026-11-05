// =====================================
// Sistema de Gestión de Tareas
// =====================================

/*
INSTRUCCIONES GENERALES:

1. Lee cuidadosamente cada sección.
2. Completa únicamente donde se indica con TODO.
3. No borres la estructura base.
4. Agrega comentarios explicando tu lógica.
5. Prueba cada función antes de continuar.
6. NO USAR INTELIGENCIA ARTIFICIAL.
*/


// =====================================
// 1. Arreglo inicial de tareas
// =====================================

/*
Cada tarea tiene:
- nombre: string
- prioridad: number (1 = alta, 2 = media, 3 = baja)
- completada: boolean
*/

const tareas = [
  { nombre: "Ir a la playa", prioridad: 1, completada: true },
  { nombre: "Estudiar JS", prioridad: 2, completada: true },
  { nombre: "Ver películas", prioridad: 3, completada: false }
];


// =====================================
// 2. Funciones
// =====================================

/*
TODO 1: Listo
Crear una función que recorra el arreglo de tareas
y muestre en consola:
- nombre de la tarea
- estado: "Completada" o "Pendiente"
*/
function mostrarTareas(lista) {
  for (let index = 0; index < tareas.length; index++) {

    //Obtener una tarea por iteracion
    let element = tareas[index];

    //Transformar true en completado o falso en pendiente
    if (element.completada) {
      var estado = "Completado";
    }else{
      var estado = "Pendiente";
    }

    //Mostrar Tarea y estado
    console.log("Tarea: "+element.nombre);
    console.log("Estado: "+ estado);
    console.log("");
    
  }
}

/*
TODO 2: Listo
Crear una función flecha que retorne
solo las tareas completadas.
Usar filter.
*/
const obtenerCompletadas = (lista) => {

  /*El metodo filter crea un arreglo nuevo a partir de filter tareas donde solo 
  nos regresara las que cumplan la condicion de completada === true*/
  const tareasCompletadas = lista.filter(tarea => tarea.completada);

  return tareasCompletadas;
};

/*
TODO 3: Listo
Crear una función flecha que retorne
solo las tareas pendientes.
Usar filter.
*/
const obtenerPendientes = (lista) => {
  /*El metodo filter crea un arreglo nuevo a partir de filter tareas donde solo 
  nos regresara las que cumplan la condicion de completada === false*/
  const tareasPendientes = lista.filter(tarea => !tarea.completada);

  return tareasPendientes;
  
};

/*
TODO 4: Listo
Crear una función flecha que retorne
solo los nombres de las tareas.
Usar map.
*/
const obtenerNombres = (lista) => {
  /*map() crea una lista unicamente con los atributos que se desean mostrar y (tarea => tarea.nombre) 
  tarea es el elemento de la lista y lo que esta despues de => tarea.nombre es el atributo que se mostrara*/
  const nombresTareas = lista.map(tarea => tarea.nombre);

  return nombresTareas;
};

/*
TODO 5: Listo
Crear una función que retorne
el total de tareas.
*/
function contarTareas(lista) {
  /*tamaño de la lista*/
  return lista.length;
}



// =====================================
// 3. Objeto sistema
// =====================================

/*
TODO 6: Listo
Completar los métodos usando this.tareas

- mostrarTareas: debe llamar a la función mostrarTareas
- mostrarCompletadas: debe usar obtenerCompletadas
- mostrarPendientes: debe usar obtenerPendientes
*/

const sistema = {
  tareas: tareas,

  /*this.tarea es la lista tareas que se declara dentro de const sistema
  y el valor de this.tareas es la lista tareas al inicio de esta clase*/
  mostrarTareas: function() {
    //metodo implementado anteriormente
    mostrarTareas(this.tareas);
  },

  mostrarCompletadas: function() {
    //metodo implementado anteriormente
    return obtenerCompletadas(this.tareas);
  },

  mostrarPendientes: function() {
    //metodo implementado anteriormente
    return obtenerPendientes(this.tareas);
  }
};


// =====================================
// 4. Condicionales
// =====================================

/*
TODO 7: Listo

- Si el arreglo tareas está vacío:
  mostrar "No hay tareas"

- Si todas las tareas están completadas:
  mostrar "Todas las tareas completadas"
*/

/*Si el tamaño de this.tareas de sistema es igual a 0 entonces esta vacia
y no hay tareas */
if (sistema.tareas.length===0) {
  console.log("No hay tareas")
}

/*Si el metodo mostrarCompletadas() de sistema que llama a su vez a obtener
completadas que regresa una lista con solo las tareas completadas, y el tamaño
de esta lista con tareas completadas es igual al tamaño de la lista de tareas
significa que todas las tareas estan completadas*/
if (sistema.mostrarCompletadas().length === sistema.tareas.length) {
  console.log("Todas las tareas completadas")
}


// =====================================
// 5. Switch
// =====================================

/*
TODO 8: Listo

Usar la variable opcion para ejecutar:

1 -> mostrar todas las tareas
2 -> mostrar tareas completadas
3 -> mostrar tareas pendientes
default -> mostrar "Opción inválida"
*/

/*Modificar opcion para ir cambiando de funcion*/
const opcion = 2;

switch (opcion) {
  case 1:
    sistema.mostrarTareas();
    break;

  case 2:
    console.log("Tareas completadas: ");
    console.log(sistema.mostrarCompletadas());
    break;

  case 3:
    console.log("Tareas pendientes: ");
    console.log(sistema.mostrarPendientes());
    break;

  default:
    console.log("Opción inválida");
}


// =====================================
// 6. Pruebas
// =====================================

/*
TODO 9: Listo

Llamar funciones para comprobar que todo funciona correctamente.
Usar console.log donde sea necesario.
*/

/*
mostrarTareas(tareas);
console.log("");
console.log("Tareas completadas: ");
console.log("");
console.log(obtenerCompletadas(tareas));
console.log("");
console.log("Tareas pendientes: ");
console.log("");
console.log(obtenerPendientes(tareas));
console.log("");
console.log("Tareas por nombres: ");
console.log("");
console.log(obtenerNombres(tareas));
console.log("");
console.log("Total de tareas: " + contarTareas(tareas));
*/
