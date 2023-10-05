import Link from 'next/link'
import React from 'react'

const index = () => {
  return (<h1>
      read <Link href='post/firstPost'> This Page !</Link>
    </h1>
  )
}

export default index