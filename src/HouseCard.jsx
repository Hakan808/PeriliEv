import React from 'react'

const HouseCard = ({ houseData, index, total }) => {
    const  {price,location,acres, yearBuilt,bedrooms,bathrooms,otherRooms,garage,airConditioning,heating,haunted,squareFeet} = houseData;
  return (
    
        <div className="house-card">
      <p>
        {total} / {index + 1}
      </p>
      <img src={houseData.image}  />
      <div>
        <ul>
            <li>
              <span>Fiyat:</span>
              {price}
            </li>
            <li>
              <span>Lokasyon:</span>
              {location}
            </li>
            <li>
              <span>Metrekare:</span>
              {squareFeet}
            </li>
            <li>
              <span>Dönüm:</span>
              {acres}
            </li>
            <li>
              <span>Yapım Yılı:</span>
              {yearBuilt}
            </li>
            <li>
              <span>Yatak Odası:</span>
              {bedrooms}
            </li>
            <li>
              <span>Banyo:</span>
              {bathrooms}
            </li>
            <li>
              <span>Diğer Odalar:</span>
              {otherRooms}
            </li>
            <li>
              <span>Garaj:</span>
              {garage ? "Evet" : "Hayır"}
            </li>
            <li>
              <span>Klima:</span>
              {airConditioning ? "Evet" : "Hayır"}
            </li>
            <li>
              <span>Isıtma Sistemi:</span>
              {heating ? "Evet" : "Hayır"}
            </li>
            <li>
              <span>Lanetli:</span>
              {haunted ? "Evet" : "Hayır"}
            </li>
          </ul>
      </div>
     
    </div>

     
  )
}

export default HouseCard
