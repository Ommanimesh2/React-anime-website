import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowInTheSidebar from "./Sidebar";
export default function Main() {
  console.log("Main component rendered");
  const [resp, setresp] = useState([]);

  const [clickedAnime, setClickedAnime]=useState({img:"https://images.unsplash.com/photo-1541562232579-512a21360020?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", title:"Anime Name", name:"genre"});
  const [text,setText]=useState('')
  console.log(resp.filter(user=>user.title.toLowerCase().includes(text)))

  const clickHandler=(e)=>{

console.log(e.target.tit);
    setClickedAnime({title:  e.target.alt, img: e.target.src, name:  e.target.id})
   console.log(clickedAnime)

  }

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://animes3.p.rapidapi.com/",
      headers: {
        "x-rapidapi-host": "animes3.p.rapidapi.com",
        "x-rapidapi-key": "b5f1922e52mshd2201407623362fp1fbe77jsn003bfc2bd1f6",
        useQueryString: true,
      },
    };

    axios
      .request(options)
      .then((response) => {
       
        setresp(response.data)
      })
      .catch((error) => {});
  }, []);
  console.log("After Callback Main component rendered");
  
  return (
    <>  
  
     <form className="d-flex">
              <input className="form-control searchBar me-2" onChange={e=>setText(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
          
            </form>
          
    <div className="main">
  
      <ShowInTheSidebar RequestedAnime={clickedAnime} />
      <div className="grid">
        {resp.filter((user)=>user.title.toLowerCase().includes(text)).map((e) => {
          return(
            <>
              
        <div className="center">
          <img
            src={e.img} 
            id={e.name}
            onClick={clickHandler}
            className="card-img-top wobble-hor-bottom"
            alt={e.title}
          />
          <div className="card-body my-2">
            <p className="card-text text-shadow-pop-top">{e.title}</p>
          </div>
        </div>
              </>
            ) })}
            </div>
    </div>
    </>

  );
}
