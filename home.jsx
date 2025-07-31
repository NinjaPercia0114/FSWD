import './home.css';

function Home() {
    var a = 10
    var b = 20

    var mycolor = {color:'red',backgroundColor:'Black'}
    return(
        <> 
        <h1>
            Home
        </h1>
        A value is {a} <br />
        B value is {b}

        <p style={{color:'red',backgroundColor: "black"}}> Hello I am P tag</p>
        <p style={{color:'red',backgroundColor: "black"}}> Hello I am P tag</p>
        <p style={mycolor}>I am p again and this is internal css</p>

        {/* <img src={}/> */}
        </>
    )
}
export default Home