import React from 'react'
const UserCard = ({notes}) => {
    return (
        <div className='border-b p-4 flex flex-col text-white'>
            <span>name :{notes.name}</span>
            <span>email :{notes.email}</span>
            <span>Age :{notes.age}</span>
            <span>city :{notes.city} </span>
            <span>isActive :{notes.isActive ? 'true' : 'false'}</span>
            <span></span>
        </div>)
}
export default UserCard