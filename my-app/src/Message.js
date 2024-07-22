import ListGroup from "./components/ListGroup"

function Message() {
    const name = 'vivek'
    let items = ["Delhi", "Bengaluru", "Mumbai", "Chennai","Kolkata", "Hyderabad"]
    let heading = "LIST"
    const handleClickBar = (item) => console.log(item)
    return <div   
    className = "image"
    style = {{
    //    height: "350px",
    //    width: "550px",
    //    backgroundImage:
    //    'url("https://www.thehosteller.com/_next/image/?url=https%3A%2F%2Fstatic.thehosteller.com%2Fhostel%2Fimages%2F1.jpg%2F1-1682311247439.jpg&w=2048&q=75")',
    //    backgroundSize: "contain",
    //    backgroundRepeat: "no-repeat",
    backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'  
    }}

    // style = {{
    //     backgroundImage:
    //     'url(https://www.thehosteller.com/_next/image/?url=https%3A%2F%2Fstatic.thehosteller.com%2Fhostel%2Fimages%2F1.jpg%2F1-1682311247439.jpg&w=2048&q=75)',
    //  }}
  > </div>
  
  {/* <ListGroup items= {items} heading = "LIST" onSelectItem={handleClickBar}/></div> */}
}

export default Message;
