
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function GroupsPage() {
  const [groups, setGroups] = useState<any[]>([])
  const [name, setName] = useState('')

  useEffect(()=>{
    async function load() {
      const { data } = await supabase.from('groups').select('*').limit(20)
      setGroups(data || [])
    }
    load()
  }, [])

  async function createGroup() {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return alert('login required')
    const { error } = await supabase.from('groups').insert([{ name, owner: user.id }])
    if (error) return alert(error.message)
    setName('')
    const { data } = await supabase.from('groups').select('*').limit(20)
    setGroups(data || [])
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-xl font-semibold mb-4">Groups</h1>
        <div className="bg-white p-4 rounded shadow">
          <div className="flex gap-2">
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Group name" className="flex-1 p-2 border rounded" />
            <button onClick={createGroup} className="px-3 py-2 bg-sky-600 text-white rounded">Create</button>
          </div>
          <ul className="mt-4 space-y-2">
            {groups.map(g => <li key={g.id} className="p-2 border rounded">{g.name}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}
