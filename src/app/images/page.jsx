import React from 'react'
import img from '/assets/3.png';
import Image from 'next/image'
const page = () => {
  return (
    <div>
        we will show the image here
        <Image src={img} 
        alt='image'
        width={500} 
        height={300}
        />

    </div>
  )
}

export default page