
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function GoalsPage() {
  const [goals, setGoals] = useState<any[]>([])
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { window.location.href = '/auth'; return }
      const { data } = await supabase.from('goals').select('*').eq('owner', user.id)
      setGoals(data || [])
    }
    load()
  }, [])

  async function addGoal() {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return alert('login first')
    const { error } = await supabase.from('goals').insert([{ owner: user.id, title, goal_type: 'daily' }])
    setLoading(false)
    if (error) return alert(error.message)
    setTitle('')
    const { data } = await supabase.from('goals').select('*').eq('owner', user.id)
    setGoals(data || [])
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-xl font-semibold mb-4">Your Goals</h1>
        <div className="bg-white p-4 rounded shadow">
          <div className="flex gap-2">
            <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="New goal title" className="flex-1 p-2 border rounded" />
            <button onClick={addGoal} className="px-3 py-2 bg-sky-600 text-white rounded" disabled={loading}>Add</button>
          </div>
          <ul className="mt-4 space-y-2">
            {goals.map(g => <li key={g.id} className="p-2 border rounded">{g.title}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}
