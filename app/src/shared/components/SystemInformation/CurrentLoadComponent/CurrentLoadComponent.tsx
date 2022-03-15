import React, { useEffect } from 'react'
import { CurrentLoadDataInterface } from './types'

interface CurrentLoadProps {
  currentLoadData?: CurrentLoadDataInterface
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