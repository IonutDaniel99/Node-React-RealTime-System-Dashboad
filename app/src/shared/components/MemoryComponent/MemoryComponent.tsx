import React, { useEffect } from 'react'
import { MemoryInterface } from './types'

interface MemoryProps {
    memoryData?: MemoryInterface
}

const MemoryComponent = ({ memoryData }: MemoryProps) => {
    useEffect(() => {
        console.log("MemoryComponent", Date.now(), memoryData);
    }, [memoryData])
    return (
        <div>MemoryComponent</div>
    )
}

export default MemoryComponent