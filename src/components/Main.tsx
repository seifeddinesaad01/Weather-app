import React, { useState } from 'react'

const Main = () => {
    const [isTrue, setIsTrue] = useState(false)

  return (
    <div
        className={`h-full w-full bg-cover bg-center ${isTrue ?
          'bg-[url(https://thumbs.dreamstime.com/b/grey-sky-cloudy-background-changeable-weather-natural-clouds-overcast-beautiful-dramatic-sky-effect-grey-aka-gray-sky-cloudy-141536221.jpg)]'
          :
          'bg-[url(https://images.rawpixel.com/image_social_landscape/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg)]'
          }`}
      >
        <button onClick={() => setIsTrue(!isTrue)}>
          change background
        </button>
      </div>
  )
}

export default Main