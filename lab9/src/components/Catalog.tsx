import react, {ChangeEvent, ChangeEventHandler, useEffect, useState} from 'react';
import {ICatalogItem} from '../interfaces/interface';
import CatalogItems from './CatalogItems';

const Catalog = () => {
    let items: ICatalogItem[] = [
        {name: 'Aist Turbo', price: 200, count: 5, isNew: true, discount: 0, imagePath: 'images/Aist Turbo.PNG', state: useState<boolean>(false)},
        {
            name: 'Cube Acid 19\'\'',
            price: 150,
            count: 3,
            isNew: true,
            discount: 0,
            imagePath: 'images/Cube Acid 19\'\'.PNG',
            state: useState<boolean>(false)
        },
        {
            name: 'Krakken Molly',
            price: 250,
            count: 10,
            isNew: true,
            discount: 10,
            imagePath: 'images/Krakken Molly.PNG',
            state: useState<boolean>(false)
        },
        {
            name: 'Racer Bruno 16\'\'',
            price: 300,
            count: 15,
            isNew: false,
            discount: 66,
            imagePath: 'images/Racer Bruno 16\'\'.PNG',
            state: useState<boolean>(false)
        },
        {
            name: 'Racer Sofia',
            price: 500,
            count: 16,
            isNew: false,
            discount: 0,
            imagePath: 'images/Racer Sofia.PNG',
            state: useState<boolean>(false)
        },
        {
            name: 'Racer Tempo 18\'\'',
            price: 450,
            count: 18,
            isNew: false,
            discount: 79,
            imagePath: 'images/Racer Tempo 18\'\'.PNG',
            state: useState<boolean>(false)
        },
        {
            name: 'Racer Turbo',
            price: 350,
            count: 12,
            isNew: false,
            discount: 0,
            imagePath: 'images/Racer Turbo.PNG',
            state: useState<boolean>(false)
        },
        {
            name: 'Spicialized Sirrus 17\'\'',
            price: 490,
            count: 1,
            isNew: false,
            discount: 58,
            imagePath: 'images/Spicialized Sirrus 17\'\'.PNG',
            state: useState<boolean>(false)
        },
        {
            name: 'Stels Miss 18\'\'',
            price: 380,
            count: 7,
            isNew: true,
            discount: 0,
            imagePath: 'images/Stels Miss 18\'\'.PNG',
            state: useState<boolean>(false)
        },
        {
            name: 'Stels Navigator 18\'\'',
            price: 420,
            count: 1,
            isNew: false,
            discount: 0,
            imagePath: 'images/Stels Navigator 18\'\'.PNG',
            state: useState<boolean>(false)
        },
        {
            name: 'Treck FX 22\'\'',
            price: 500,
            count: 10,
            isNew: true,
            discount: 15,
            imagePath: 'images/Treck FX 22\'\'.PNG',
            state: useState<boolean>(false)
        },
        {
            name: 'Treck Verve 19\'\'',
            price: 450,
            count: 15,
            isNew: true,
            discount: 99,
            imagePath: 'images/Treck Verve 19\'\'.PNG',
            state: useState<boolean>(false)
        }
    ];
const [catalog, setCatalog] = useState<ICatalogItem[]>(items);
const [DiscDirection, setDiscDirection] = useState<boolean>(true);
const [PriceDirection, setPriceDirection] = useState<boolean>(true);
const [CountDirection, setCountDirection] = useState<boolean>(true);
const [DiscountSort, setDiscountSort] = useState<boolean>(false);
const [PriceSort, setPriceSort] = useState<boolean>(false);
const [CountSort, setCountSort] = useState<boolean>(false);
const [SearchValue, setSearchValue] = useState<string>("");
    const FilterNewItem=()=>{
        let itemsList = items.filter(item=>item.isNew===true);
        setCatalog(itemsList);
    }
    useEffect(()=>{

       if(DiscountSort){
               let itemsList:ICatalogItem[] ;
               if(DiscDirection) {
                   itemsList = items.filter(item=>item.discount!==0);
                   itemsList = itemsList.filter(item=>item.isNew===true);
                   itemsList = itemsList.sort((a:ICatalogItem, b:ICatalogItem) => {
                       return a.discount - b.discount
                   });
                   let teil: ICatalogItem[] = items.filter(item=> itemsList.indexOf(item)=== -1 && item.discount!==0
                       )
                   teil = teil.sort((a:ICatalogItem, b:ICatalogItem) => {
                       return a.discount - b.discount
                   });
                   for (let index = 0; index < teil.length; index++){
                       itemsList.push(teil[index])
                   }
                   setDiscDirection(false)
               }
               else {
                   itemsList = items.filter(item=>item.discount!==0);
                   itemsList = itemsList.filter(item=>item.isNew===true);
                   itemsList = itemsList.sort((a:ICatalogItem, b:ICatalogItem) => {
                       return b.discount - a.discount
                   });
                   let teil: ICatalogItem[] = items.filter(item=> itemsList.indexOf(item)=== -1 && item.discount!==0
                   )
                   teil = teil.sort((a:ICatalogItem, b:ICatalogItem) => {
                       return b.discount - a.discount
                   });
                   for (let index = 0; index < teil.length; index++){
                       itemsList.push(teil[index])
                   }
                   setDiscDirection(true)
               }
               setDiscountSort(false);
               setCatalog(itemsList)
       }
       else if(PriceSort){
           let itemsList: ICatalogItem[];
           if(PriceDirection) {
               itemsList = items.filter(item=>item.isNew===true);
               itemsList = itemsList.sort((a:ICatalogItem, b:ICatalogItem) => {
                   return a.price - b.price
               });
               let teil: ICatalogItem[] = items.filter(item=> itemsList.indexOf(item)=== -1)
               teil = teil.sort((a:ICatalogItem, b:ICatalogItem) => {
                   return a.price - b.price});
               for (let index = 0; index < teil.length; index++){
                   itemsList.push(teil[index])
               }

               setPriceDirection(false)
           }
           else {
               itemsList = items.filter(item=>item.isNew===true);
               itemsList = itemsList.sort((a:ICatalogItem, b:ICatalogItem) => {
                   return b.price - a.price
               });
               let teil: ICatalogItem[] = items.filter(item=> itemsList.indexOf(item)=== -1)
               teil = teil.sort((a:ICatalogItem, b:ICatalogItem) => {
                   return b.price - a.price});
               for (let index = 0; index < teil.length; index++){
                   itemsList.push(teil[index])
               }
               setPriceDirection(true)
           }
           setPriceSort(false)
           setCatalog(itemsList)

       }
       else if(CountSort){
           let itemsList: ICatalogItem[];
           if(CountDirection) {
               itemsList = items.filter(item=>item.isNew===true);
               itemsList = itemsList.sort((a:ICatalogItem, b:ICatalogItem) => {
                   return a.count - b.count
               });
               let teil: ICatalogItem[] = items.filter(item=> itemsList.indexOf(item)=== -1)
               teil = teil.sort((a:ICatalogItem, b:ICatalogItem) => {
                   return a.count - b.count});
               for (let index = 0; index < teil.length; index++){
                   itemsList.push(teil[index])
               }
               setCountDirection(false)
           }
           else {
               itemsList = items.filter(item=>item.isNew===true);
               itemsList = itemsList.sort((a:ICatalogItem, b:ICatalogItem) => {
                   return b.count - a.count
               });
               let teil: ICatalogItem[] = items.filter(item=> itemsList.indexOf(item)=== -1)
               teil = teil.sort((a:ICatalogItem, b:ICatalogItem) => {
                   return b.count - a.count});
               for (let index = 0; index < teil.length; index++){
                   itemsList.push(teil[index])
               }
               setCountDirection(true)
           }
           setCountSort(false)
           setCatalog(itemsList)

       }
       else if(SearchValue){
           console.log(SearchValue)
           let itemsList = items.filter(item=>item.name.indexOf(SearchValue) != -1)
           setCatalog(itemsList)
       }
    },[DiscountSort,PriceSort, SearchValue, CountSort])



  return (
    <>
        <div>
            <div className="SearchPanel">
                <div className='Inputs'>
                    <button type='button' onClick={FilterNewItem} >New</button>
                    <button type='button' onClick={()=>setDiscountSort(prev=>!prev)}>Discount</button>
                    <button type='button' onClick={()=>setPriceSort(prev=>!prev)}>Price</button>
                    <button type='button' onClick={()=>setCountSort(prev=>!prev)}>Count</button>
                    <label htmlFor="SearchInput">
                        <input type="text"
                               id="SeaachInput"
                               placeholder='Search'
                               value ={ SearchValue}
                               onChange={(e:ChangeEvent<HTMLInputElement>)=>setSearchValue(e.target.value || "" )}
                        />
                    </label>
                    <button type='button' className='SearchBtn' onClick={()=>setCatalog(items)}>Show All</button>

                </div>
            </div>
        </div>
        <CatalogItems catalogItems={catalog}></CatalogItems>
    </>
  );
};

export default Catalog;