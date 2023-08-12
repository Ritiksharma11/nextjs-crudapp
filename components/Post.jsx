'use client'
import React, { useState } from 'react'
import Modal from './Modal'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Post = ({ post }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [postToEdit, setPostToEdit] = useState(post);

  const [openModalDelete, setOpenModalDelete] = useState(false);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    axios.patch(`/api/posts/${post.id}`, postToEdit).then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      setOpenModalEdit(false);
      router.refresh();
    })
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPostToEdit(prevState => ({ ...prevState, [name]: value }))
  }

  const handleDelete = (id) => {
    axios.delete(`/api/posts/${id}`).then((res) => {
      console.log(res);
    }).catch((error) => {
      
      console.log(error);
    }).finally(() => {
      setOpenModalEdit(false);
      router.refresh();
    })
  }


  return (
    <li className='p-2 my-2 bg-slate-200' key={post.id} >
      <h1 className='text-xl font-semibold' >{post.title}</h1>
      <p className='text-lg'>{post.description}</p>

      <div className='pt-5'>
        <button onClick={() => setOpenModalEdit(true)} className='mr-4 text-blue-600 font-semibold'>Edit</button>

        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit} >
          <form className='w-full' onSubmit={handleEditSubmit} >
            <h1 className='text-xl pb-4' >Add New Post</h1>

            <input
              type="text"
              placeholder='Title'
              name='title'
              className='w-full p-2'
              value={postToEdit.title || ""}
              onChange={handleChange}
            />


            <input
              type="text"
              placeholder='Description'
              name='description'
              className='w-full p-2 my-4'
              value={postToEdit.description || ""}
              onChange={handleChange}
            />

            <button className='bg-blue-500 text-white py-1 px-2 '>Submit</button>

          </form>
        </Modal>

        <button onClick={() => setOpenModalDelete(true)} className='text-red-600 font-semibold'>Delete</button>

        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete} >
          <h1 className='text-xl pb-4'>Are you sure,You want to delete this Post?</h1>

          <div>
            <button onClick={() => handleDelete(post.id)} className='text-blue-600 mr-5'>Yes</button>
            <button onClick={() => setOpenModalDelete(false)} className='text-red-600'>No</button>
          </div>
        </Modal>

      </div>
    </li>
  )
}

export default Post