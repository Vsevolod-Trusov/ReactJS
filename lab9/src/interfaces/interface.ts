import {useState} from 'react';

export interface ICatalogItem{
    name: string,
    price: number,
    count: number,
    discount:number,
    imagePath: string,
    isNew: boolean,
    state:any[]
}