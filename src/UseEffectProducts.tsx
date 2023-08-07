import axios from 'axios';
import React, { useEffect, useState } from 'react'

export interface productsprops {
    title: string;
    description: string;
    images: string[];
    price: number;
}

const UseEffectProducts = () => {

    const [data, setData] = useState<productsprops[]>([]);

    useEffect(() => {
        // fetch('https://dummyjson.com/products')
        //     .then(response => response.json())
        //     .then(data => {
        //         setData(data.products);
        //         console.log(data);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })

        axios.get('https://dummyjson.com/products')
        .then(response => {  setData(response.data.products)
            console.log(response)
            })
          

        .catch(error => {
            console.log(error);
        });
    
    }, []);
    return (
        
        <div>
            {
                data.length > 0  ?
                    (<ul>
                        {data.map((item: productsprops, index: number) => (
                            <li key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <p>Price: ${item.price}</p>
                                <img src={item.images[0]} alt={item.title} />
                            </li>
                        ))}
                    </ul>) :

                    (
                        <p>Loading...</p>
                    )
            }
        </div>
    )
}

export default UseEffectProducts
