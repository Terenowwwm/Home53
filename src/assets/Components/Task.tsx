import React from 'react';
interface Props {
    text: string;
    key:string;
}
const Task:React.FC<Props> = (props) => {
    return (
        <div className="task">
            <p>{props.text}</p>
            <div className='del'>del</div>
        </div>
    );
};

export default Task;