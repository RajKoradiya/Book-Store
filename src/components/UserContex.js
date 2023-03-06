import React from "react";

const UserContex = React.createContext();

const UserProvider = UserContex.Provider;
const UserConsumer = UserContex.Consumer;

export {UserProvider, UserConsumer}