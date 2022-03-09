import React from 'react'
import { DiskDataObj } from './types'

interface DiskProps {
    diskData?: DiskDataObj
}

const DiskComponent = ({ diskData }: DiskProps) => {
    console.log('diskComponent', Date.now() ,diskData)
    return (
        <div>DiskComponent</div>
    )
}

export default DiskComponent