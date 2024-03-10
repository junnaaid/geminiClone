import React, { useContext, useState } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="user-icon" />
            </div>
            <div className="main-container">

                {!showResult
                    ?
                    <><div className="greet">
                        <p><span>Hello, Muneeb.</span></p>
                        <p>How can I help you today?</p>
                    </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places for an upcoming road trip</p>
                                <img src={assets.compass_icon} />
                            </div>
                            <div className="card">
                                <p>Suggest videos to quickly solve a problem</p>
                                <img src={assets.bulb_icon} />
                            </div>
                            <div className="card">
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} />
                            </div>
                            <div className="card">
                                <p>Refactor the following code</p>
                                <img src={assets.code_icon} />
                            </div>
                        </div>
                    </> :
                    <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} />
                            {loading
                                ?
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                :
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}

                        </div>
                    </div>}


                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter prompt here' />
                        <div>
                            <img src={assets.gallery_icon} />
                            <img src={assets.mic_icon} />
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} /> : null}
                        </div>
                    </div>
                    <div className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses. <a href="https://support.google.com/gemini?p=privacy_notice" target='_blank'>Your privacy and Gemini Apps</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
