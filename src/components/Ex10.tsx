import React from 'react';

type Callback<T> = (element: T, index: number, array: T[]) => boolean;

function myFindIndex<T>(array: T[], _valueToFind: T, callback: Callback<T>): number {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
const array = [5, 12, 8, 130, 44];
const valueToFind = 8;
const callback = (element: number) => element === valueToFind;

const index = myFindIndex(array, valueToFind, callback);

const Ex10: React.FC = () => {
    return (
        <div>
            <p>Index found: {index}</p>
        </div>
    );
}

export default Ex10;
