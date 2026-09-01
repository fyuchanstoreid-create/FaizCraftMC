// api/config.js
export default function handler(req, res) {
    const origin = req.headers.origin || '';
    if (origin !== 'https://faizcraftmc.vercel.app' && origin !== 'http://localhost:3000') {
        return res.status(403).json({ error: 'Access Denied' });
    }
    
    res.status(200).json({
        firebase: {
            apiKey: "AIzaSyDxPsQio4A9LF7bCv5nWj10Et8_ekAsqis",
            authDomain: "faizcraftmc-acc42.firebaseapp.com",
            databaseURL: "https://faizcraftmc-acc42-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "faizcraftmc-acc42",
            storageBucket: "faizcraftmc-acc42.firebasestorage.app",
            messagingSenderId: "486094594414",
            appId: "1:486094594414:web:181b2d433a4fb9759be17f"
        }
    });
}
