
// constant values
const Password = "02bd175f329720378ce83dd56a1b6b1f5291a60182d6c54b5e0d1e8d248a267a"; 

const photos = [
  'images/dino_centro.png',
  '',
  'images/foto_2.png',
  'images/foto_3.png',
  'images/foto_4.png',
  'images/foto_5.png',
  'images/foto_6.png',
  'images/foto_7.png',
  'images/foto_8.png',
  'images/foto_9.png',
  'images/foto_10.png',
  'images/foto_11.png',
  'images/foto_12.png',
  'images/foto_13.png',
  'images/foto_14.png',
  'images/foto_15.png',
  'images/foto_ultima.png',
]


const Phrases = [
  'X}}{y4u4x}u}4u4z}u4xy4uvy}44uu444wuy',
  'i}}u4u4zyw|u4xy4ywux44u4yu4UkgX4uu4yy',

  'Vg"swkgtq"owejq',
  '{"gtgu"ow{"korqtvcpvg"rctc"oï',

  'Yr|#d#fxlgdu#gh#wl',
  '|#kduì#wrgr#or#srvleoh#sru#yhuwh#ihol}',

  'Iviw$qm$tivwsre$jezsvmxe',
  '}$ip$lsqfvi$uyi$eqs',

  'Wf|w',
  '-xnlsnknhf%YJ%FRT%js%instxfzwnt.',

  'Vkxjùtgsk&vux&igjg&|k&w{k&zk&noik&yktzox&sgr&@.',
  'W{okxu&ykx&skpux&vgxg&iutyzx{ox&{t&l{z{xu&iutzomu',

  "Nyhjphz'wvy'zpltwyl'lz{hy'h'tp'shkv",
  "'wvy'hwvhytl'lu'jhkh'tvtlu{v",

  'Mv(|q(mvkwv|zñ(|wlw(tw(y}m(riué{({}xm(y}m(m{|iji(j}{kivlw',
  '(y}qmzw(m{|iz({qmuxzm(i(|}(tilw',

  '[j{',
  '[j{',

  '^oxowy}*~kx~y}*|omo|ny}*tx~y}',
  '*{so|y*}oqs|*m|okxny*wë}*myx~sqy',

  '\\tp}z+qz}xl}+yl+qlxtwtl+nzytrz',
  '+ol}p+~tpx{}p+pw+lxz}+|p+xp}pnp~',

  'Q~q,qx,t{yn~q,}q,my{',
  ',qx,Ćzuo{,}q,}uq~{,m,yu,xmp{',

  'Tnpvn-}|-rppunzr',
  '-unprzr-r{v-r}rpvny',
  
  '\\}p}r.y|}.}:.pop:.vs.o.W.r}',
  'O|r.|}p}r.z}s.}:.pop:.vs.o.W.r}',

  'X/{~t/~',
  '\\/{x{t/qtp/❳︞'

]


function obtainPhrase(phrase, k) {
  return phrase.split('').map(char => 
      String.fromCharCode(char.charCodeAt(0) - k)
  ).join('');
}


// Función para generar el hash de la contraseña ingresada
async function sha256(str) {
  const buffer = new TextEncoder().encode(str);  // Convierte la cadena en un array de bytes
  const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);  // Genera el hash SHA-256
  return Array.from(new Uint8Array(hashBuffer))  // Convierte el hash en un array de bytes
    .map(byte => byte.toString(16).padStart(2, '0'))  // Convierte cada byte a su representación hexadecimal
    .join('');
}

// Función para verificar la contraseña
async function verificarContraseña() {
  const password = document.getElementById('passwordInput').value;  // Obtiene la contraseña ingresada
  const userHash = await sha256(password);  // Genera el hash de la contraseña ingresada

  if (userHash === Password) {
    document.getElementById('passwordForm').style.display = 'none';  // Oculta el formulario
    document.getElementById('contenidoProtegido').style.display = 'block';  // Muestra el contenido secreto

    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');

    // Actualiza la fuente con la nueva canción
    audioSource.src = "fireproof.mp3";  // Cambia la URL de la canción

    // Reinicia el audio (en caso de que ya esté reproduciéndose) y reproduce la nueva canción
    audioPlayer.load();  // Esto recarga el nuevo archivo de audio
    audioPlayer.play();  // Reproduce el nuevo audio
  } else {
    alert('Contraseña incorrecta, intenta de nuevo.');
  }
}


const mazeMatrix = [
  [0,0,0,0,0, 0,1,0,0,0 ,1,0,0,0,1  ,0,0,0,1,0,  0,0,0,0],
  [1,0,1,1,1, 0,1,0,1,0 ,1,0,1,0,1  ,0,1,0,1,0,  1,1,1,0],
  [1,0,0,0,1, 0,1,2,1,0 ,1,0,1,0,1  ,3,1,0,1,0,  1,0,0,4],
  [1,0,1,0,1, 0,1,1,1,0 ,1,0,1,0,1  ,1,1,0,1,0,  1,0,1,1],
  [1,0,1,0,1, 0,0,0,1,0 ,1,0,1,0,0  ,0,1,0,1,0,  1,0,0,0],
  [1,0,1,0,1, 1,1,0,1,0 ,1,0,1,1,1  ,0,1,0,1,1,  1,1,1,0],
  [1,0,1,0,1, 0,0,0,1,0 ,1,0,0,0,1  ,0,1,0,0,0,  1,0,0,0],
  [1,0,1,0,1, 0,1,1,1,0 ,1,1,1,0,1  ,0,1,1,1,0,  1,0,1,0],
  [1,0,1,0,1, 0,0,0,0,0 ,1,0,0,0,1  ,0,0,0,1,0,  0,0,1,0],
  [1,0,1,0,1, 1,1,0,1,1 ,1,0,1,1,1  ,0,1,1,1,1,  1,1,1,0],
  [1,0,1,5,0, 0,1,0,1,0 ,0,0,0,6,1  ,0,0,0,0,0,  1,0,0,0],
  [1,0,1,1,1, 0,1,1,1,0 ,1,1,1,1,1  ,1,1,1,1,0,  1,0,1,1],
  [1,0,1,7,1, 0,0,0,0,0 ,1,0,0,0,0  ,0,0,0,0,0,  1,8,0,0],
  [1,0,1,0,1, 1,1,1,1,1 ,1,0,1,1,1  ,1,1,1,1,0,  1,1,1,0],
  [1,0,0,0,1, 0,0,0,0,0 ,1,0,1,9,0  ,0,0,0,0,0,  1,0,0,0],
  [1,0,1,1,1, 0,1,1,1,0 ,1,0,1,1,1  ,1,1,1,1,1,  1,0,1,1],
  [1,0,1,0,0, 0,1,10,0,0 ,0,0,1,0,0  ,0,0,0,0,0,  1,0,1,11],
  [1,0,1,0,1, 1,1,1,1,1 ,1,1,1,0,1  ,1,1,1,1,0,  1,0,1,0],
  [1,0,1,12,0, 0,1,0,0,0 ,0,0,0,0,1  ,13,0,0,1,0,  0,0,1,0],
  [1,0,1,1,1, 0,1,0,1,1 ,1,1,1,1,1  ,1,1,0,1,1,  1,1,1,0],
  [1,0,0,0,1, 0,1,0,1,14 ,0,0,0,0,0  ,0,0,0,1,0,  0,0,0,0],
  [1,1,1,0,1, 0,1,0,1,1 ,1,1,1,1,1  ,0,1,0,1,1,  1,1,1,0],
  [1,15,0,0,1, 0,0,0,0,0 ,0,0,0,0,0  ,0,1,0,0,0,  0,0,0,16]
];

// Posición inicial del dinosaurio
let dinoPosition = { row: 0, col: 0 }; // Fila 0, columna 0
let direction = 'right'; // Dirección inicial del dinosaurio
let musicOn = false;


document.addEventListener('keydown', function (event) {
  const { row, col } = dinoPosition;
  let newRow = row;
  let newCol = col;
  let rotation = null; // Controlará la rotación del dinosaurio

  switch (event.key) {
    case 'ArrowUp':
    case 'w':
    case 'W':
      newRow = row - 1;
      break;
    case 'ArrowDown':
    case 's':
    case 'S':
      newRow = row + 1;
      break;
    case 'ArrowLeft':
    case 'a':
    case 'A':
      newCol = col - 1;
      rotation = 180; // Rotar 180° sobre el eje Y
      direction = 'left'; // Cambiar la dirección del dinosaurio
      break;
    case 'ArrowRight':
    case 'd':
    case 'D':
      newCol = col + 1;
      rotation = 0; // Volver a la posición normal
      direction = 'right'; // Cambiar la dirección del dinosaurio
      break;
  }

  


  // Verifica si la nueva posición está dentro de los límites y es válida
  if (
    newRow >= 0 &&
    newRow < mazeMatrix.length &&
    newCol >= 0 &&
    newCol < mazeMatrix[0].length &&
    (mazeMatrix[newRow][newCol] === 0 || mazeMatrix[newRow][newCol] >= 2) // Permitir moverse a 0 o a mayores que 2
  ) {
    dinoPosition = { row: newRow, col: newCol };
    moverDinosaurio(newRow, newCol,rotation);

    let value = mazeMatrix[newRow][newCol];
    if (value >= 2 && value < 16) {
      console.log("¡El dinosaurio ha comido un fruto!");
      
      // 2 -> ind : 2,3
      // 3 -> ind : 4,5
      // 4 -> ind : 6,7
      let left_idx = 2*(value-1)
      actualizarSidebar("left", photos[value], obtainPhrase(Phrases[left_idx],value));
      actualizarSidebar("right", photos[value], obtainPhrase(Phrases[left_idx+1],value));

      //actualizarSidebar("left", photos[1], frases[2*(value-1)],180);
      //actualizarSidebar("right", photos[1], frases[2*(value-1)+1]);
      //mazeMatrix[newRow][newCol] = 0; // clean cell
    } else if (value==0){
      actualizarSidebar("left", photos[0], obtainPhrase(Phrases[0],20),180);
      actualizarSidebar("right", photos[0], obtainPhrase(Phrases[1],20));
    } else { // value = 16
      if (direction == 'right'){
        actualizarSidebar("left", photos[16], "Feliz día, mi amor");
        actualizarSidebar("right", photos[16], "Los dinosaurios también celebran el amor");
      }
    }

  }  else if (rotation !== null) {
    moverDinosaurio(row, col, rotation);
  }


});

function moverDinosaurio(row, col, rotation) {
  const cellHorSize = 24; // Horizontal size of cell
  const cellVerSize = 24; // Vertical size of cell
  const dinosaur = document.getElementById('dinosaur');
  dinosaur.style.top = `${row * cellVerSize+7}px`;
  dinosaur.style.left = `${col * cellHorSize-5}px`;

  // Rotar al dinosaurio si corresponde
  if (rotation !== null) {
    dinosaur.style.transform = `rotateY(${rotation}deg)`;
  }


  // Verificar si el dinosaurio llegó a la última casilla
  const lastRow = mazeMatrix.length - 1;
  const lastCol = mazeMatrix[0].length - 1;
  if (row === lastRow && col === lastCol && direction=='right') {
    mostrarCorazon();
    actualizarSidebar("left", photos[16], "Feliz día, mi amor");
    actualizarSidebar("right", photos[16], "Los dinosaurios también celebran el amor");
  }
  else ocultarCorazon();
  
}



function mostrarCorazon() {
  // Mostrar el contenedor del corazón
  document.getElementById('heartContainer').style.display = 'block';

  if (musicOn) return; // Si la música ya está sonando, no hacer nada

  musicOn = true; // Marcar que la música ya está sonando
  
  const audioPlayer = document.getElementById('audioPlayer');
  const audioSource = document.getElementById('audioSource');

  // Actualiza la fuente con la nueva canción
  audioSource.src = "dino.mp3";  // Cambia la URL de la canción

  // Reinicia el audio (en caso de que ya esté reproduciéndose) y reproduce la nueva canción
  audioPlayer.load();  // Esto recarga el nuevo archivo de audio
  audioPlayer.play();  // Reproduce el nuevo audio
}

function ocultarCorazon() {
  // Ocultar el contenedor del corazón
  document.getElementById('heartContainer').style.display = 'none';
}



function actualizarSidebar(side, photoUrl, phrase, rotationY = 0) {
  const photoElement = document.getElementById(`${side}Photo`);
  const phraseElement = document.getElementById(`${side}Phrase`);

  photoElement.src = photoUrl;
  phraseElement.textContent = phrase;
  photoElement.style.transform = `rotateY(${rotationY}deg)`;
}
