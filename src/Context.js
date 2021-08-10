import React from 'react';

const context = React.createContext();

// context.Provider
// context.Consumer

export const ContextProvider = context.Provider // To provide data to nested elements
export const ContextConsumer = context.Consumer