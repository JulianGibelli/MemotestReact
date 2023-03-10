import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



//array de link de imagenes de tecnologias (10)
//se aplica un flatmap para que por cada imagen devuelva un conjunto "a|imagen b|imagen"
//luego se hace un flatMap para obtener un nivel de array
//y se le aplica un sort para generar un random de las imagenes en cuestion
const images = [
  "https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/babel-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/c-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/docker-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/django-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/facebook-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/git-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/mongodb-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/python-original.svg?size=128&color=currentColor",
]
  .flatMap((img) => {
    return [`a|${img}`, `b|${img}`];
  })
  .sort(() => Math.random() - 0.5);

  
  
  //Componente memotest principal  
  function Memotest() {
    //2 estados: para los seleccionados y los adivinados  
    const [guessed, setGuessed] = useState<string[]>([]);
    const [selected, setSelected] = useState<string[]>([]);
    
    const notify = () => toast("You won!");
  //useEffect que actuara cada vez que cambien los seleccionados
  //si seleccione 2 cartas y las url de las seleccionadas coinciden, agrega esas seleccionadas a adivinadas y setea guessed
  //si no son iguales, limpio las seleccionadas con un timeout al 1seg
  useEffect(() => {
    if (selected.length == 2) {
      if (selected[0].split("|")[1] == selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }

      setTimeout(() => {
        setSelected([]);
      }, 1000);
    }
  }, [selected]);

  //useEffect que actuara cada vez que cambien los adivinados
  //si la cantidad de adivinados coincide con longitud de array de imagenes es porque adivine todos!
  //alerto al usuario y refresco la pagina
  useEffect(() => {
    if (guessed.length == images.length) {
      notify()
      setTimeout(()=>{
        location.reload();

      },2000)
      
    }
  }, [guessed]);

  //con conditional rendering voy mostrando o no las cartas segun ya esten adivinadas o no
  //retorno una unica unordered list y dentro de ella mapeo cada una de las imagenes dentro de un list item
  //aplico condiciones a la imagen del list item segun ya esten dentro de las seleccionadas o las adivinadas, sino mostrare la imagen por defecto!
  return (
    <>
    <ul className="border-gradient border-gradient-purple" style={{display: "grid",gridTemplateColumns: "repeat(auto-fill,minmax(128px,1fr))",gap: "24px",padding:"20px"}}>
    

      {images.map((img) => {
        const [, url] = img.split("|");
        return (
          <li onClick={() =>selected.length < 2 && setSelected((selected) => selected.concat(img))} style={{padding: 4,border: "solid 1px #666",borderRadius: "10px",cursor: "url(https://img.icons8.com/color/48/null/tap-gesture.png), pointer"}} key={img}>

            {guessed.includes(img) || selected.includes(img) ? (<img key={img} src={url} alt="icon" />)
             : (<img src="https://icongr.am/clarity/eye.svg?size=128&color=e65b5b" />)}
          </li>
        );
      })}
    </ul>
      { (guessed.length == images.length) && <h2 style={{ margin:"10px auto",textAlign:"center",border:"solid 3px #444",width:"100%"}}>Congratulations!!</h2>}
    </>
  );
}

export default Memotest;


