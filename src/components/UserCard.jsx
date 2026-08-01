import React from 'react'
const UserCard = ({ notes, handleDelete, handleEdit }) => {
    return (
        <div className='flex justify-between border p-4'>
            <div className='flex flex-col text-white'>
                <span>name :{notes.name}</span>
                <span>email :{notes.email}</span>
                <span>Age :{notes.age}</span>
                <span>city :{notes.city} </span>
                <span>isActive :{notes.isActive ? 'true' : 'false'}</span>
                <span></span>
            </div>
            <div className='text-white flex flex-col justify-center gap-4'>
                <button onClick ={()=>{handleDelete(notes._id)}} className='bg-blue-600 px-5 py-1 rounded-xl'>delete</button>
                <button onClick={()=>{handleEdit(notes._id)}} className='bg-blue-600 px-5 py-1 rounded-xl'>edit</button>
            </div>
        </div>
    )
}
export default UserCard