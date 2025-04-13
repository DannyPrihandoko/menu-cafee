import { useEffect } from 'react';

export const useWatch = (deps: unknown[], closure: VoidFunction) => {
    useEffect(() => {
        closure();
    }, deps);
};

export const useMounted = (closure: VoidFunction) => {
    useEffect(() => {
        closure();
    }, []);
};

export const useDidUpdate = (deps: unknown[], closure: VoidFunction) => {
    useEffect(() => {
        closure();
    }, deps);
};
