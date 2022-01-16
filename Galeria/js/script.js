// Entonro:
const ampliada = document.querySelector('.imagenAmpliada');
const galeria = document.querySelector('.galeria');
const opciones = document.querySelector('#opciones')
const imagenes = galeria.getElementsByTagName("img");

window.onload = () => {
    const castillo = ["https://www.eluniversal.com.mx/sites/default/files/2020/04/02/hogwarts.jpg",
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/10/castillo-hogwarts-dreams-ps4-2511049.jpg?itok=05NjSNo7",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hogwarts_%2829353868725%29.jpg/1280px-Hogwarts_%2829353868725%29.jpg",
        "https://www.nintenderos.com/wp-content/uploads/2021/12/Hogwarts-Gawalpop.jpg",
        "https://media.traveler.es/photos/61376a95d4923f67e298ea39/16:9/w_2560%2Cc_limit/148359.jpg"
    ];
    let texto = "";
    for (let i = 0; i < castillo.length; i++) {
        texto += `<img class="imagenes" src="${castillo[i]}" alt="">`;
    }
    galeria.innerHTML = texto;
}


opciones.addEventListener('change', (element) => {
    galeria.innerHTML = "";
    console.log(element.value);
    galeria.innerHTML = opcionElegida(element.target.value);

})

document.addEventListener("mouseover", (e) =>{
    if(e.target.classList.contains("imagenes")){
        ampliada.style.background = `url('${e.target.src}')`
        ampliada.style.backgroundSize = "contain"
        ampliada.style.backgroundRepeat = "no-repeat"
        ampliada.style.backgroundPosition = "center"
    }else{
        ampliada.style.background = `url('./img/harry-potter-logo.png')`
        ampliada.style.backgroundSize = "contain"
        ampliada.style.backgroundRepeat = "no-repeat"
        ampliada.style.backgroundPosition = "center"
    }
    
})




function opcionElegida(opcion) {
    let texto = "";
    if (opcion == "castillo") {
        for (let i = 0; i < castillo.length; i++) {
            texto += `<img class="imagenes" src="${castillo[i]}" alt="">`;
        }
    } else if (opcion == "profesores") {
        for (let i = 0; i < profesores.length; i++) {
            texto += `<img class="imagenes" src="${profesores[i]}" alt="">`;
        }
    } else {
        for (let i = 0; i < alumnos.length; i++) {
            texto += `<img class="imagenes" src="${alumnos[i]}" alt="">`;
        }
    }
    return texto;
}


const castillo = ["https://www.eluniversal.com.mx/sites/default/files/2020/04/02/hogwarts.jpg",
    "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/10/castillo-hogwarts-dreams-ps4-2511049.jpg?itok=05NjSNo7",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hogwarts_%2829353868725%29.jpg/1280px-Hogwarts_%2829353868725%29.jpg",
    "https://www.nintenderos.com/wp-content/uploads/2021/12/Hogwarts-Gawalpop.jpg",
    "https://media.traveler.es/photos/61376a95d4923f67e298ea39/16:9/w_2560%2Cc_limit/148359.jpg"
];
const profesores = ["https://sm.ign.com/ign_latam/screenshot/default/template-27_rq43.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/alastor-moody-1582703992.jpg",
    "https://i.pinimg.com/550x/82/cc/c7/82ccc7d2cfd34c5b3a41dc8592d6e8d6.jpg",
    "https://i.pinimg.com/originals/fe/41/f6/fe41f68b09cca7ada080441e70310220.jpg",
    "https://fotografias.flooxernow.com/clipping/cmsimages01/2019/12/04/9F3B4442-8281-4CD4-8C0C-72100C5866D2/69.jpg?crop=1280,720,x0,y0&width=1280&height=720&optimize=low&format=webply"
];

const alumnos = [
    "https://imagenes.elpais.com/resizer/A1pjYP_jCWp_zyPIt1HttIRWm3o=/1960x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/6EHLH4XJ6MOVORC3EUMEE2NJ6I.jpg",
    "https://urbanian.mundodeportivo.com/p/533c/18884_esta_triste_teoria_podria_explicar_por_que_hay_tan_pocos_alumnos_en_el_curso_de_harry_potter__thumb_fb.jpg?cb=5719389",
    "https://fotografias.antena3.com/clipping/cmsimages01/2018/03/27/99619070-FECA-4F30-A27F-B22F11E65C84/98.jpg?crop=1122,631,x0,y0&width=1900&height=1069&optimize=high&format=webply",
    "https://es.web.img3.acsta.net/newsv7/16/05/26/18/07/079083.jpg",
    "https://es.web.img3.acsta.net/newsv7/17/01/03/13/45/437101.jpg"
];


