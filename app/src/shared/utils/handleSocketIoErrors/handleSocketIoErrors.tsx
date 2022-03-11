import React from 'react'

const handleSocketIoErrors = (message: string, error: any) => {
  console.log(message, error)

  if(error) return false;
  return true;
}

export default handleSocketIoErrors