import React from 'react'
import Navbar from './componets/Navbar'
import Footer from './componets/Footer'
import { useState, useEffect } from 'react'
const App = () => {
    const [notes, setNotes] = useState([]);
    const [form, setForm] = useState({
        name : '',
        email : '',
        age : '',
        city :  '',
        isActive: '',
    })
    const handleChange = (e) => {
        const { name, value} = e.target;
        setForm(prev => ({...prev, [name] : value}));
        
    }
    const handleSubmit = async () => {
        await fetch('http://localhost:3000/api/notes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });
        fetchNotes();
    }
    const fetchNotes = async () => {
        let res = await fetch('http://localhost:3000/api/notes')
        let data = await res.json();
        setNotes(data);
      
    }
    useEffect(() => {
        fetchNotes();
    }, [])
    return (
        <div>
            <Navbar />

            <div className='flex gap-5 bg-black h-screen text-white p-10'>
                <div className='p-5 w-[40vw]'>
                    <h1 className='text-3xl'>All users</h1>
                    <div className='overflow-scroll h-full mt-10 flex flex-col gap-10 border bg-black'>
                        {notes.length === 0 ? <div>no user to show</div> :
                            notes.map((item) => {
                                return (
                                    <div key={item._id} className='border flex flex-col gap-4 text-white p-3'>
                                        <span>name :{item.name}</span>
                                        <span>email :{item.email}</span>
                                        <span>Age :{item.age}</span>
                                        <span>city :{item.city} </span>
                                        <span>isActive :{item.isActive}</span>
                                        <span></span>
                                    </div>)
                            })
                        }
                    </div>
                </div>

                <div className='p-5 w-[50vw]'>
                    <h1 className='text-3xl'>Add new user</h1>
                    <div className='mt-10 p-5 flex flex-col gap-10 items-center w-full'>

                        <div>Name : <input name = 'name' onChange = {handleChange} type='text' value={form.name} placeholder='enter name' className='bg-white text-black px-3' /></div>

                        <div>Email :   <input name= 'email' onChange = {handleChange} type='email' placeholder='enter email' value={form.email} className='text-black px-3 bg-white' /></div>

                        <div>Age : <input name = 'age' onChange = {handleChange} type='number' placeholder='enter age' value={form.age} className='text-black px-3 bg-white' /></div>

                        <div>city : <input onChange={handleChange} name = 'city' type='text' placeholder='enter city' value={form.city} className='text-black px-3 bg-white' /></div>

                        <div>isActive : <input name = 'isActive' onChange = {handleChange} type='boolean' placeholder='enter status' value={form.isActive} className='text-black px-3 bg-white' /></div>
                        
                        <button onClick={()=>handleSubmit()}className='bg-blue-600 px-5 py-1 rounded-xl'>add</button>
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App