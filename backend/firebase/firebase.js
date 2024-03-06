import { initializeApp } from 'firebase/app'
import {
    getStorage,
    ref,
    getDownloadURL,
    uploadBytesResumable,
} from 'firebase/storage'
import multer from 'multer'
import catchAsync from '../utils/catchAsync.js'
import { Router } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
const upload = multer({ storage: multer.memoryStorage() })
const router = new Router()

const uploadFile = catchAsync(async (req, res, next) => {
    if (!req.file) return next()
    const time = new Date().toLocaleDateString()
    const storageRef = ref(storage, `images/${req.file.originalname} ${time}`)
    const metadata = { contentType: req.file.mimetype }
    const snapshot = await uploadBytesResumable(
        storageRef,
        req.file.buffer,
        metadata
    )
    const downloadUrl = await getDownloadURL(snapshot.ref)
    req.fileUrl = downloadUrl
    next()
})

router.use(upload.single('image'), uploadFile)

export default router
