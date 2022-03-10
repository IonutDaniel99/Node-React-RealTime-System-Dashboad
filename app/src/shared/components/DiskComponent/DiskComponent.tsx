import React, { useEffect } from 'react'
import { DiskDataObjInterface } from './types'

interface DiskProps {
    diskData?: DiskDataObjInterface
}

const DiskComponent = ({ diskData }: DiskProps) => {
    useEffect(() => {
        console.log("diskData", Date.now(), diskData);
    }, [diskData])
    return (
        <div>DiskComponent</div>
    )
}

export default DiskComponent