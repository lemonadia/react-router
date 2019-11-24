import React, {useState, useEffect} from 'react';
import './App.css';

function ItemDetail({match}) {
  useEffect(() => {
    fetchItem();
  },[]);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id={{match.params.id}}`)
    const item = await fetchItem.json();

    console.log(item);
    console.log(match);
  }




  return (
    <div>
      <h1>Item</h1>
    </div>
  );
}

export default ItemDetail;
