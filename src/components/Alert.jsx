import React from 'react'

const Alert = ({ type, text }) => {
  return (
    <div className={`flex items-center bg-${type === 'danger' ? 'red-800' : 'blue-800'} p-4 rounded shadow-md`} role='alert'>
      <div className={`flex items-center justify-center h-8 w-8 rounded-full ${type === 'danger' ? 'bg-red-500' : 'bg-blue-500'} mr-4`}>
        <svg className={`fill-current w-4 h-4 ${type === 'danger' ? 'text-red-100' : 'text-white'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-12.73a2 2 0 0 0-2.83 2.83L5.4 10.4a1 1 0 0 0 1.4 1.4l4.69 4.69a2 2 0 0 0 2.83 0 2 2 0 0 0 0-2.83L8.8 12.4a1 1 0 1 0-1.4-1.4L11.27 8.27z"/></svg>
      </div>
      <div>
        <p className={`font-bold ${type === 'danger' ? 'text-red-100' : 'text-white'}`}>{type === 'danger' ? 'Failed' : 'Success'}</p>
        <p className={`text-sm ${type === 'danger' ? 'text-red-200' : 'text-gray-100'}`}>{text}</p>
      </div>
    </div>
  )
}

export default Alert