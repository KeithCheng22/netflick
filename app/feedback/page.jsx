'use client'
import { z } from "zod";
import toast, { Toaster } from 'react-hot-toast'; // client side
import SubmitButton from "@/components/SubmitButton";
import { useRouter } from "next/navigation";

const feedbackSchema = z.object({
  name: z.string().min(1, { message: "Name must be at least 1 character long" }).max(100, { message: "Name must be less than 100 characters long" }),
  message: z.string().min(1, { message: "Message must be at least 1 character long" })
})

const Feedback = () => {
  const router = useRouter()
  const clientAction = (formData) => {

  const newFeedback = {
    name: formData.get('name'),
    message: formData.get('message')
  }
    
  const result = feedbackSchema.safeParse(newFeedback)
  if (!result.success) {
    const errorArray = result.error.issues
    errorArray.forEach(error => toast.error(error.message, {id: error.message}))
    
  }
  else {
    console.log(newFeedback)
    toast.success('Successfully sent!')
    setTimeout(() => router.push('/'), 3000)
  }
  }

  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
/>
    <form action={clientAction} className='flex flex-col'>
      <label htmlFor='name' className='text-white'>Name: </label>
      <input className='indent-1 outline-none rounded-sm' type='text' name='name' placeholder='Keith'></input>

      <label htmlFor='message' className='text-white mt-3'>Message: </label>
      <textarea className='indent-1 outline-none rounded-sm' name='message' placeholder='Message goes here...'></textarea>

      <SubmitButton />
    </form>
    </>
  )
}

export default Feedback