import React from 'react'
import { Link } from 'react-router-dom'
import {IoClose} from 'react-icons/io5'

const Root = ({setShow}) => {
  return <>
    <div className='flex justify-center items-center lg:w-3/4'>
        <nav className='w-full'>
            <ul className='flex flex-col lg:flex-row h-64 lg:h-auto justify-between lg:justify-evenly'>
                <li className='flex justify-between'>
                    <Link onClick={()=>setShow(false)} className='link' to='/'>Home</Link>
                    <button onClick={()=>setShow(false)} className='text-3xl text-white'><IoClose /></button>
                </li>
                <li>
                    <Link onClick={()=>setShow(false)} className='link' to='/places'>Place to Stay</Link>
                </li>
                <li>
                    <Link onClick={()=>setShow(false)} className='link' to='/nfts'>NFTs</Link>
                </li>
                <li>
                    <Link onClick={()=>setShow(false)} className='link' to='/community'>Community</Link>
                </li>
            </ul>
        </nav>
    </div>
  </>
}

export default Root
