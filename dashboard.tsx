
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Dashboard(){
  return (
    <>
      <Head><title>Dashboard — AkhCheck</title></Head>
      <Navbar />
      <main className="container-max mt-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex items-center justify-between">
                <div><h2 className="h2">Your Today</h2><div className="small-muted">Overview of goals & streaks</div></div>
                <div className="small-muted">Welcome back, <strong>User</strong></div>
              </div>
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-semibold">5</div>
                  <div className="small-muted">Prayers</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-semibold">20m</div>
                  <div className="small-muted">Quran</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm text-center">
                  <div className="text-3xl font-semibold">✓</div>
                  <div className="small-muted">Goals done</div>
                </div>
              </div>
            </div>

            <div className="card mt-6">
              <h3 className="h2">Progress</h3>
              <div className="mt-4 small-muted">Visual calendar and charts will appear here (placeholder).</div>
            </div>
          </div>

          <aside>
            <div className="card">
              <h3 className="h2">Prayer Times</h3>
              <div className="mt-3">
                <div className="text-lg font-medium">Fajr — 04:34</div>
                <div className="small-muted">Dhuhr — 12:18</div>
                <div className="small-muted">Asr — 15:42</div>
                <div className="small-muted">Maghrib — 19:58</div>
                <div className="small-muted">Isha — 21:20</div>
              </div>
            </div>

            <div className="card mt-6">
              <h3 className="h2">Daily Verse</h3>
              <div className="mt-3 small-muted">"Indeed, with hardship comes ease." — Quran 94:6</div>
              <a className="mt-4 inline-block text-sm border rounded px-3 py-2">Read tafseer</a>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}
