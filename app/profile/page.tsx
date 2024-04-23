"use client"

import React from 'react'
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const ProfilePage = () => {
    const session = useSession({
        required: true,
        onUnauthenticated() {
          redirect('/signin');
        },
      });

    return (
            <div className="p-8">
              <div className='p-4'>Profile page</div>
              <div className='text-white'>{session?.data?.user?.email }</div>
              <button className='text-white' onClick={() => signOut()}>Logout</button>
            </div>
          
    )
}

ProfilePage.requireAuth = true

export default ProfilePage