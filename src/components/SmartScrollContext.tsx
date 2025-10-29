import React from "react";

export const SmartScrollContext = React.createContext<(id: string) => void>(() => {});

export const useSmartScroll = () => React.useContext(SmartScrollContext);