import React from 'react'
import { assets } from '../assets/assets.js'

const Main = () => {
    return (
        <div className="flex min-h-dvh flex-1 flex-col bg-[#f8fafd] px-6 py-5 text-[#1f1f1f] sm:px-10 lg:px-14">

            <div className="flex items-center justify-between">
                <p className="text-xl font-medium text-[#444746]">Promptly</p>
                <img
                    src={assets.user_icon}
                    alt="User"
                    className="h-9 w-9 cursor-pointer rounded-full object-cover"
                />
            </div>

            <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center pb-10">
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
                    <div className="flex h-48 cursor-pointer flex-col justify-between rounded-2xl bg-[#e9eef6] p-5 transition-colors hover:bg-[#dce5f2]">
                        <p className="max-w-[170px] text-base leading-6 text-[#444746]">
                            Suggest beautiful places to see on an upcoming road trip
                        </p>
                        <img
                            src={assets.compass_icon}
                            alt=""
                            className="ml-auto h-10 w-10 rounded-full bg-white/70 p-2.5"
                        />
                    </div>

                    <div className="flex h-48 cursor-pointer flex-col justify-between rounded-2xl bg-[#e9eef6] p-5 transition-colors hover:bg-[#dce5f2]">
                        <p className="max-w-[170px] text-base leading-6 text-[#444746]">
                            Briefly summarize the concept of urban planning
                        </p>
                        <img
                            src={assets.message_icon}
                            alt=""
                            className="ml-auto h-10 w-10 rounded-full bg-white/70 p-2.5"
                        />
                    </div>

                    <div className="flex h-48 cursor-pointer flex-col justify-between rounded-2xl bg-[#e9eef6] p-5 transition-colors hover:bg-[#dce5f2]">
                        <p className="max-w-[170px] text-base leading-6 text-[#444746]">
                            Brainstorm team bonding activities
                        </p>
                        <img
                            src={assets.bulb_icon}
                            alt=""
                            className="ml-auto h-10 w-10 rounded-full bg-white/70 p-2.5"
                        />
                    </div>

                    <div className="flex h-48 cursor-pointer flex-col justify-between rounded-2xl bg-[#e9eef6] p-5 transition-colors hover:bg-[#dce5f2]">
                        <p className="max-w-[170px] text-base leading-6 text-[#444746]">
                            Improve the readability of the following code
                        </p>
                        <img
                            src={assets.code_icon}
                            alt=""
                            className="ml-auto h-10 w-10 rounded-full bg-white/70 p-2.5"
                        />
                    </div>
                </div>


                <div className="mt-20 w-full">
                    <div className="flex items-center gap-4 rounded-full bg-[#e9eef6] px-6 py-4 shadow-sm transition-all focus-within:bg-[#e2e8f0] hover:shadow-md">
                        <input
                            type="text"
                            placeholder="Enter a prompt"
                            className="flex-1 bg-transparent text-base text-[#1f1f1f] outline-none placeholder:text-[#777b80]"
                        />

                        <div className="flex items-center gap-4">
                            <img
                                src={assets.gallery_icon}
                                alt="Gallery"
                                className="h-6 w-6 cursor-pointer opacity-70 transition-opacity hover:opacity-100"
                            />
                            <img
                                src={assets.mic_icon}
                                alt="Mic"
                                className="h-6 w-6 cursor-pointer opacity-70 transition-opacity hover:opacity-100"
                            />
                            <img
                                src={assets.send_icon}
                                alt="Send"
                                className="h-6 w-6 cursor-pointer opacity-70 transition-opacity hover:opacity-100"
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
