import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useParams } from 'react-router';

import Data3 from './Data3';

function View3(props) {
    const {id} = useParams();
    // alert(id);
    const [items,setItems] = useState({});

    const filterItem = (id) =>{
        const updateItem = Data3.filter((curElem,index) =>{
            return index == id;
        })
        console.log(updateItem[0])
        setItems(updateItem[0]);

    }

    useEffect(()=>{
        filterItem(id)
    },[])
    return (
        <div>
            <Header/>
           
           <div className="main container shadow p-2">
            <div className="row">
                <div className="col-md-6">
                    <img src={`/${items?.image}`} alt="" className='w-100' />
                </div>
                <div className="col-md-6">
                    <h1>{items?.title}</h1>
                    <h3>{items?.para}</h3>
                    <p>{items?.price}</p>
                    <button className="btn btn-outline-info mt-1 me-3">Buy Now</button>
                </div>
            </div>
           </div>
            <Footer/>
        </div>
    );
}

export default View3;