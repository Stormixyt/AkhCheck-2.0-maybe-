
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <>
      <Head>
        <title>AkhCheck — Islamic accountability & habit tracker</title>
        <meta name="description" content="AkhCheck helps you build daily spiritual habits — prayer, Quran, fasting, and more." />
      </Head>
      <Navbar />
      <main className="container-max mt-10">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="h1">Stay consistent. Stay connected. Stay halal.</h1>
            <p className="mt-4 text-gray-600">AkhCheck is the accountability platform for Muslims — track prayers, Quran, fasting, build streaks, join groups, and get a private AI coach that gives faith-aligned encouragement.</p>
            <div className="mt-6 flex gap-3">
              <a href="/auth" className="px-5 py-3 rounded-lg bg-gradient-to-r from-green-600 to-teal-500 text-white font-medium">Get started — it's free</a>
              <a href="#features" className="px-5 py-3 rounded-lg border">See features</a>
            </div>
            <div className="mt-6 small-muted">Built with privacy-first defaults · 2FA ready · End-to-end encrypted chats</div>
          </div>
          <div>
            <div className="card">
              <div className="flex items-start justify-between">
                <div>
                  <div className="h2">Today's snapshot</div>
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    <div className="p-3 bg-white rounded-lg shadow-sm text-center">
                      <div className="text-2xl font-semibold">5</div>
                      <div className="small-muted">Prayers</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg shadow-sm text-center">
                      <div className="text-2xl font-semibold">15m</div>
                      <div className="small-muted">Quran</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg shadow-sm text-center">
                      <div className="text-2xl font-semibold">2</div>
                      <div className="small-muted">Goals</div>
                    </div>
                  </div>
                </div>
                <div className="small-muted">Streak: <strong>12 days</strong></div>
              </div>
              <div className="mt-4 small-muted">Tip: Try the Ramadan theme during Ramadan to encourage fasting goals.</div>
            </div>
          </div>
        </section>

        <section id="features" className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="h2">Goals & Streaks</h3>
            <p className="mt-2 text-gray-600">Create daily goals, automatic streaks, visual calendar and weekly summaries.</p>
          </div>
          <div className="card">
            <h3 className="h2">Groups & Leaderboards</h3>
            <p className="mt-2 text-gray-600">Healthy competition with friends, family, and masjid groups — halal messaging and pinned challenges.</p>
          </div>
          <div className="card">
            <h3 className="h2">AI Coach</h3>
            <p className="mt-2 text-gray-600">Private AI guidance tuned to Islamic values — choose gentle or firm tone for reminders and tips.</p>
          </div>
        </section>

        <section className="mt-12">
          <div className="card">
            <h3 className="h2">Design & Privacy</h3>
            <p className="mt-2 text-gray-600">Accessible UI, theme options (including Ramadan & Eid), role-based group permissions, and E2E for chats.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
