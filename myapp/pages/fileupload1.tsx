












const handleVideo = (e:any) => {
    console.log(e.target.files[0]);
}


function Fileupload1() {
  return (
    <>
            
            
            <input type="file" name="video" id="video" onChange={ handleVideo }/>
            <button>Click me</button>    
            
    </>
  );
}



export default Fileupload1;