import React from "react";
interface Props {
    title: string;
    price: number;
}

export default function Candy(props: Props): JSX.Element {
    const { title, price } = props;
    return (
        <div>
            <h2>Candy</h2>
            Title: {title}
            Price:{price}
        </div>
    );
}
