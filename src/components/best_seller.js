
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/best_seller.css";

export default function Bestseller(){
    const [data, setData] = useState("");
    const getProducts = async () => {
        try {
            const result = await axios.get(
                "https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789821/React%20Class/Jahanavi/featured_dclokw.json"
          );
          setData(result.data);
        } catch (error) {
          console.log(error);
        }
    };

    useEffect(()=>{
        getProducts();
    },[]);
    
    return (
          <div className="bestsellerContainer">
            {data &&
              data.map((e) => {
                console.log(e);
                  return (



                    <div>

                        <img src={e.pictures[0].url} className="bestsellerimg"/>
                        <p>{e.name}</p>
                    </div>




                //       <div> 
                //     {e.pictures &&
                //       e.pictures.map((f) => {
                //         console.log(f);
                //         return (
                //             <div>
                //             <img src={f.url} className="featureimg" />
                //           </div>
                //         );
                //     })}
                //     <div>{e.name}</div> 
                //   </div>
                );
            })}
          </div>
      );

    }


