import React from 'react'
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
    const { pending } = useFormStatus()
  return (
    <button className="bg-white w-fit mt-5 py-1 px-2 rounded-md font-semibold hover:opacity-90" disabled={pending}>{pending ? 'Submitting...' : 'Submit'}</button>
  )
}

export default SubmitButton