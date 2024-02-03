const poem = `     r-p-o-p-h-e-s-s-a-g-r
who
a)s w(e loo)k
upnowgath
PPEGORHRASS
eringint(o-
aThe):l
eA
!p:
S                                                                        a
(r
rIvInG                              .gRrEaPsPhOs)
to
rea(be)rran(com)gi(e)ngly
,grasshopper;`;

/* Definimos el rango de colores a elegir */
const colorRange = [
  '#8B4513', // Marrón tierra
  '#9ACD32', // Amarillo verde
  '#556B2F', // Verde oliva
  '#006400', // Verde oscuro
  '#228B22', // Verde saltamontes
];

const sizes = ['10px', '15px', '20px', '25px', '30px'];

function getRandomColor() {
  const colorIndex = Math.floor(Math.random() * colorRange.length);
  return colorRange[colorIndex];
}

function getRandomSize() {
  return sizes[Math.floor(Math.random() * sizes.length)];
}

function updatePoem() {
  const poemEl = document.getElementById('poem');
  let newPoem = '';

  for (let i = 0; i < poem.length; i++) {
    const char = poem[i];
    const color = getRandomColor();
    const size = getRandomSize();
    const opacity = Math.round(Math.random());

    newPoem += `<span style="color: ${color}; font-size: ${size}; opacity: ${opacity};">${char}</span>`;
  }

  poemEl.innerHTML = newPoem;
}

setInterval(updatePoem, 700);
