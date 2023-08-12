'use client'
import { useState } from 'react';
import Modal from './Modal'
import axios from 'axios'
import { useRouter } from 'next/navigation';

const AddPost = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [inputs, setInputs] = useState({})
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/posts', inputs).then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      setInputs({});
      setModalOpen(false);
      router.refresh();
    })
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(prevState => ({ ...prevState, [name]: value }))
  }

  return (
    <div>
      <button onClick={() => setModalOpen(true)} className='bg-blue-600 text-white py-1 px-2 rounded-sm'>Add New Post</button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} >
        <form className='w-full' onSubmit={handleSubmit} >
          <h1 className='text-xl pb-4' >Add New Post</h1>

          <input
            type="text"
            placeholder='Title'
            name='title'
            className='w-full p-2'
            value={inputs.title || ""}
            onChange={handleChange}
          />


          <input
            type="text"
            placeholder='Description'
            name='description'
            className='w-full p-2 my-4'
            value={inputs.description || ""}
            onChange={handleChange}
          />

          <button className='bg-blue-500 text-white py-1 px-2 '>Submit</button>

        </form>
      </Modal>
    </div>
  )
}

export default AddPost