// import React, { useState } from 'react'
// import Picker from '@emoji-mart/react'
// import data from '@emoji-mart/data'

// const EmojiInput = () => {
//   const [input, setInput] = useState('')
//   const [showPicker, setShowPicker] = useState(false)

//   const handleEmojiSelect = (emoji) => {
//     setInput(prev => prev + emoji.native)
//   }

//   return (
//     <div className="relative w-full max-w-md mx-auto p-4">
//       <input
//         type="text"
//         className="w-full border p-2 rounded text-black"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Type your message..."
//       />
//       <button
//         className="absolute right-3 top-3 text-xl"
//         onClick={() => setShowPicker(!showPicker)}
//       >
//         😊
//       </button>

//       {showPicker && (
//         <div className="absolute top-full mt-2 z-50">
//           <Picker data={data} onEmojiSelect={handleEmojiSelect} />
//         </div>
//       )}
//     </div>
//   )
// }

// export default EmojiInput
