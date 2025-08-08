
import Link from 'next/link'

export default function Navbar(){
  return (
    <nav className="w-full border-b border-gray-100 bg-white/60 backdrop-blur sticky top-0 z-50">
      <div className="container-max flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="rounded-lg p-2 bg-gradient-to-r from-green-600 to-teal-500 text-white font-bold">AkhCheck</div>
          <div className="hidden md:block small-muted">Accountability — Islamic values, modern UX</div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/"><a className="px-3 py-2 rounded-md hover:bg-gray-100">Home</a></Link>
          <Link href="/dashboard"><a className="px-3 py-2 rounded-md hover:bg-gray-100">Dashboard</a></Link>
          <Link href="/groups"><a className="px-3 py-2 rounded-md hover:bg-gray-100">Groups</a></Link>
          <Link href="/auth"><a className="px-4 py-2 rounded-md font-medium bg-white border">Sign in</a></Link>
        </div>
      </div>
    </nav>
  )
}
