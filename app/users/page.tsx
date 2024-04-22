import React from 'react'

interface User {
    id: number,
    name: string
}

const UsersPage = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users',{
    cache: 'no-store'
  })
  const users: User[] = await res.json()

  return (
    <>
       hi 
    </>
  )
}

export default UsersPage