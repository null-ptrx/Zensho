import React from 'react'
import { useState, useEffect, useRef } from 'react'
import UserCard from '../components/UserCard'
const Users = () => {
        const [notes, setNotes] = useState([]);
    const fetchNotes = async () => {
        let res = await fetch('http://localhost:3000/api/notes')
        let data = await res.json();
        setNotes(data);
    }
    useEffect(() => {
        fetchNotes();
    }, [])
    return (
        <div className='flex gap-5 bg-black h-[92vh] text-white p-10'>
            <div className='p-5 w-[40vw]'>
                <h1 className='text-3xl'>All users</h1>
                <div className='overflow-y-scroll h-[70vh] mt-10 flex flex-col border bg-black'>
                    {notes.length === 0 ? <div>no user to show</div> :
                        notes.map((item) => {
                            return (<UserCard key={item._id} notes={item} />)
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Users