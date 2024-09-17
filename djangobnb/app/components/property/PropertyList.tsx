'use client'

import { useEffect, useState } from 'react'
import PropertyListItem from './PropertyListItem'
import { PropertyType } from '@/types';
import apiService from '@/app/services/apiService';

const PropertyList = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);

  const getProperties = async () => {
     const tmpProperties = await apiService.get('/api/properties/')
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