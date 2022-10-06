// component for home page


import React from 'react'
import Popular from './Popular'
import Vegan from './Vegan'
import {motion} from "framer-motion"

function Home() {
  return (
    <motion.div>
       {/* animate transition of pages */}
        animate={{opacity:1}}
        intial={{opacity:0}}
        exit={{opacity:0}}
        transition={{duration:0.5}}
        <Vegan />
        <Popular />

    </motion.div>
  )
}

export default Home