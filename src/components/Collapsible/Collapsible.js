import React, { useState } from 'react';

function Collapsible(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className='toggle' onClick={() => setIsOpen(!isOpen)}>{props.children}</div>
            {isOpen && <div className="content">{props.label}</div>}
        </div>
    );
}

export default Collapsible;