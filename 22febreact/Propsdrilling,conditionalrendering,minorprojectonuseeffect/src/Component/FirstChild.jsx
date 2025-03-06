import React from 'react'
import GrandChild from './GrandChild'

const FirstChild = ({userId , title , completed}) => {
    // console.log(props); // it's show 2 times in the console
    
    // we can do another way

    // let{ userId , title , completed } =  props;
  return (
    <div>

    {/* instead of props we can do this directly destructureing */}
        {/* {userId} <br />
        {title} <br />
        {completed.toString()} <br /> */}

        {/* ************* */}
        {/* {props.userId} <br />
        {props.title} <br />
        {props.completed.toString()} <br /> */}
        {/* boolean data cannot show on UI normal way so we use toStirng() */}


        {/* sending the props through firstchild */}
        <GrandChild userId={userId} title = {title} completed = {completed}/>
    </div>
  )
}

export default FirstChild