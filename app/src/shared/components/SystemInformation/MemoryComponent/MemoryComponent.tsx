import React, { useEffect } from 'react'
import { MemoryDataInterface } from './types'

interface MemoryProps {
    memoryData?: MemoryDataInterface
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