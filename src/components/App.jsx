import React from "react";
import PhonebookApp from './PhonebookApp/PhonebookApp';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <PhonebookApp setFiltered={PhonebookApp} />
    </div>
  );
};
