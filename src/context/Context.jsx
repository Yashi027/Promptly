import { createContext, useState } from "react";
import { GoogleGenAI } from "@google/genai";

export const Context = createContext();

const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY
});

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const onSent = async (prompt) => {
        const userPrompt = prompt || input;

        if (!userPrompt.trim() || loading) return;

        setRecentPrompt(userPrompt);
        setInput("");
        setLoading(true);
        setShowResult(true);

        try {
            const result = await ai.models.generateContent({
                model: "gemini-3.1-flash-lite",
                contents: `Answer the following question in clean, readable plain text.

                Formatting rules:
                - Do not use Markdown.
                - Do not use **, ##, *, backticks, or other Markdown symbols.
                - Avoid unnecessary headings and decorative symbols.
                - Use simple numbered points when needed.
                - Keep paragraphs short and easy to read.
                - For code examples, provide properly formatted code without Markdown fences.
                - Make the answer clear and beginner-friendly.

                Question: ${userPrompt}`
            });

            const responseText = result.text;

            console.log("Gemini Response:", responseText);

            setResponse(responseText);
            setResultData(responseText);

        } catch (error) {
            console.error("Gemini API Error:", error);
            setResultData("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const contextValue = {
        input,
        setInput,
        recentPrompt,
        response,
        onSent,
        loading,
        resultData,
        showResult
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
