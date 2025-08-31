'use client'
import { Input } from '@/components/ui/input'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Instagram, Mail, Github, Linkedin } from 'lucide-react'
import { toast } from "sonner"

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  async function HandleClick() {
    if (!email || !name || !msg) {
      toast.error("Please fill all fields")
      return
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message: msg })
      })

      if (res.ok) {
        toast('Message sent ✅')
        setEmail('')
        setName('')
        setMsg('')
      } else {
        const data = await res.json().catch(() => ({}))
        toast.error(data.error || 'Failed to send message ❌')
      }
    } catch (err) {
      toast.error('Error occurred while sending ❌')
    }
  }

  return (
    <>


    <div id='contact-section' className='min-h-screen md:h-screen py-8 md:py-0 bg-[#0D0D0D] mb-10 pb-10 text-[#F2F2F2] px-6 pt-20'>
      
      {/* Header */}
      <div className="flex flex-row justify-center items-center gap-6 mb-12">
        <svg width="50" height="50" className='navbar' viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_104_193)"> <path fillRule="evenodd" clipRule="evenodd" d="M116.3 75.4739L149.353 42.4212C151.625 40.1498 155.307 40.1498 157.579 42.4212C159.85 44.6927 159.85 48.3754 157.579 50.6468L124.526 83.6996C131.986 82.0231 140.696 81.0606 150 81.0606C177.614 81.0606 200 89.5401 200 100C200 110.46 177.614 118.939 150 118.939C140.696 118.939 131.986 117.977 124.526 116.3L157.579 149.353C159.85 151.625 159.85 155.307 157.579 157.579C155.307 159.85 151.625 159.85 149.353 157.579L116.3 124.526C117.977 131.986 118.939 140.697 118.939 150C118.939 177.614 110.46 200 100 200C89.5401 200 81.0606 177.614 81.0606 150C81.0606 140.696 82.0231 131.986 83.6996 124.526L50.6468 157.579C48.3754 159.85 44.6927 159.85 42.4213 157.579C40.1499 155.307 40.1499 151.625 42.4213 149.353L75.474 116.3C68.0135 117.977 59.3035 118.939 50 118.939C22.3858 118.939 0 110.46 0 100C0 89.5401 22.3858 81.0606 50 81.0606C59.3035 81.0606 68.0136 82.0231 75.474 83.6996L42.4213 50.6469C40.1499 48.3755 40.1499 44.6928 42.4213 42.4213C44.6927 40.1499 48.3754 40.1499 50.6468 42.4213L83.6996 75.4741C82.0231 68.0136 81.0606 59.3036 81.0606 50C81.0606 22.3858 89.5401 0 100 0C110.46 0 118.939 22.3858 118.939 50C118.939 59.3035 117.977 68.0135 116.3 75.4739Z" fill="url(#paint0_linear_104_193)"/> </g> <defs> <linearGradient id="paint0_linear_104_193" x1="177" y1="-9.23648e-06" x2="39.5" y2="152.5" gradientUnits="userSpaceOnUse"> <stop stopColor="#B0B9FF"/> <stop offset="1" stopColor="#E7E9FF"/> </linearGradient> <clipPath id="clip0_104_193"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>
        <h1 className="text-4xl sm:text-6xl md:mt-10 font-bold tracking-wider">CONTACT</h1>
        <svg width="50" height="50" className='navbar' viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_104_193)"> <path fillRule="evenodd" clipRule="evenodd" d="M116.3 75.4739L149.353 42.4212C151.625 40.1498 155.307 40.1498 157.579 42.4212C159.85 44.6927 159.85 48.3754 157.579 50.6468L124.526 83.6996C131.986 82.0231 140.696 81.0606 150 81.0606C177.614 81.0606 200 89.5401 200 100C200 110.46 177.614 118.939 150 118.939C140.696 118.939 131.986 117.977 124.526 116.3L157.579 149.353C159.85 151.625 159.85 155.307 157.579 157.579C155.307 159.85 151.625 159.85 149.353 157.579L116.3 124.526C117.977 131.986 118.939 140.697 118.939 150C118.939 177.614 110.46 200 100 200C89.5401 200 81.0606 177.614 81.0606 150C81.0606 140.696 82.0231 131.986 83.6996 124.526L50.6468 157.579C48.3754 159.85 44.6927 159.85 42.4213 157.579C40.1499 155.307 40.1499 151.625 42.4213 149.353L75.474 116.3C68.0135 117.977 59.3035 118.939 50 118.939C22.3858 118.939 0 110.46 0 100C0 89.5401 22.3858 81.0606 50 81.0606C59.3035 81.0606 68.0136 82.0231 75.474 83.6996L42.4213 50.6469C40.1499 48.3755 40.1499 44.6928 42.4213 42.4213C44.6927 40.1499 48.3754 40.1499 50.6468 42.4213L83.6996 75.4741C82.0231 68.0136 81.0606 59.3036 81.0606 50C81.0606 22.3858 89.5401 0 100 0C110.46 0 118.939 22.3858 118.939 50C118.939 59.3035 117.977 68.0135 116.3 75.4739Z" fill="url(#paint0_linear_104_193)"/> </g> <defs> <linearGradient id="paint0_linear_104_193" x1="177" y1="-9.23648e-06" x2="39.5" y2="152.5" gradientUnits="userSpaceOnUse"> <stop stopColor="#B0B9FF"/> <stop offset="1" stopColor="#E7E9FF"/> </linearGradient> <clipPath id="clip0_104_193"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>

      </div>

      {/* Main layout */}
      <div className='flex flex-col lg:flex-row lg:justify-between justify-center items-start gap-12 max-w-6xl mx-auto'>
        
        {/* Left: Form */}
        <div className='bg-[#1a1a1a] flex flex-col gap-6 p-6 sm:p-8 rounded-2xl w-full lg:w-[400px]'>
          <div className='space-y-1'>
            <label className='text-[#F2F2F2] text-lg font-medium'>Email</label>
            <Input 
              type='email' 
              required
              placeholder='something@something.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              className='bg-transparent text-xl border-0 text-[#F2F2F2] ring-0 placeholder:text-gray-400 focus-visible:ring-0'
            />
          </div>
          <div className='space-y-1'>
            <label className='text-[#F2F2F2] border-0 text-lg font-medium'>Name</label>
            <Input 
              type='text' 
              required
              placeholder='someone...'
              value={name}
              onChange={(e) => setName(e.target.value)} 
              className='bg-transparent border-0 text-xl text-[#F2F2F2] placeholder:text-gray-400 focus-visible:ring-0'
            />
          </div>
          
          <Textarea 
            value={msg}
            required
            placeholder='a message...'
            onChange={(e) => setMsg(e.target.value)} 
            className="bg-[#2b2b2b] text-[#F2F2F2] text-xl border-0 placeholder:text-gray-400 
                      h-[150px]
                      overflow-y-auto resize-none rounded-lg focus-visible:ring-0"
          />

          
          <Button 
            onClick={HandleClick}
            className='bg-[#F2F2F2] button text-black hover:bg-gray-300 rounded-full py-6 text-lg font-medium mt-4'
          >
            SEND
          </Button>
        </div>

        {/* Right: Info */}
        <div className='flex-1 space-y-10 justify-center items-center text-center lg:text-left'>
          <div>
            <h2
              className="relative text-2xl sm:text-3xl font-light break-words cursor-pointer 
              after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:w-0 after:h-[2px] after:bg-[#F2F2F2] after:transition-all after:duration-300 
              hover:after:w-full"
              onClick={() => {
                navigator.clipboard.writeText("hadityakumar@gmail.com");
              }}
            >
              hadityakumar@gmail.com
            </h2>


            <hr className='border-[#F2F2F2] mt-4' />
          </div>

          <div className='bg-[#1a1a1a] rounded-2xl p-6 sm:p-8'>
            <h3 className='text-[#F2F2F2] text-lg sm:text-xl font-medium mb-6'>SOCIAL LINKS</h3>
            <div className='flex justify-center lg:justify-start gap-6'>
              <a href="https://www.instagram.com/aditya_the_ace/" target='__blank' className='text-[#F2F2F2] hover:text-gray-400'>
                <Instagram className='me' size={32} />
              </a>
              <a href="https://github.com/hadityakumar" target='__blank' className='text-[#F2F2F2] hover:text-gray-400'>
                <Github size={32} className='me'/>
              </a>
              <a href="https://www.linkedin.com/in/hadityakumar" target='__blank' className='text-[#F2F2F2] hover:text-gray-400'>
                <Linkedin size={32} className='me'/>
              </a>
          
              {/* X */}
              <a href="https://x.com/hadityakumar" target='__blank' className='text-[#F2F2F2] hover:text-gray-400'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="32" height="32" fill="currentColor">
                  <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                </svg>
              </a>
          
              {/* Medium */}
              <a href="https://medium.com/hadityakumar" target='__blank' className='text-[#F2F2F2] hover:text-gray-400'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="32" height="32" fill="currentColor">
                  <path d="M15 12A13 13 0 1015 38 13 13 0 1015 12zM35.5 13c-3.59 0-6.5 5.373-6.5 12 0 1.243.102 2.441.292 3.568.253 1.503.662 2.879 1.192 4.065.265.593.56 1.138.881 1.627.642.978 1.388 1.733 2.202 2.201C34.178 36.811 34.827 37 35.5 37s1.322-.189 1.933-.539c.814-.468 1.56-1.223 2.202-2.201.321-.489.616-1.034.881-1.627.53-1.185.939-2.562 1.192-4.065C41.898 27.441 42 26.243 42 25 42 18.373 39.09 13 35.5 13zM45.5 14c-.259 0-.509.173-.743.495-.157.214-.307.494-.448.833-.071.169-.14.353-.206.551-.133.395-.257.846-.37 1.343-.226.995-.409 2.181-.536 3.497-.063.658-.112 1.349-.146 2.065C43.017 23.499 43 24.241 43 25s.017 1.501.051 2.217c.033.716.082 1.407.146 2.065.127 1.316.31 2.501.536 3.497.113.498.237.948.37 1.343.066.198.135.382.206.551.142.339.292.619.448.833C44.991 35.827 45.241 36 45.5 36c1.381 0 2.5-4.925 2.5-11S46.881 14 45.5 14z"></path>
                </svg>
              </a>
          
              
            </div>
          </div>


          <div>
            <h2 className='text-3xl  sm:text-5xl font-bold'>Let’s connect!</h2>
          </div>
        </div>
      </div>
    </div >

    </>
  )
}



