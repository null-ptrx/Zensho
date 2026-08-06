import React from 'react'
import { useState, useEffect, useRef} from 'react'
const AddUser = () => {
    const focusRef = useRef(null);
    function focusInput() {
        focusRef.current.focus();
    }
    const [form, setForm] = useState({
        name: '',
        email: '',
        age: '',
        city: '',
        isActive: false,
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }
    const handleSubmit = async () => {
        await fetch('http://localhost:3000/api/notes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });
        setForm({
            name: '',
            email: '',
            age: '',
            city: '',
            isActive: false,
        })
    }
    const realHandleEdit = async (editUser) => {
        setForm(editUser);
    };
       useEffect(() => {
            focusInput();
        }, [])
  return (
      <div className='flex gap-5 bg-black h-[92vh] text-white p-10 items-center flex-col'>
            <h1 className='text-3xl'>Add new user</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }} className='mt-10 p-5 flex flex-col gap-10 items-center w-full'>

                <label>Name :<input ref={focusRef} name='name' onChange={handleChange} type='text' value={form.name} placeholder='enter name' className='bg-white text-black px-3' /></label>
                <label>Email :   <input name='email' onChange={handleChange} type='email' placeholder='enter email' value={form.email} className='text-black px-3 bg-white' /></label>

                <label>Age :  <input name='age' onChange={handleChange} type='number' placeholder='enter age' value={form.age} className='text-black px-3 bg-white' /></label>

                <label>City :  <input onChange={handleChange} name='city' type='text' placeholder='enter city' value={form.city} className='text-black px-3 bg-white' /></label>

                <label>Status :   <input name='isActive' onChange={(e) => {
                    const { name, checked } = e.target;
                    setForm(prev => ({ ...prev, isActive: checked }))
                }} type='checkbox' placeholder='enter status' checked={form.isActive} className='text-black px-3 bg-white' /></label>

                <button type="submit" className="bg-blue-600 px-5 py-1 rounded-xl">add</button>
            </form>
        </div>

  )
}

export default AddUser