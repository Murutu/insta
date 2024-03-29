import React, { useState } from 'react'
import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

function Header() {
  const { data: session, status } = useSession()
  const [open, setOpen] = useRecoilState(modalState)
  const router = useRouter()

  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <div className="shadow-sm border-b bg-white sticky top-0 z-50">
        <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
          <div
            onClick={() => router.push('/')}
            className="relative hidden lg:inline-grid  w-24 cursor-pointer"
          >
            <Image
              src="/logo.png"
              layout="fill"
              objectFit="contain"
              width="64"
              height="64"
            />
          </div>

          <div
            onClick={() => router.push('/')}
            className="relative w-10  lg:hidden flex-shrink-0 cursor-pointer"
          >
            <Image src="/insta-logo.png" layout="fill" objectFit="contain" />
          </div>

          <div className="flex items-center justify-end space-x-6">
            <MenuIcon
              className="h-6 md:hidden cursor-pointer"
              onClick={handleClick}
            />

            <div
              className={`${
                active ? '' : 'hidden'
              }    lg:inline-flex lg:flex-grow lg:w-auto`}
            >
              {session ? (
                <>
                  <PlusCircleIcon
                    onClick={() => setOpen(true)}
                    className="navBtn"
                  />
                  <UserGroupIcon className="navBtn" />
                  <HeartIcon className="navBtn" />

                  <img
                    onClick={signOut}
                    src={session.user.image}
                    alt="profile pic"
                    className="h-10 rounded-full cursor-pointer"
                    width="44"
                    height="44"
                  />
                </>
              ) : (
                <button onClick={signIn}>Sign In</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
