import React from 'react';
import './TitleCss.css';
function Title({obj, key}){
    // const {titlestate,descriptionstate} = props;
    // const {object} = props;
    // return (
    //     <div>
    //         {/* <div>This is {props.Title1}.</div>
    //         <div>This is {props.Title2}</div>
    //         <div>This is {props.Title3}</div> */}
    //         <div>{titlestate}</div>
    //         <div>{descriptionstate}</div>
    //         <div>{object}</div>
    //     </div>
    // )

    return (
        <div className='main'>
            <h2 className='Title'>ID: {obj.id} Title: {obj.title} Description: {obj.description}</h2>
        </div>
    )

}

export default Title;