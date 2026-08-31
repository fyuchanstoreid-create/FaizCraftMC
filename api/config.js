// api/config.js
export default function handler(req, res) {
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
        }
    });
}
