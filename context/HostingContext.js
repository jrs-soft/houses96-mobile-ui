// HostingContext.js
import React, { createContext, useState } from 'react';

// Create a context
export const HostingContext = createContext();

// Create a provider component
export const HostingProvider = ({ children }) => {
  const [hostingData, setHostingData] = useState({
    id: null,
    hostId: null,
    title: null,
    description: null,
    descriptionTypes: [],
    stateId: null,
    stateName: null,
    cityId: null,
    cityName: null,
    address: null,
    zipCode: null,
    latitude: null,
    longitude: null,
    typeId: null,
    typeOfPlace: null,
    amenityIds: [],
    pictures: [],
    pricePerNight: null,
    numberOfBedrooms: null,
    numberOfBathrooms: null,
    numberOfBeds: null,
    maximumNumberOfGuests: null,
    firstBookingType: null,
    promotionDiscount: '20%',
    weeklyDiscount: '10%',
    monthlyDiscount: '20%',
    isPromoChecked: false,
    isWeeklyChecked: false,
    isMonthlyChecked: false,
    createdAt: null,
    modifiedAt: null,
    status: null
  });

  return (
    <HostingContext.Provider value={{ hostingData, setHostingData }}>
      {children}
    </HostingContext.Provider>
  );
};
