import Link from 'next/link'
import React from 'react'
import { BiMessageDetail } from 'react-icons/bi'
import { BsFillSendFill, BsTelephoneOutbound } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="container mx-auto px-4">
        <Link href="/" className=" font-black text-tertiary-dark capitalize">
          ebenezer hostel
        </Link>

        <h4 className=" font-semibold text-[40px] py-6">contact us</h4>

        <div className=" flex flex-wrap gap-16 items-center justify-between">
          <div className="flex-1">
            <p className=" capitalize">akwadun road</p>

            <div className="flex items-center py-4">
              <BsFillSendFill />

              <p className=" capitalize ml-2">vitech</p>
            </div>

            <div className="flex items-center">
              <BsTelephoneOutbound />

              <p className=" capitalize ml-2">+233 (0) 598-111-434</p>
            </div>

            <div className="flex items-center pt-4">
              <BiMessageDetail />

              <p className=" capitalize ml-2">vitech</p>
            </div>
          </div>

          <div className="flex-1 md:text-right">
            <p className="pb-4 capitalize">our story</p>

            <p className="pb-4 capitalize">get in touch</p>

            <p className="pb-4 capitalize">our privacy commitment</p>

            <p className="pb-4 capitalize">terms of service</p>

            <p className=" capitalize">customer assistance</p>
          </div>
        </div>
      </div>

      <div className=" bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0" />
    </footer>
  )
}

export default Footer
