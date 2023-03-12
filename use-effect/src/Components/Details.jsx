import React from 'react'
import { useState, useEffect, useRef } from 'react';

export default function Details(props) {
    const [content, setContent] = useState([])
    const[loading, setLoading] = useState(false)
    const {object} = props;
    const timestampRef = useRef();
    let contentRender;


    const getitem = async(id)=>{
      const timestamp = Date.now();
      timestampRef.current = timestamp;
      setLoading(true);
      try {const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${String(id)}.json`);
          if (!response.ok) { 
              throw new Error(response.statusText); 
          }
          const news = await response.json();
          if (timestampRef.current === timestamp) { 
              setContent(news); 
          }
          } catch (e) {
              setContent(e);       
          } finally { 
              setLoading(false); 
          }
      };

    const getfunc = () =>{
        if(object !='' ){
            contentRender='load';
            getitem(object.id);
        };
    };



    useEffect(getfunc,[object])


    if(content !=''){
        contentRender = (<div className='detail'>
            <div className='avatar'><img src={content.avatar} alt="" /> </div>
            <div className='name'>{content.name}</div>
            <div className="city">City:{content.details.city}</div>
            <div className="city">Company:{content.details.company}</div>
            <div className="position">Position:{content.details.position}</div>
        </div>)
        };  


  return (
    <div className='Item'>
      {loading && <p>Loading</p>}
      {contentRender}
    </div>
  )
}


