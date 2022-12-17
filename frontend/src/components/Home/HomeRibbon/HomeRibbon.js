import React from 'react';
import './HomeRibbon.css';
function HomeRibbon() {
    return (
        <>
            <div className='homeRibbon'>
                <div className='homeRibbon-container'>
                    <div className='homeRibbon-container-elements'>
                        <h1 className='homeRibbon-firstText'>50+</h1>
                        <h1 className='homeRibbon-secondText'>ĐẠI LÝ</h1>
                    </div>
                    <div className='homeRibbon-container-elements'>
                        <h1 className='homeRibbon-firstText'>10</h1>
                        <h1 className='homeRibbon-secondText'>TỈNH THÀNH</h1>
                    </div>
                    <div className='homeRibbon-container-elements'>
                        <h1 className='homeRibbon-firstText'>5+</h1>
                        <h1 className='homeRibbon-secondText'>NĂM THÀNH LẬP</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeRibbon
