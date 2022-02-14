import { isVisible } from "@testing-library/user-event/dist/utils";
import { useEffect,useState } from "react";
import {BiArrowFromBottom, BiWindows} from "react-icons/bi";

import { classNames } from "../../utils/classNames";

export const ScrollToTop = () => {
    const [isVisible, setIsVisibile] = useState(false)
    const toggleVisibility = () => {
        if(window.pageYOffset > 300) {
            setIsVisibile(true)
        }
        else {
            setIsVisibile(false)
        }
    };

    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    return (
        <div className='fixed bottom-2 right-2'>
            <button type='button' onClick={ScrollToTop} className={classNames(
                isVisible ? 'opacity-100' : 'opacity-0',
                'inline-flex items-center p-3 rounded-full shadow-sm text-white bg-pink-600 transition-opacity hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'
            )}>
                <BiArrowFromBottom className='h-6 w-6' aria-hidden='true' />
            </button>
        </div>
    ) 
};