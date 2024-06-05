import React, { useEffect } from 'react';

type DisplayNumbersProps = {
    callback: (num: number) => void;
    delay: number;
};

const DisplayNumbers: React.FC<DisplayNumbersProps> = ({ callback, delay }) => {
    useEffect(() => {
        let count = 1;

        const printNextNumber = () => {
            callback(count);
            count++;
            setTimeout(printNextNumber, delay);
        };

        const timerId = setTimeout(printNextNumber, delay);

        return () => clearTimeout(timerId);
    }, [callback, delay]);

    return null;
};

const Ex4: React.FC = () => {
    const logNumber = (num: number) => {
        console.log(num);
    };

    return (
        <div>
            <DisplayNumbers callback={logNumber} delay={1000} />
        </div>
    );
};

export default Ex4;
