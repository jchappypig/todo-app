import React from 'react'

const newTodo = ({onChange}) => (
    <div>
        <h3>New</h3>
        <input type="text" onKeyUp={onChange}/>
    </div>
)

export default newTodo