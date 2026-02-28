import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './partials/Navbar'
import type DiscussionDto from './components/interfaces/DiscussionDto'
import type DiscussionProps from './components/interfaces/DiscussionProps'
import type CommunityProps from './components/interfaces/CommunityProps'
import type CommunityDto from './components/interfaces/CommunityDto'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'


const API_BASE = 'http://127.0.0.1:8000/api'

function App() {
  const [discussions, setDiscussions] = useState<DiscussionProps[]>([])
  const [communities, setCommunities] = useState<CommunityProps[]>([])

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [discussionsRes, communitiesRes] = await Promise.all([
          fetch(`${API_BASE}/discussions/`),
          fetch(`${API_BASE}/communities/`)
        ])

        if (!discussionsRes.ok) {
          throw new Error('Failed to fetch discussions')
        }

        if (!communitiesRes.ok) {
          throw new Error('Failed to fetch communities')
        }

        const discussionsData: DiscussionDto[] = await discussionsRes.json()
        const communitiesData: CommunityDto[] = await communitiesRes.json()

        const parsedDiscussions: DiscussionProps[] = discussionsData.map(item => ({
          ...item,
          creationDate: new Date(item.creationDate)
        }))


        const parsedCommunities: CommunityProps[] = communitiesData.map(item => ({
          ...item,
          creationDate: new Date(item.creationDate)
        }))

        setCommunities(parsedCommunities)

        setDiscussions(parsedDiscussions)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard discussions={discussions} communities={communities} />}/>
      </Routes>
    </>
  )
}

export default App