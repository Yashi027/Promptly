import { assets } from '../assets/assets.js';
import { useContext, useState } from 'react';
import { Context } from '../context/Context.jsx';

const Sidebar = () => {
  const [extended, setExtended] = useState(true);

  const { recentPrompts, onSent, newChat } = useContext(Context);

  return (
    <aside
      className={`flex h-dvh min-h-[420px] shrink-0 flex-col border-r border-[#e1e6ed] bg-[#f0f4f9] text-[#1f1f1f] transition-[width,padding] duration-200 ease-in-out ${extended ? 'w-[280px] px-4 py-6' : 'w-[76px] px-2 py-4'
        }`}
    >
      <div className={`flex h-10 items-center ${extended ? 'gap-3 px-1' : 'justify-center'}`}>
        <button
          type="button"
          aria-label={extended ? 'Collapse sidebar' : 'Expand sidebar'}
          aria-expanded={extended}
          aria-controls="sidebar-content"
          onClick={() => setExtended(!extended)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-[#e2e7ee]"
        >
          <img
            className="h-5 w-5 opacity-70"
            src={assets.menu_icon}
            alt=""
          />
        </button>

        {extended && (
          <div className="flex items-center gap-2 whitespace-nowrap">
            <img
              className="h-7 w-7 object-contain"
              src={assets.gemini_icon}
              alt=""
            />
            <span className="text-lg font-medium tracking-tight">
              Promptly
            </span>
          </div>
        )}
      </div>

      <div id="sidebar-content" className="mt-9 flex min-h-0 flex-1 flex-col">

        <button
          type="button"
          aria-label="New chat"
          title={extended ? undefined : 'New chat'}
          onClick={newChat}
          className={`flex h-12 shrink-0 items-center rounded-full bg-[#e2e7ee] text-sm font-medium transition-colors hover:bg-[#d8dee8] ${extended
            ? 'w-full gap-3 px-4 text-left'
            : 'mx-auto w-12 justify-center'
            }`}
        >
          <img
            className="h-5 w-5 opacity-80"
            src={assets.plus_icon}
            alt=""
          />
          {extended && <span>New chat</span>}
        </button>

        {extended && (
          <section className="mt-9 flex min-h-0 flex-1 flex-col" aria-label="Recent chats">

            <h2 className="px-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#5f6368]">
              Recent
            </h2>

            <div className="mt-3 flex flex-col gap-1 overflow-y-auto">
              {recentPrompts.length > 0 ? (
                recentPrompts.map((prompt, index) => (
                  <button
                    key={`${prompt}-${index}`}
                    type="button"
                    onClick={() => onSent(prompt)}
                    title={prompt}
                    className="flex min-h-11 w-full items-center gap-3 rounded-full px-3 text-left text-sm text-[#444746] transition-colors hover:bg-[#e2e7ee]"
                  >
                    <img
                      className="h-[18px] w-[18px] shrink-0 opacity-70"
                      src={assets.message_icon}
                      alt=""
                    />

                    <span className="truncate">
                      {prompt}
                    </span>
                  </button>
                ))
              ) : (
                <p className="px-3 py-3 text-sm text-[#80868b]">
                  Your recent chats will appear here.
                </p>
              )}
            </div>
          </section>
        )}
      </div>

      <div className="mt-auto w-full shrink-0 space-y-1 border-t border-[#d9dfe7] pt-4">

        <button
          type="button"
          aria-label="Help"
          title={extended ? undefined : 'Help'}
          className={`flex h-11 w-full items-center rounded-full text-sm text-[#444746] transition-colors hover:bg-[#e2e7ee] ${extended ? 'gap-3 px-3 text-left' : 'justify-center'
            }`}
        >
          <img
            className="h-5 w-5 opacity-70"
            src={assets.question_icon}
            alt=""
          />
          {extended && <span>Help</span>}
        </button>

        <button
          type="button"
          aria-label="Activity"
          title={extended ? undefined : 'Activity'}
          className={`flex h-11 w-full items-center rounded-full text-sm text-[#444746] transition-colors hover:bg-[#e2e7ee] ${extended ? 'gap-3 px-3 text-left' : 'justify-center'
            }`}
        >
          <img
            className="h-5 w-5 opacity-70"
            src={assets.history_icon}
            alt=""
          />
          {extended && <span>Activity</span>}
        </button>

        <button
          type="button"
          aria-label="Settings"
          title={extended ? undefined : 'Settings'}
          className={`flex h-11 w-full items-center rounded-full text-sm text-[#444746] transition-colors hover:bg-[#e2e7ee] ${extended ? 'gap-3 px-3 text-left' : 'justify-center'
            }`}
        >
          <img
            className="h-5 w-5 opacity-70"
            src={assets.setting_icon}
            alt=""
          />
          {extended && <span>Settings</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
