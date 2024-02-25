import React, { useEffect, useState } from "react";

export default function DogEffect(): JSX.Element {
    // Mount, update, unmount
    const [numberOfDogs, setNumberOfDogs] = useState<number>(0);
    const [numberOfСats, setNumberOfCats] = useState<number>(0);
    useEffect(() => {
        // с пустым массивом зависимостей
        console.log("UseEffect 1 - только при первой отрисовке");
    }, []);
    useEffect(() => {
        // без зависимостей
        console.log("UseEffect 2 - при первой отрисовке и при любом изменении");
    });
    useEffect(() => {
        // с пустым массивом зависимостей
        console.log("UseEffect 3- только при первой отрисовке");
    }, [numberOfСats]);

    function handleInvite(): void {
        setNumberOfDogs(numberOfDogs + 1);
    }
    function handleInviteCat(): void {
        setNumberOfCats(numberOfСats + 1);
    }
    return (
        <div>
            <h1>DogEffect</h1>
            Number of dogs: {numberOfDogs}
            Number of cats: {numberOfСats}
            <button type="button" onClick={handleInvite}>
                Invite dog
            </button>
            <button type="button" onClick={handleInviteCat}>
                Invite cat
            </button>
        </div>
    );
}
