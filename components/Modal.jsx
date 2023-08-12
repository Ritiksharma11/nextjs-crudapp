import { useState } from "react"

const Modal = ({ children, modalOpen, setModalOpen }) => {
  return (
    <>
      {
        modalOpen && (
          <div className="bg-black/50 fixed inset-0 ">
            <div className="flex justify-center items-center h-full ">
              <div className="flex flex-col items-end bg-slate-100 w-3/4 md:w-2/3 lg:w-1/2 p-5 ">
                <button onClick={() => setModalOpen(false)} className="text-2xl mb-2">&times;</button>
                {children}
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Modal