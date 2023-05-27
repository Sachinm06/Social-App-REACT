import React from 'react'
import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg' src="./assets/person/p1.jpeg" alt="" />
                    <input className='shareInput' placeholder='Share your thoughts....' type="text" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMediaIcon htmlColor='blue' className='shareIcon'/>
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <LabelIcon htmlColor='green' className='shareIcon'/>
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className="shareOption">
                            <LocationOnIcon htmlColor='red' className='shareIcon'/>
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon'/>
                            <span className='shareOptionText'>Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Post</button>
                </div>
            </div>

        </div>
    )
}

export default Share