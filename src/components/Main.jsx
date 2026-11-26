import React, { useContext } from 'react';
import { assets } from '../assets/assets.js';
import { Context } from '../context/Context.jsx';

const Main = () => {
    const { onSent, input, setInput, loading, recentPrompt, showResult, displayedText } = useContext(Context);

    const suggestions = [
        ["Suggest beautiful places to see on an upcoming road trip", assets.compass_icon],
        ["Briefly summarize the concept of urban planning", assets.message_icon],
        ["Brainstorm team bonding activities", assets.bulb_icon],
        ["Improve the readability of the following code", assets.code_icon]
    ];

    return (
        <main className="flex h-dvh min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-[#f8fafd] px-3 py-4 text-[#1f1f1f] sm:px-6 sm:py-5 md:px-8 lg:px-14">

            <header className="flex shrink-0 items-center justify-between">
                <p className="text-lg font-medium text-[#444746] sm:text-xl">Promptly</p>
                <img src={assets.user_icon} alt="User" className="h-8 w-8 cursor-pointer rounded-full object-cover sm:h-9 sm:w-9" />
            </header>

            <div className="mx-auto flex min-h-0 w-full max-w-5xl flex-1 flex-col pb-2 sm:pb-4">

                {!showResult ? (
                    <div className="flex flex-1 flex-col justify-center overflow-y-auto py-6 sm:py-8">

                        <div className="mb-8 sm:mb-10 lg:mb-12">
                            <p className="mb-2 text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl">
                                <span className="bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] bg-clip-text text-transparent">
                                    Hello Yashi!
                                </span>
                            </p>

                            <p className="text-2xl font-medium text-[#c4c7c5] sm:text-3xl md:text-4xl lg:text-5xl">
                                How can I help you today?
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                            {suggestions.map(([text, icon]) => (
                                <button
                                    key={text}
                                    type="button"
                                    disabled={loading}
                                    onClick={() => onSent(text)}
                                    className="flex min-h-36 flex-col justify-between rounded-xl bg-[#e9eef6] p-3 text-left transition-colors hover:bg-[#dce5f2] active:scale-[0.98] sm:h-44 sm:rounded-2xl sm:p-4 lg:h-48 lg:p-5"
                                >
                                    <span className="line-clamp-4 text-sm leading-5 text-[#444746] sm:text-base sm:leading-6">
                                        {text}
                                    </span>

                                    <img src={icon} alt="" className="ml-auto h-8 w-8 rounded-full bg-white/70 p-2 sm:h-10 sm:w-10 sm:p-2.5" />
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain py-6 pr-1 sm:py-10 sm:pr-3">

                        <div className="mb-6 flex items-start gap-3 sm:mb-8 sm:gap-4">
                            <img src={assets.user_icon} alt="" className="h-7 w-7 shrink-0 rounded-full sm:h-9 sm:w-9" />

                            <p className="break-words pt-1 text-sm leading-6 text-[#444746] sm:pt-2 sm:text-base sm:leading-7">
                                {recentPrompt}
                            </p>
                        </div>

                        <div className="flex items-start gap-3 sm:gap-4">
                            <img src={assets.gemini_icon} alt="" className="h-7 w-7 shrink-0 object-contain sm:h-9 sm:w-9" />

                            <div className="min-w-0 flex-1 whitespace-pre-wrap break-words text-sm leading-7 text-[#444746] sm:text-base sm:leading-8">
                                {loading && !displayedText ? (
                                    <p className="animate-pulse text-[#777b80]">
                                        Generating response...
                                    </p>
                                ) : displayedText}
                            </div>
                        </div>
                    </div>
                )}

                <div className="mt-3 w-full shrink-0 sm:mt-6">
                    <div className="flex items-center gap-2 rounded-2xl bg-[#e9eef6] px-3 py-3 shadow-sm transition-all focus-within:bg-[#e2e8f0] hover:shadow-md sm:gap-4 sm:rounded-full sm:px-6 sm:py-4">

                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && !loading && onSent()}
                            placeholder="Enter a prompt"
                            disabled={loading}
                            className="min-w-0 flex-1 bg-transparent text-sm text-[#1f1f1f] outline-none placeholder:text-[#777b80] sm:text-base"
                        />

                        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
                            <button type="button" aria-label="Upload image" className="hidden rounded-full p-1 opacity-70 transition-opacity hover:opacity-100 sm:block">
                                <img src={assets.gallery_icon} alt="" className="h-5 w-5 sm:h-6 sm:w-6" />
                            </button>

                            <button type="button" aria-label="Voice input" className="hidden rounded-full p-1 opacity-70 transition-opacity hover:opacity-100 sm:block">
                                <img src={assets.mic_icon} alt="" className="h-5 w-5 sm:h-6 sm:w-6" />
                            </button>

                            <button
                                type="button"
                                aria-label="Send message"
                                disabled={loading || !input.trim()}
                                onClick={() => onSent()}
                                className="rounded-full p-1 transition-colors hover:bg-white/60 disabled:cursor-not-allowed disabled:opacity-30"
                            >
                                <img src={assets.send_icon} alt="" className="h-5 w-5 sm:h-6 sm:w-6" />
                            </button>
                        </div>
                    </div>

                    <p className="mt-3 px-2 text-center text-[10px] text-[#777b80] sm:mt-4 sm:text-xs">
                        Promptly may display inaccurate information, so double-check its responses.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Main;
