import { arrayTecnologias } from "./Tecnologias"


function buscarHabilidad(id){

  const tecnologia=arrayTecnologias.filter(tecnologia=> tecnologia.id===Number(id))

  return tecnologia


  
}


function buscarTecnologia(nombre){
  const tecnologia=arrayTecnologias.filter(tecnologia=>tecnologia.nombre===nombre)

  return tecnologia

}

export {buscarHabilidad, buscarTecnologia}