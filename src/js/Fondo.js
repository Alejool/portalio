



export function bgTarjeta(img){
  
  // agregar el fondo a cada tarjeta 
  const gradiente='linear-gradient(to bottom, #00000090 1%,  #00000090 100%)'
  const bg=`url(${img})`
  const style= {backgroundImage: `${gradiente}, ${bg}`}

  return style;
}

