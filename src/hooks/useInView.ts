// hooks/useInView.ts
import { useState, useEffect, RefObject } from "react";

const useInView = <T extends HTMLElement>(ref: RefObject<T>): boolean => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    return isVisible;
};

export default useInView;
