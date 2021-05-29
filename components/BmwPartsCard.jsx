import React ,{useContext} from 'react'
import Style from '../styles/BmwPartsCard.module.css'
import Link from 'next/link'
import { Context } from "../context/Context";
const BmwPartsCard = ({data}) => {
    const [lang, setlang] = useContext(Context);

   
    return (
        <Link href={`/product-detail/${data.id}`}>
        <a> 
        <div className={Style.partCards} style={{background:`url(https://bmwpartsbaku.az/public/${data.mainimage})`}}>
   
                     <div>
    <p>{data[`title_${lang}`]}</p>
                <p>{data.price} AZN</p>
                    </div>   
        </div>
        </a>
                </Link>
    )
}

export default BmwPartsCard
