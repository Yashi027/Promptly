import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
    apiKey: process.env.API_KEY,
});

async function main() {
    try {
        const response = await ai.models.generateContentStream({
            model: 'gemini-3.1-flash-lite',
            contents: 'Explain what React.js is in simple terms.',
            config: {
                thinkingConfig: {
                    thinkingLevel: 'LOW',
                },
                tools: [
                    {
                        googleSearch: {},
                    },
                ],
            },
        });

        for await (const chunk of response) {
            if (chunk.text) {
                process.stdout.write(chunk.text);
            }
        }

    } catch (error) {
        console.error('Gemini API Error:', error.message);
    }
}

main();
