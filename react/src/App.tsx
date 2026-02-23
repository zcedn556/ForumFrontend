import { useEffect, useState } from 'react'
import './App.css'
import DiscussionList from './components/DiscussionList'
import Navbar from './partials/Navbar'

interface Discussion {
  theme: string
  description: string
  creationDate: Date
  userId: number
  imageUrl: string | null
  communityId: number
}

interface DiscussionDto {
  theme: string
  description: string
  creationDate: string
  userId: number
  imageUrl: string | null
  communityId: number
}

function App() {
  const [discussions, setDiscussions] = useState<Discussion[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDiscussions = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/discussions/')
        if (!response.ok) {
          throw new Error('Failed to fetch discussions')
        }

        const data: DiscussionDto[] = await response.json()
        const parsed: Discussion[] = data.map(item => ({
          ...item,
          creationDate: new Date(item.creationDate)
        }))

        setDiscussions(parsed)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchDiscussions()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <>
      <Navbar />
      <DiscussionList discussions={discussions} />
    </>
  )
}

export default App