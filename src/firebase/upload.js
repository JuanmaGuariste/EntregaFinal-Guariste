import { addDoc, collection } from 'firebase/firestore'
import MOCK_DATA from '../data/MOCK_DATA.json' assert { type: 'json' }
import {db} from './config.js'


const data = MOCK_DATA.map((item) => {
    delete item.id
    return item
})

const productosRef = collection(db, 'productos')

data.forEach((item) => {
    addDoc(productosRef, item)
})