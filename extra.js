

function cifrar(frase, desplazamiento) {
    return frase.split('').map(char => 
        String.fromCharCode(char.charCodeAt(0) + desplazamiento)
    ).join('');
  }
  
  const frases = [
    // codificadas con 20
    "Dirige al dinosaurio al final del laberinto y pasa por los corazones",
    "Utiliza las flechas del teclado o las letras AWSD para moverte",
  
    // codificadas con 2
    "Te quiero mucho",
    "y eres muy importante para mí",
  
    // codificadas con 3
    "Voy a cuidar de ti",
    "y haré todo lo posible por verte feliz",
  
    // codificadas con 4
    "Eres mi persona favorita",
    "y el hombre que amo",
  
    // codificadas con 5
    "Rawr",
    "(significa TE AMO en dinosaurio)",
  
    // codificadas con 6
    "Perdóname por cada vez que te hice sentir mal :(",
    "Quiero ser mejor para construir un futuro contigo",
  
    // codificadas con 7
    "Gracias por siempre estar a mi lado",
    "y por apoyarme en cada momento",
  
    // codificadas con 8
    "En ti encontré todo lo que jamás supe que estaba buscando",
    "y quiero estar siempre a tu lado",
  
    // codificadas con 9
    "Rawr",
    "Rawr",
  
    // codificadas con 10
    "Tenemos tantos recuerdos juntos",
    "y quiero seguir creando más contigo",
  
    // codificadas con 11
    "Quiero formar una familia contigo",
    "y darte siempre el amor que mereces",
  
    // codificadas con 12
    "Eres el hombre que amo",
    "y el único que quiero a mi lado",
  
    // codificadas con 13
    "Gracias por escucharme",
    "y hacerme sentir especial",
  
    // codificadas con 14
    "Nobody knows you, baby, the way I do",
    "And nobody loves you, baby, the way I do",
  
    // codificadas con 15
    "I love you",
    "My little bear ❤️"
  ]
  