import React from 'react';
import Candy from './Candy';

export default function CandyShop():JSX.Element {
  return (
    <div>
      <h1>CandyShop</h1>
     <Candy title='mms' price ={2.5}/>
     <Candy title='mars' price ={3.5}/>
     <Candy title='snikers' price ={5.5}/>

    </div>
  );
}