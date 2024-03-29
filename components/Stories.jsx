// import React, { useEffect, useState } from 'react'
// import Story from './Story'
// import faker from 'faker'
// import { useSession } from 'next-auth/react'

// function Stories() {
//   const [suggestions, setSuggestions] = useState([])
//   const { data: session } = useSession()

//   useEffect(() => {
//     const suggestions = [...Array(20)].map((_, i) => ({
//       ...faker.helpers.contextualCard(),
//       id: 1,
//     }))

//     setSuggestions(suggestions)
//   }, [])

//   // everytime you map you must always have a key so that it doesn't re-render the whole data
//   return (
//     <div
//       className="flex space-x-2 p-6 bg-white mt-8 border-gray-200
//     border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black"
//     >
//       {session && (
//         <Story img={session.user.image} username={session.user.name} />
//       )}

//       {suggestions.map((profile) => (
//         <Story
//           key={profile.id}
//           img={profile.avatar}
//           username={profile.username}
//         />
//       ))}
//     </div>
//   )
// }

// export default Stories
