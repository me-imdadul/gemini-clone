import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <div className="main flex-[1] min-h-screen pb-[15vh] relative">
      <div className="nav flex items-center justify-between text-[22px] p-5 text-[#585858]">
        <p>Gemini</p>
        <img className="w-10 rounded-[50px]" src={assets.user_icon} alt="" />
      </div>
      <div className="main-container max-w-[900px] m-auto ">
        {!showResult ? (
          <>
            <div className="greet my-[50px] text-[56px] text-[#c4c7c5] font-medium p-5">
              <p>
                <span className="bg-gradient-to-r from-[#4b90ff] to-[#ff5546]  fill-transparent">
                  Hello, Imdadul
                </span>
              </p>
              <p>How can i help you today?</p>
            </div>
            <div className="cards flex">
              <div className="card hover:bg-[#dfe4ea]">
                <p className="text-[17px] text-[#585858]">
                  Suggests beautiful plaaces to see on an upcoming road trip
                </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card hover:bg-[#dfe4ea]">
                <p className="text-[17px] text-[#585858]">
                  Briefly summarize this concept : urban planning
                </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card hover:bg-[#dfe4ea]">
                <p className="text-[17px] text-[#585858]">
                  Brainstorm team bonding activities for our work retreat
                </p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card hover:bg-[#dfe4ea]">
                <p className="text-[17px] text-[#585858]">
                  Improve the readability of the foloowing code
                </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result py-0 px-[5%] max-h-[70vh] overflow-y-scroll">
            <div className="result-title my-10 mx-0 flex items-center gap-5">
              <img
                className="w-10 rounded-[50%] "
                src={assets.user_icon}
                alt=""
              />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data flex items-start gap-5">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loaders w-full flex flex-col gap-2.5 ">
                  <hr className="rounded-[4px] anim border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:200px_100px] h-5" />
                  <hr className="rounded-[4px] anim border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:200px_100px] h-5" />
                  <hr className="rounded-[4px] anim border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:200px_100px] h-5" />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}>
                  {/* {resultData} */}
                </p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom absolute bottom-0 w-full max-w-[900px] py-0 px-5 auto">
          <div className="search-box max-sm:px-2.5 max-sm:py-[5px] flex items-center justify-between gap-5 bg-[#f0f4f9] py-[10px] px-5 rounded-[50px] ">
            <input
              className="prompt-input max-sm:flex-none max-sm:w-48 flex-[1] bg-transparent p-2 text-lg border-none outline-none"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div className="flex items-center gap-4 max-sm:gap-[5px]">
              <img
                className="w-6 cursor-pointer max-sm:w-5"
                src={assets.gallery_icon}
                alt=""
              />
              <img
                className="w-6 cursor-pointer max-sm:w-5"
                src={assets.mic_icon}
                alt=""
              />
              {input ? (
                <img
                  onClick={() => onSent()}
                  className="w-6 cursor-pointer max-sm:w-5"
                  src={assets.send_icon}
                  alt=""
                />
              ) : null}
            </div>
          </div>

          <p className="bottom-info text-[13px] my-4 mx-auto font-light">
            Gemini may display inaccurate info, including about people, so
            double-check its result
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
