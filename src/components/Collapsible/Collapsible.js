import React, { useState } from 'react';
import './Collapsible.css'
function Collapsible(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='collapsible'>
            <div className='toggle' onClick={() => setIsOpen(!isOpen)}>
            {props.label}
            </div>
            
            <div className={isOpen ? "content-parent show" : 'content-parent'}>
                <div className='content'>{props.children}</div>
            </div>
        </div>
    );
}

export default Collapsible;