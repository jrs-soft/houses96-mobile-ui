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
    descriptionType: null,
    stateId: null,
    cityId: null,
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
