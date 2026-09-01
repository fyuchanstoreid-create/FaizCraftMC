// api/config.js
export default function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Admin-Secret');

    // 🔥 ALLOWED DOMAINS
    const ALLOWED_DOMAINS = [
        'faizcraftmc.vercel.app',
        'localhost',
        '127.0.0.1'
    ];

    const origin = req.headers.origin || req.headers.host || '';
    const isAllowed = ALLOWED_DOMAINS.some(domain => origin.includes(domain));

    // 🔥 AMBIL PASSWORD DARI ENVIRONMENT VARIABLES
    // 🔥 TIDAK ADA FALLBACK! HARUS ADA DI VERCEL!
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
    const ADMIN_SECRET_KEY = process.env.ADMIN_SECRET_KEY || 'F4izCr4ftMC_S3cur3_K3y_2026';

    // 🔥 CEK: Password harus ada di environment variables!
    if (!ADMIN_PASSWORD) {
        console.error('❌ ADMIN_PASSWORD not set in environment variables!');
        return res.status(500).json({
            error: 'Server configuration error: Password not set'
        });
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
        },
        telegram: {
            botToken: "8202830596:AAHmfFHbEvmcaO9w_kbMR6zINacPwDD97FE",
            chatId: "8367322295"
        },
        admin: {
            password: "fyuxzar0304834031",
            secretKey: "F4izCr4ftMC_S3cur3_K3y_2026",
            version: '2.0'
        },
        security: {
            allowedDomains: ALLOWED_DOMAINS,
            isAllowed: isAllowed
        }
    });
}
