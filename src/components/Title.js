import React from 'react';

function Title(props){
    // const {titlestate,descriptionstate} = props;
    const {object} = props;
    return (
        <div>
            {/* <div>This is {props.Title1}.</div>
            <div>This is {props.Title2}</div>
            <div>This is {props.Title3}</div> */}
            {/* <div>{titlestate}</div>
            <div>{descriptionstate}</div> */}
            <div>{object}</div>
        </div>
    )
}

export default Title;