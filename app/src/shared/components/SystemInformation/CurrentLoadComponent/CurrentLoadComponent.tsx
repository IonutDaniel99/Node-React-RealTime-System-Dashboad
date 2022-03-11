import React, { useEffect } from 'react'
import { CurrentLoadInterface } from './types'

interface CurrentLoadProps {
  currentLoadData?: CurrentLoadInterface
}

const CurrentLoadComponent = ({ currentLoadData }: CurrentLoadProps) => {
  useEffect(() => {
    console.log("currentLoadData", Date.now(), currentLoadData);
  }, [currentLoadData])
  return (
    <div>CurrentLoadComponent</div>
  )
}

export default CurrentLoadComponent