'use client'

import { useEffect, useState } from 'react'
import PropertyListItem from './PropertyListItem'
import { PropertyType } from '@/types';
import apiService from '@/app/services/apiService';

interface PropertyListProps{
  landlord_id?: string | null;
}
const PropertyList:React.FC<PropertyListProps> = ({landlord_id}) => {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  
  console.log('landlord id',landlord_id)
  const getProperties = async () => {
    let url = '/api/properties/';

    if(landlord_id){
      url += `?landlord_id=${landlord_id}`
    }
    console.log('URL',url)
     const tmpProperties = await apiService.get(url)
     setProperties(tmpProperties.data)
     console.log(properties)
  }

  useEffect(()=>{

    getProperties();
  },[])
  return (
    <>
      {properties.map((property)=>{
        return(
          <PropertyListItem key={property.id} property={property}/>
        )
      })}
   
    </>
  )
}

export default PropertyList