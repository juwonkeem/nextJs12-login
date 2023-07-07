'use client'
import React from 'react'
import { signIn, signOut, useSession, SessionProvider } from 'next-auth/react'

function LoginPage() {
  const { data: session, status } = useSession({
    required: false,
  })

  console.log('session>>', session, '상태>>', status)
  if (status === 'loading') return <></>
  if (session && session.user) {
    return (
      <button className="px-12 py-4 border rounded-xl bg-red-300" onClick={() => signOut()}>
        {session.user.name}님 Log Out
      </button>
    )
  }

  return (
    <button className="px-12 py-4 border rounded-xl bg-yellow-300" onClick={() => signIn()}>
      LogIn
    </button>
  )
}

export default LoginPage
