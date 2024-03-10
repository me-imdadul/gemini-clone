import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt , newChat} = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }
  return (
    <div className="sidebar max-sm:hidden min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9] px-4 py-6">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu block ml-2.5 cursor-pointer"
          src={assets.menu_icon}
          alt=""
        />
        <div onClick={()=>newChat()} className="new-chat flex mt-[50px] items-center gap-2.5 px-5 py-4 bg-[#e6eaf1] rounded-[50px] text-xl text-grey cursor-pointer">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent flex flex-col animate-[fadeIn_1.2s_]">
            <p className="recent-title mt-7 mb-5">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div onClick={()=>loadPrompt(item)} className="recent-entry ">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0,18 )} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
