//referencias HTML

    const btnIniciar = document.querySelector('#btnIniciar'),
      btnDetener = document.querySelector('#btnDetener'),
      smalls = document.querySelectorAll('small'),
      btnEnviarCantidad = document.querySelector('#btnEnviarCantidad'),
      btnEnviarPaciente = document.querySelector('#btnEnviarPaciente');

    //contadores
    let totalAtendidos = 0,
        entregados1 = 0,
        entregados2 = 0;

    let medicamentos = 0;

    let porcentaje1 = 0,
        porcentaje2 = 0;
    const valores = () =>{
        let medicamento1 = parseInt(document.getElementById('m1').value);
        let medicamento2 = parseInt(document.getElementById('m2').value);
        let medicamentos = {medicamento1, medicamento2};
        return medicamentos;
    }
    const valoresPresion = () =>{
        let presSis = parseInt(document.getElementById('ps').value);
        let presDis = parseInt(document.getElementById('pd').value);
        document.getElementById("btnEnviarCantidad").style.display = "none";
        let presiones = [presSis, presDis];
        console.log(presiones)
        return presiones
    }

    const actualizar = (medicamentos)=>{
        console.log(medicamentos)
        smalls[0].innerText = medicamentos.medicamento1
        smalls[1].innerText = medicamentos.medicamento2
    }

    const calculoPorcentaje = (totalAtendidos, entregados1, entregados2)=>{
        porcentaje1 = (entregados1/totalAtendidos)*100;
        porcentaje2 = (entregados2/totalAtendidos)*100;
    }


    const tratamiento = (presiones, medicamentos)=>{
        let presSis = presiones[0],
            presDis = presiones[1];
        console.log(medicamentos)
        if(medicamentos.medicamento1>=10 && medicamentos.medicamento2>=6){
            switch(true){

                case(presSis > 162 && presDis < 86):
                    totalAtendidos +=1
                    entregados1 += 1;
                    medicamentos.medicamento1 -= 17;
                    break;

                case(presSis < 69 && presDis < 48):
                    medicamentos.medicamento2 -= 6;
                    totalAtendidos +=1
                    entregados2 +=1
                    break;

                case(presSis >= 69 && presSis <= 98 && presDis >= 48 && presDis <= 66):
                    totalAtendidos +=1
                    break;
    
                case (presSis >= 98 && presSis <= 143 && presDis >= 66 && presDis <= 92):
                    totalAtendidos +=1
                    entregados1 +=1
                    medicamentos.medicamento1 -= 2;
                    
                    break;
                
                case (presSis > 143 && presSis <= 177 && presDis > 92 && presDis <= 124):

                    totalAtendidos +=1
                    entregados1 +=1
                    medicamentos.medicamento1 -= 2

                    break;
    
                case (presSis > 177 && presSis <= 198 && presDis > 124 && presDis <= 142):
    
                    totalAtendidos +=1
                    entregados1 +=1
                    medicamentos.medicamento1 -= 10;
                    break;
    
                case (presSis > 198 && presSis <= 246 && presDis > 142 && presDis <= 169):
    
                    totalAtendidos +=1
                    entregados1 +=1
                    medicamentos.medicamento1 -= 15;
                    break;
    
                case (presSis >= 246 && presDis >= 169):
    
                    totalAtendidos +=1;
                    entregados1 += 1;
                    medicamentos.medicamento1 -= 35;
                    break;
                
                default:
                    totalAtendidos +=1;
    
                
            }
            calculoPorcentaje(totalAtendidos, entregados1, entregados2);
            
            smalls[2].innerText = totalAtendidos;
            smalls[3].innerText = entregados1;
            smalls[4].innerText = entregados2;
            smalls[5].innerText = porcentaje1.toFixed(2)
            smalls[6].innerText = porcentaje2.toFixed(2)

            actualizar(medicamentos)

        }
        


    }

    // const medicamentos = valores();


    btnIniciar.addEventListener('click', ()=>{
    document.getElementById("inputContainer").style.display = "block";

    
})


    /* btnEnviar.addEventListener('click',()=>{
        
        // console.log(medicamentos)
        
    }) */

    btnEnviarCantidad.addEventListener('click',()=>{
        document.getElementById("inventario").style.display = "block";
        medicamentos = valores();
        actualizar(medicamentos);
        document.getElementById("inputContainer").style.display = "none";
        document.getElementById("presiones").style.display = "block";
        

        
    })

    btnEnviarPaciente.addEventListener('click', ()=>{
        let presiones = valoresPresion();
        
        tratamiento(presiones, medicamentos)

        
    })

console.log(medicamentos)




