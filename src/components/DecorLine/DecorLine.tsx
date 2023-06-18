import './DecorLine.css'
import VisibilitySensor from 'react-visibility-sensor';
import { useState} from 'react';

export default function DecorLine() {
    const [isVisible, setIsVisible] = useState(false); // Track visibility state
    const handleVisibilityChange = (isVisible: boolean) => {
        setIsVisible(isVisible);
      };
    return (
        <VisibilitySensor partialVisibility onChange={handleVisibilityChange}>
            <div className={`decor-line ${isVisible ? 'visible' : ''}`}></div>
        </VisibilitySensor>
    )
}