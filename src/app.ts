import express from 'express'
import dotenv from 'dotenv'

dotenv.config()


const app = express()

import './Database/Conn'


export default app