import React from 'react'

const Contact = (props) => {
  const sendMail = async (e) => {
    e.preventDefault()
    const fields = [
      { name: document.getElementById('nameInput') },
      { email: document.getElementById('emailInput') },
      { subject: document.getElementById('subjectInput') },
      { message: document.getElementById('messageInput') },
    ]

    const formData = {}
    fields.forEach((field) => {
      const name = Object.keys(field)[0]
      const value = Object.values(field)[0].value
      if (!value) {
        props.openSnackbar(props.snackBarErrors.MISSING_FIELDS)
        return
      }
      formData[name] = value
    })

    if (Object.keys(formData).length < fields.length) return

    const res = await fetch('http://localhost:3000/api/send-mail', {
      method: 'POST',
      body: JSON.stringify(formData),
    })

    if (res.status == 200) {
      fields.forEach((field) => {
        const input = Object.values(field)[0]
        input.value = ''
      })
      // Object.values(fields[0])[0].focus() // Focus on name input (?)

      props.openSnackbar(props.snackBarErrors.NO)
    } else {
      props.openSnackbar(props.snackBarErrors.SERVER_ERROR)
    }
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center py-8 w-11/12 mx-auto'>
      <div className='w-11/12 lg:w-4/5 xl:w-3/5 mx-auto' id='contact'>
        <h1 className='uppercase text-6xl w-full text-center font-mono'>
          Contact Me
        </h1>
        <form className='lg:mt-8 mt-3'>
          <div className='flex flex-col lg:flex-row justify-between'>
            <div className='w-full lg:w-1/2'>
              <label className='flex flex-col lg:flex-row lg:items-center w-full'>
                <div className='lg:inline'>
                  Name<span className='ml-1 text-[#E0AF68]'>*</span>
                </div>
                <input
                  id='nameInput'
                  type='text'
                  className='w-full lg:ml-2 lg:w-5/6 p-2 rounded-md bg-zinc-900 border-2 border-zinc-400 transition-shadow ease-in-out focus-visible:outline-0 duration-300 focus:outline-none focus:shadow-[0_0_0_1px_ghostwhite]'
                />
              </label>
            </div>
            <div className='w-full lg:w-1/2 lg:text-right'>
              <label className='flex flex-col lg:flex-row items-start lg:items-center w-full'>
                <div className='lg:inline lg:ml-auto'>
                  Email<span className='ml-1 text-[#E0AF68]'>*</span>
                </div>
                <input
                  id='emailInput'
                  type='email'
                  className='w-full lg:ml-2 lg:w-5/6 p-2 rounded-md bg-zinc-900 border-2 border-zinc-400 transition-shadow ease-in-out focus-visible:outline-0 duration-300 focus:outline-none focus:shadow-[0_0_0_1px_ghostwhite]'
                />
              </label>
            </div>
          </div>

          <label className='block mt-2'>
            Subject<span className='ml-1 text-[#E0AF68]'>*</span>
            <input
              id='subjectInput'
              type='text'
              className='w-full mt-1 p-2 rounded-md bg-zinc-900 border-2 border-zinc-400 transition-shadow ease-in-out focus-visible:outline-0 duration-300 focus:outline-none focus:shadow-[0_0_0_1px_ghostwhite]'
            />
          </label>

          <label className='block mt-2'>
            Message<span className='ml-1 text-[#E0AF68]'>*</span>
            <textarea
              id='messageInput'
              rows='10'
              columns='50'
              className='w-full mt-1 p-2 rounded-md bg-zinc-900 border-2 border-zinc-400 transition-shadow ease-in-out focus-visible:outline-0 duration-300 focus:outline-none focus:shadow-[0_0_0_1px_ghostwhite]'
            ></textarea>
          </label>

          <button
            onClick={sendMail}
            className='p-3 mt-2 rounded-full bg-[#7AA2F7] text-zinc-900 font-bold box-border transition-all ease-in-out duration-200 hover:scale-[1.15] hover:bg-transparent hover:text-[#7AA2F7] border-4 border-transparent hover:border-[#7AA2F7]'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
