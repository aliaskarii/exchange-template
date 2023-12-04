import React from 'react'
import { Link } from 'wouter'

function Home() {
  return (
    <div>
      <h2 className="p-20">Home Page Content</h2>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}

export default Home
