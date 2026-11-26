import { createContext, useState } from "react";
import { GoogleGenAI } from "@google/genai";

export const Context = createContext();

const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY
});

const ContextProvider = ({ children }) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [recentPrompts, setRecentPrompts] = useState([]);
    const [response, setResponse] = useState("");
    const [displayedText, setDisplayedText] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const typeResponse = (text) => {
        let index = 0;
        setDisplayedText("");

        const interval = setInterval(() => {
            index++;
            setDisplayedText(text.slice(0, index));

            if (index >= text.length) {
                clearInterval(interval);
            }
        }, 10);
    };

    const onSent = async (prompt) => {
        const userPrompt = (prompt ?? input).trim();

        if (!userPrompt || loading) return;

        setRecentPrompt(userPrompt);
        setRecentPrompts((prev) => [
            userPrompt,
            ...prev.filter((item) => item !== userPrompt)
        ]);

        setInput("");
        setShowResult(true);
        setLoading(true);
        setDisplayedText("");
        setResponse("");

        try {
            const result = await ai.models.generateContent({
                model: "gemini-3.1-flash-lite",
                contents: `Answer the following question in clean, readable plain text.

                Formatting rules:
                - Do not use unnecessary Markdown.
                - Avoid decorative symbols.
                - Keep paragraphs short and readable.
                - Use simple numbered points when needed.
                - Make the answer beginner-friendly.

                Question: ${userPrompt}`
            });

            const responseText = result.text || "";

            setResponse(responseText);
            typeResponse(responseText);

        } catch (error) {
            console.error("Gemini API Error:", error);

            const errorMessage = "Something went wrong. Please try again.";

            setResponse(errorMessage);
            setDisplayedText(errorMessage);

        } finally {
            setLoading(false);
        }
    };

    const newChat = () => {
        setShowResult(false);
        setRecentPrompt("");
        setResponse("");
        setDisplayedText("");
        setInput("");
    };

    const contextValue = {
        input,
        setInput,
        recentPrompt,
        recentPrompts,
        response,
        displayedText,
        onSent,
        newChat,
        loading,
        showResult
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
