// api/config.js
export default function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Admin-Secret');

    // 🔥 ALLOWED DOMAINS - HANYA DOMAIN INI YANG BOLEH AKSES!
    const ALLOWED_DOMAINS = [
        'faizcraftmc.vercel.app',
        'localhost',
        '127.0.0.1'
    ];

    const origin = req.headers.origin || req.headers.host || '';
    const isAllowed = ALLOWED_DOMAINS.some(domain => origin.includes(domain));

    // Kirim konfigurasi dari Environment Variables
    res.status(200).json({
        firebase: {
            apiKey: process.env.FIREBASE_API_KEY || "AIzaSyDxPsQio4A9LF7bCv5nWj10Et8_ekAsqis",
            authDomain: process.env.FIREBASE_AUTH_DOMAIN || "faizcraftmc-acc42.firebaseapp.com",
            databaseURL: process.env.FIREBASE_DATABASE_URL || "https://faizcraftmc-acc42-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: process.env.FIREBASE_PROJECT_ID || "faizcraftmc-acc42",
            storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "faizcraftmc-acc42.firebasestorage.app",
            messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "486094594414",
            appId: process.env.FIREBASE_APP_ID || "1:486094594414:web:181b2d433a4fb9759be17f"
        },
        telegram: {
            botToken: process.env.TELEGRAM_BOT_TOKEN || "8202830596:AAHmfFHbEvmcaO9w_kbMR6zINacPwDD97FE",
            chatId: process.env.TELEGRAM_CHAT_ID || "8367322295"
        },
        admin: {
            password: process.env.ADMIN_PASSWORD || "fyuxzar0304834031",
            secretKey: process.env.ADMIN_SECRET_KEY || "F4izCr4ftMC_S3cur3_K3y_2026"
        },
        security: {
            allowedDomains: ALLOWED_DOMAINS,
            isAllowed: isAllowed
        }
    });
}
