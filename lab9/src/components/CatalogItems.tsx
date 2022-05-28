import React, {useState} from 'react';
import '../styles/Container.css';
import classnames from 'classnames';
import Modal from "../components/Modal";
import {ICatalogItem} from '../interfaces/interface';

const CatalogItems: React.FC = () => {

    let items: ICatalogItem[] = [
        {name: 'Aist Turbo', price: 'Price', count: 1, isNew: true, discount: 0, imagePath: 'images/Aist Turbo.PNG'},
        {
            name: 'Cube Acid 19\'\'',
            price: 'Price',
            count: 1,
            isNew: true,
            discount: 0,
            imagePath: 'images/Cube Acid 19\'\'.PNG'
        },
        {
            name: 'Krakken Molly',
            price: 'Price',
            count: 1,
            isNew: true,
            discount: 10,
            imagePath: 'images/Krakken Molly.PNG'
        },
        {
            name: 'Racer Bruno 16\'\'',
            price: 'Price',
            count: 1,
            isNew: false,
            discount: 66,
            imagePath: 'images/Racer Bruno 16\'\'.PNG'
        },
        {
            name: 'Racer Sofia',
            price: 'Price',
            count: 1,
            isNew: false,
            discount: 0,
            imagePath: 'images/Racer Sofia.PNG'
        },
        {
            name: 'Racer Tempo 18\'\'',
            price: 'Price',
            count: 1,
            isNew: false,
            discount: 79,
            imagePath: 'images/Racer Tempo 18\'\'.PNG'
        },
        {
            name: 'Racer Turbo',
            price: 'Price',
            count: 1,
            isNew: false,
            discount: 0,
            imagePath: 'images/Racer Turbo.PNG'
        },
        {
            name: 'Spicialized Sirrus 17\'\'',
            price: 'Price',
            count: 1,
            isNew: false,
            discount: 58,
            imagePath: 'images/Spicialized Sirrus 17\'\'.PNG'
        },
        {
            name: 'Stels Miss 18\'\'',
            price: 'Price',
            count: 1,
            isNew: true,
            discount: 0,
            imagePath: 'images/Stels Miss 18\'\'.PNG'
        },
        {
            name: 'Stels Navigator 18\'\'',
            price: 'Price',
            count: 1,
            isNew: false,
            discount: 0,
            imagePath: 'images/Stels Navigator 18\'\'.PNG'
        },
        {
            name: 'Treck FX 22\'\'',
            price: 'Price',
            count: 1,
            isNew: true,
            discount: 15,
            imagePath: 'images/Treck FX 22\'\'.PNG'
        },
        {
            name: 'Treck Verve 19\'\'',
            price: 'Price',
            count: 1,
            isNew: true,
            discount: 99,
            imagePath: 'images/Treck Verve 19\'\'.PNG'
        }
    ];

    return (
        <>
            <div className="Maincontainer">
                <div className="container">
                    {
                        items.map((item: ICatalogItem, id: number) => {
                            return (
                                <><div key={id} className="itemContainer">
                                    <div className='discountContainer'>
                                        <div
                                            className={classnames({
                                                'new': item.isNew,
                                                'default': !item.isNew,
                                            })}><img src='images/new.png' /></div>
                                        <div
                                            className={classnames({
                                                'redDiscount': item.discount>=75,
                                                'yelDiscount': item.discount>50 && item.discount<75,
                                                'greenDiscount': item.discount<=50 && item.discount>0,
                                                'default': item.discount===0,
                                            })}>{item.discount}%</div>
                                    </div>
                                    <div className='imgContainer'><img src={item.imagePath} className="itemImg"/></div>
                                    <h2 className="itemTitle">{item.name}</h2>

                                </div>
                                    <Modal />
                                </>  );
                        })
                    }
                </div>
            </div>
        </>
    );
};
export default CatalogItems;