// component for home page


import React from 'react'
import Popular from './Popular'
import Vegan from './Vegan'
import {motion} from "framer-motion"

function Home() {
  return (
    <motion.div>
        <Vegan />
        <Popular />

    </motion.div>
  )
}

export default Home