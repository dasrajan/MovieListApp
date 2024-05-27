import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';

interface Shift {
  id: number;
}

// Context data type definition
interface ShiftContextType {
  shifts: Shift[];
  fetchShifts: () => void;
  updateShift: (shift: string) => void;
}

//Shift Context creation
const ShiftContext = createContext<ShiftContextType>({
  shifts: [],
  fetchShifts: () => {},
  updateShift: () => {},
});

const useShiftContext = () => useContext(ShiftContext);

//Shift Provider
const ShiftProvider = ({children}: {children: ReactNode}) => {
  const [shifts, setShifts] = useState<Shift[]>([]);

  // Function to fetch shifts from API
  const fetchShifts = async () => {
    // console.log('IN CONTEXT: fetchShifts',shifts)
  };

  // Function to update shift
  const updateShift = async (shiftId: string) => {};

  useEffect(() => {
    fetchShifts(); // Fetch shifts when component mounts
  }, []);

  return (
    <ShiftContext.Provider value={{shifts, fetchShifts, updateShift}}>
      {children}
    </ShiftContext.Provider>
  );
};

export {ShiftContext, ShiftProvider, useShiftContext};
