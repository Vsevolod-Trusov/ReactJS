import React, {useEffect, useState} from 'react';
import '../styles/Container.css';
import classnames from 'classnames';
import {ICatalogItem} from '../interfaces/interface';

interface IProps {
    catalogItems: ICatalogItem[] ;
}
const CatalogItems: React.FC<IProps> = (props:IProps) => {

    return (
        <>
            <div className="Maincontainer">
                <div className="container">
                    {
                        props.catalogItems.map((item: ICatalogItem, id: number) => {
                            return (
                                <div  className="itemContainer"
                                >
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

                                    <div className="active">
                                        <div className='Prices'>
                                            <div className={classnames({
                                                'cross': item.discount > 0,
                                                'notCross': item.discount == 0
                                            })}>{item.price}$</div>

                                            <div className={classnames({
                                                'newPrice': item.discount > 0,
                                                'oldPrice': item.discount ==0,
                                            })}>{Math.round((item.price*(1-item.discount/100)))}$</div>

                                        </div>
                                        <div >Count:{item.count}</div>
                                        <div className='className'>Good Item</div>
                                    </div>
                                </div>


                        )
                        })
                    }
                </div>
            </div>
        </>
    );
};
export default CatalogItems;