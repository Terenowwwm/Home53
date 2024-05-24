import React from 'react';
interface Props {
    text: string;
    key:string;
    deleteTask: () => void
}
const Task:React.FC<Props> = (props) => {
    return (
        <div className="task">
            <p>{props.text}</p>
            <div className='del' onClick={props.deleteTask}>del</div>
        </div>
    );
};

export default Task;