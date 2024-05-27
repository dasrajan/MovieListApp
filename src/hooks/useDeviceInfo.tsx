import {useState, useEffect} from 'react';
import {Platform} from 'react-native';

const useDeviceInfo = (): string | null => {
  const [deviceInfo, setDeviceInfo] = useState<string | null>(null);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      setDeviceInfo('iOS Device');
    } else if (Platform.OS === 'android') {
      setDeviceInfo('Android Device');
    } else {
      setDeviceInfo('Unknown Device');
    }
  }, []);

  return deviceInfo;
};

export default useDeviceInfo;
