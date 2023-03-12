import React from 'react'
import { useState, useEffect } from 'react';


export default function List(props) {
    const {onChange} = props;
    const [content, setContent] = useState('')
    const [prevbtn, setPrev] = useState('')
    let renderMenu;

    console.log(import.meta.env.VITE_SOME_KEY)


    const getListMenu = async ()=> {
        let response = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
        let list = await response.json();
        setContent([...list])
        
    };

    const getData = ()=>{
        getListMenu();   
    };

    const dellHighlighting = ()=>{
        let btns = document.querySelectorAll('.Menubtn');
        for (let i=0; i<btns.length;i++){
            btns[i].classList.remove('MenuBtnActive')
        };
    };


    const getValue = (e) =>{
        dellHighlighting();
        e.target.classList.add('MenuBtnActive')
        const target = {
            id:e.target.id,
            value:e.target.innerHTML
        }
        if(target.id != prevbtn){
            setPrev(target.id)
            onChange(target)
        }
        

    }

    useEffect(getData,[]);

    if(content.length>0){
    renderMenu = content.map((element)=>{
        return  <div onClick={getValue} key={element.id} id={element.id} className='Menubtn'>{element.name}</div>
        })  
    };

  return (
    <div>
        {renderMenu}
    </div>
  )
}
