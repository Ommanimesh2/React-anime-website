import React from 'react'

const Likebutton = ({data}) => {
  const makeLink="https://en.wikipedia.org/wiki/"+data
  console.log(data);
  return (
    <>
<div className="frame">
  <a href={makeLink} target="_blank"><button className="custom-btn btn-5"><span>Read More</span></button></a>
  
</div>
    </>
  )
}

export default Likebutton
