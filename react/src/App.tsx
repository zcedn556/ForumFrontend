import './App.css'
import DiscussionList from './components/DiscussionList'
import Navbar from './partials/Navbar'

function App() {
  const bakedDiscussions = [
    { theme: 'Epstein file mentioning rituals and babies being dismembered',
      description: 'Also the fbi report saying Trump has been compromised  by Israel and Epstein emailing the former Israeli pm',
      creationDate: new Date,
      imageUrl: 'https://i.cbc.ca/ais/2e82bac2-e840-4857-8728-b386838500f4,1766267652550/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C755%2C11924%2C6707%29%3B',
      userId: 4343,
      communityId:1
    },
    { theme: 'How the US Military used to pack pistols for airdrops',
      description: '',
      creationDate: new Date,
      imageUrl: 'https://i.redd.it/rc9p074ytrjg1.png',
      userId: 6574,
      communityId:2
    },
    {
      theme: 'Unsure if I sent someone a friend request or not?',
      description: 'Forgive me if this is a dumb question. I accidentally sent someone a friend request but I do not see the pending tab in app or the browser. Does this mean the request didn’t actually go through?',
      creationDate: new Date,
      imageUrl: null,
      userId: 2025,
      communityId: 3
    },    {
      theme: 'President Obama about aliens in a new interview: "They\'re real" ',
      description: 'Exclusive interview with Obama',
      creationDate: new Date,
      imageUrl: 'https://www.azernews.az/media/2026/02/16/a9195c3171f4.jpg',
      userId: 9374,
      communityId: 4
    },
    { theme: 'Trump\'s First Amendment is officially dead',
      description: '',
      creationDate: new Date,
      imageUrl: 'https://preview.redd.it/trumps-first-amendment-is-officially-dead-v0-1u5u6pf9lujg1.jpeg?width=1080&crop=smart&auto=webp&s=2e7ff49ce85f92253d5595a74edbf530d005232a',
      userId: 1235,
      communityId: 5
    }
  ];


  return (
    <>
      <Navbar/>
      <DiscussionList discussions={bakedDiscussions} />
    </>
  )
}

export default App
