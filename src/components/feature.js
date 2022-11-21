
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/feature.css";

export default function Feature(){
    const [data, setData] = useState("");
    const getProducts = async () => {
        try {
            const result = await axios.get(
                "https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789821/React%20Class/Jahanavi/products_t65vxn.json"
          );
          setData(result.data);
          console.log(result);
        } catch (error) {
          console.log(error);
        }
    };

    useEffect(()=>{
        getProducts();
    },[]);
    

    return (
       
          
    
          <div className="featureContainer">
            {data &&
              data.map((e) => {
                console.log(e);
                  return (



                    <div>

                        <img src={e.pictures[0].url} className="featureimg"/>
                        <p>{e.name}</p>
                    </div>
                );
            })}
          </div>
    
       
      );

    }


