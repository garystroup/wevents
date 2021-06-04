import {useEffect} from 'react';
import  {useLocation} from 'react-router-dom';

export default function ScrollToTop() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname]);

    return null;
}

//useEffect hook: a side effect will happen when ScrollToTop mounts and anytime the pathname changes