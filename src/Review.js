//import rating for review to work
import Rating from "./Rating"

function Review(props){
    return(
       <div className="Review">
          <div>
             Review by {props.username}
          </div>
          <Rating stars = {props.rating} />
          <div>
             {props.text}
          </div>
       </div>
    )
 }

 export default Review