var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var paleta = document.getElementById('paleta');
var grilla = document.getElementById('grilla-pixeles');
var seleccion = document.getElementById('indicador-de-color');
var borrar = document.getElementById('borrar');
var borrarPixel = document.getElementById('borrarPixel');
var guardar = document.getElementById("guardar");
var copiarColor = document.getElementById("copiarColor");

// Variables
var seleccionado = false;
var estadoCopiaColor = false;


/// eventos
paleta.addEventListener('click', modificarColor);
grilla.addEventListener('click', llenarDiv);
grilla.addEventListener('mousedown', () => { seleccionado = true; });
grilla.addEventListener('mouseover', rellenarGrilla);
grilla.addEventListener('mouseup', () => { seleccionado = false; });
colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    seleccion.style.backgroundColor = colorActual;
  })
);

// recorre los colores y rellena la paleta de colores.
function recorrerColores() {
  for (let index = 0; index < nombreColores.length; index++) {
    const element = nombreColores[index];
    var div = document.createElement('div');
    div.className = "color-paleta";
    div.style.backgroundColor = element;
    paleta.appendChild(div);
  }
}

// Llena la grilla con los pixeles.
function llenarGrilla() {
  for (let index = 0; index < 1750; index++) {
    const div = document.createElement('div');
    grilla.appendChild(div);
  }
}

//Llamamiento de la función.
recorrerColores();
llenarGrilla();

// Modifica el color seleccionado.
function modificarColor(e) {
    seleccion.style.backgroundColor = e.target.style.backgroundColor;
}

// Modifica el color seleccionado en la grilla.
function rellenarGrilla(e) {
  if (seleccionado) {
    llenarDiv(e);
  }
}

//Realizar el borrado con animación
borrar.addEventListener('click', () => {
  $(grilla).children('div').animate({ "backgroundColor": "white" }, 2000);
});


// Seleccionar imagen a cargar
$(".imgs li").on("click", function (e) {

  var sh = e.target.id;
  switch (sh) {
    case 'batman':
      cargarSuperheroe(batman);
      break;
    case 'invisible':
      cargarSuperheroe(invisible);
      break;
    case 'flash':
      cargarSuperheroe(flash);
      break;
    case 'wonder':
      cargarSuperheroe(wonder);
      break;
    default:
      console.log("Error")
      break;
  }

})

//Llena o copia el color del background.
function llenarDiv(e) {
  var seleccion = document.getElementById('indicador-de-color');
  if (estadoCopiaColor) {
    seleccion.style.backgroundColor = e.target.style.backgroundColor;
  } else {
    e.target.style.backgroundColor = seleccion.style.backgroundColor;
  }
}

//función que permite guardar en formato png.
guardar.addEventListener("click", guardarPixelArt);

//Permite borrar pixeles y dejarlos en blanco.
borrarPixel.addEventListener("click", () => {
  seleccion.style.backgroundColor = "white";
});

//Permite copiar un color para poder replicarlo en otro pixel.
copiarColor.addEventListener('click', () => {
  if (estadoCopiaColor) {
    $("#copiarColor").css("backgroundColor", "lightgrey");
    estadoCopiaColor = false;
  } else {
    $("#copiarColor").css("backgroundColor", "red");
    estadoCopiaColor = true;
  }
});
