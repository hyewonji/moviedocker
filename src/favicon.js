import { useEffect } from 'react';

const Favicon = () => {
    useEffect(()=>{
        const head = document.querySelector("head");
        const link = head.querySelector("link")
        link.href = "https://www.flaticon.com/svg/vstatic/svg/4156/4156418.svg?token=exp=1614994660~hmac=e9aee3cbaa32f86e93b640367644ff5a";
    })
};

export default Favicon;