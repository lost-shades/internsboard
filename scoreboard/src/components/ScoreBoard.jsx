import React,{useEffect, useState} from 'react'
import { InternsData } from './InternsData'
import { InternsDetail } from './InternsDetail'

const ScoreBoard = () => {
    const [datas] = useState(InternsData)
    const [selectedUser, setSelectedUser] = useState("")
    const [isModalOpen, setIsModalOpen] =useState(false)

    useEffect(() => {
        if (selectedUser) {
            console.log(selectedUser.name)
        }
    }, [selectedUser])

    const handleClick = (name) => {
        const user = datas.find((data) => (data.name === name))
        setSelectedUser(user)
        setIsModalOpen(true)
    }

  return (
    <main>
        {
            datas.map((data, index) => (
                <div key={index}>
                    <p onClick={() => handleClick(data.name)}>{data.name} <span>{data.score}</span></p>
                </div>
            ))
        }
        <InternsDetail user={selectedUser}/>
    </main>
  )
}

export default ScoreBoard