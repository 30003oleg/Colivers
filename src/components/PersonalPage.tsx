import React from 'react';
import avatarMan from '../assets/avatar-man.svg';
import './personalPage.scss';
import avatarWoman from '../assets/avatar-woman.svg'
import closeButton from '../assets/close-button.svg'

const PersonalPage = ({ }) => {
    const [isVisible, setVisible] = React.useState(true);
    const [inputValue, setInputValue] = React.useState(`My name is Yoshikage Kira. I'm 33 years old. My house is in the northeast section of Morioh, where all the villas are, and I am not married. I work as an employee for the Kame Yu department stores, and I get home every day by 8 PM at the latest. I don't smoke, but I occasionally drink. I'm in bed by 11 PM, and make sure I get eight hours of sleep, no matter what. After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like a baby, I wake up without any fatigue or stress in the morning. I was told there were no issues at my last check-up. I'm trying to explain that I'm a person who wishes to live a very quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know that is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone.`);
    
    const onClose = () => {
        setVisible(false);
    }
     let male = true;
    const avatar = male ? avatarMan : avatarWoman
    return (
        <div className={`personalPage ${isVisible ? '' : 'closed'}`}>
            <div className="personalPage__title">
                <h2>Your Personal Page</h2>
            </div>
            <div className="personalPage_main-info">
                <div className="personalPage__friends">
                    <span>Friends:</span>
                    <span>21</span>
                </div>
                <div className="personalPage__avatar">
                    
                    <img src={avatar} alt="avatar-ico" />
                </div>
                <div className="personalPage__posts">
                    <span>Posts:</span>
                    <span>1</span>
                </div>
            </div>
            <div className="personalPage__name">
                <span>Matthew</span>
                <span>Ball</span>
            </div>
            <div className="personalPage__about">
                <form action="">
                    <label htmlFor="">About</label>
                    <textarea
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}></textarea>
                </form>
            </div>
            <div className="personalPage__closeButton">
                <img
                    onClick={onClose}
                    src={closeButton}
                    alt="close-button-ico" />
            </div>
        </div>
        )
}
export default PersonalPage;