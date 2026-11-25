import React, { useContext } from 'react'
import { assets } from '../assets/assets.js'
import { Context } from '../context/Context.jsx'

const Main = () => {
    const {
        onSent,
        input,
        setInput,
        loading,
        recentPrompt,
        resultData,
        showResult
    } = useContext(Context)

    return (
        <div className="flex h-dvh min-h-0 flex-1 flex-col overflow-hidden bg-[#f8fafd] px-6 py-5 text-[#1f1f1f] sm:px-10 lg:px-14">

            <div className="flex items-center justify-between">
                <p className="text-xl font-medium text-[#444746]">Promptly</p>
                <img
                    src={assets.user_icon}
                    alt="User"
                    className="h-9 w-9 cursor-pointer rounded-full object-cover"
                />
            </div>

            <div className="mx-auto flex w-full max-w-5xl min-h-0 flex-1 flex-col pb-4">

                {!showResult ? (
                    <div className="flex flex-1 flex-col justify-center">
                        <div className="mb-12">
                            <p className="mb-2 text-4xl font-medium sm:text-5xl lg:text-6xl">
                                <span className="bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] bg-clip-text text-transparent">
                                    Hello Yashi!
                                </span>
                            </p>

                            <p className="text-3xl font-medium text-[#c4c7c5] sm:text-4xl lg:text-5xl">
                                How can I help you today?
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <div
                                onClick={() => onSent("Suggest beautiful places to see on an upcoming road trip")}
                                className="flex h-48 cursor-pointer flex-col justify-between rounded-2xl bg-[#e9eef6] p-5 transition-colors hover:bg-[#dce5f2]"
                            >
                                <p className="max-w-[170px] text-base leading-6 text-[#444746]">
                                    Suggest beautiful places to see on an upcoming road trip
                                </p>
                                <img src={assets.compass_icon} alt="" className="ml-auto h-10 w-10 rounded-full bg-white/70 p-2.5" />
                            </div>

                            <div
                                onClick={() => onSent("Briefly summarize the concept of urban planning")}
                                className="flex h-48 cursor-pointer flex-col justify-between rounded-2xl bg-[#e9eef6] p-5 transition-colors hover:bg-[#dce5f2]"
                            >
                                <p className="max-w-[170px] text-base leading-6 text-[#444746]">
                                    Briefly summarize the concept of urban planning
                                </p>
                                <img src={assets.message_icon} alt="" className="ml-auto h-10 w-10 rounded-full bg-white/70 p-2.5" />
                            </div>

                            <div
                                onClick={() => onSent("Brainstorm team bonding activities")}
                                className="flex h-48 cursor-pointer flex-col justify-between rounded-2xl bg-[#e9eef6] p-5 transition-colors hover:bg-[#dce5f2]"
                            >
                                <p className="max-w-[170px] text-base leading-6 text-[#444746]">
                                    Brainstorm team bonding activities
                                </p>
                                <img src={assets.bulb_icon} alt="" className="ml-auto h-10 w-10 rounded-full bg-white/70 p-2.5" />
                            </div>

                            <div
                                onClick={() => onSent("Improve the readability of the following code")}
                                className="flex h-48 cursor-pointer flex-col justify-between rounded-2xl bg-[#e9eef6] p-5 transition-colors hover:bg-[#dce5f2]"
                            >
                                <p className="max-w-[170px] text-base leading-6 text-[#444746]">
                                    Improve the readability of the following code
                                </p>
                                <img src={assets.code_icon} alt="" className="ml-auto h-10 w-10 rounded-full bg-white/70 p-2.5" />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="min-h-0 flex-1 overflow-y-auto py-10 pr-3">
                        <div className="mb-8 flex items-start gap-4">
                            <img src={assets.user_icon} alt="" className="h-9 w-9 rounded-full" />
                            <p className="pt-2 text-base leading-7 text-[#444746]">
                                {recentPrompt}
                            </p>
                        </div>

                        <div className="flex items-start gap-4">
                            <img src={assets.gemini_icon} alt="" className="h-9 w-9 object-contain" />

                            <div className="flex-1 whitespace-pre-wrap text-base leading-8 text-[#444746]">
                                {loading ? (
                                    <p className="animate-pulse text-[#777b80]">
                                        Generating response...
                                    </p>
                                ) : (
                                    resultData
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="mt-6 w-full shrink-0">
                    <div className="flex items-center gap-4 rounded-full bg-[#e9eef6] px-6 py-4 shadow-sm transition-all focus-within:bg-[#e2e8f0] hover:shadow-md">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && !loading && onSent()}
                            placeholder="Enter a prompt"
                            className="flex-1 bg-transparent text-base text-[#1f1f1f] outline-none placeholder:text-[#777b80]"
                        />

                        <div className="flex items-center gap-4">
                            <img
                                src={assets.gallery_icon}
                                alt="Gallery"
                                className="h-6 w-6 cursor-pointer opacity-70 hover:opacity-100"
                            />

                            <img
                                src={assets.mic_icon}
                                alt="Mic"
                                className="h-6 w-6 cursor-pointer opacity-70 hover:opacity-100"
                            />

                            <img
                                src={assets.send_icon}
                                alt="Send"
                                onClick={() => !loading && onSent()}
                                className={`h-6 w-6 ${loading ? 'cursor-not-allowed opacity-30' : 'cursor-pointer opacity-70 hover:opacity-100'}`}
                            />
                        </div>
                    </div>

                    <p className="mt-4 text-center text-xs text-[#777b80]">
                        Promptly may display inaccurate information, so double-check its responses.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main;
