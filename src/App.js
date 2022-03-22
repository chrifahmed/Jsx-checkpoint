import imagineInSrc from "./wave.jpg" ;

const App =()=> {
  return (
    <>

<div style= {{ border : "solid 1px black" , maxWidth:"100vw"}} > 

<h1 class="title red">Cherif Ahmed</h1>

<br />

<img src= {imagineInSrc} alt = " test " />

<br />

<img src="/mountain.jpg" />

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>






    </>
  )
}
export default App