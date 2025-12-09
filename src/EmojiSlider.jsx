import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./EmojiSlider.css"; // <-- CSS externo

export default function EmojiSlider() {
    const emojis = ["😀", "😎", "😍", "🔥", "🤖", "🚀", "🐱", "🎉","👍"];

    const [index, setIndex] = useState(0);

    const nextEmoji = () => {
        setIndex((prev) => (prev + 1) % emojis.length);
    };

    const prevEmoji = () => {
        setIndex((prev) => (prev - 1 + emojis.length) % emojis.length);
    };

    // 🕒 Auto-play a cada 2.5 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            nextEmoji();
        }, 2500);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="slider-container">
            <h1 className="title">Slider de Emojis</h1>

            <div className="slider-box">
                <button onClick={prevEmoji} className="nav-btn">◀</button>

                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="emoji"
                >
                    {emojis[index]}
                </motion.div>

                <button onClick={nextEmoji} className="nav-btn">▶</button>
            </div>

            <p className="info">Clique para mudar ou espere trocar automaticamente.</p>
        </div>
    );
}
