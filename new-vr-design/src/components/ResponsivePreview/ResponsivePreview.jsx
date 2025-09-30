import { useState } from 'react';
import styles from './ResponsivePreview.module.css';
import { FaDesktop, FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';

// Define the different device sizes and their corresponding icons
const devices = [
  { name: 'desktop', icon: <FaDesktop /> },
  { name: 'laptop', icon: <FaLaptop /> },
  { name: 'tablet', icon: <FaTabletAlt /> },
  { name: 'mobile', icon: <FaMobileAlt /> },
];

const ResponsivePreview = ({ children }) => {
  // State to keep track of the currently active screen size
  const [screenSize, setScreenSize] = useState('desktop');

  return (
    <div className={styles.wrapper}>
      <header className={styles.toolbar}>
        <div className={styles.logo}></div>
        <div className={styles.deviceIcons}>
          {devices.map((device) => (
            <button
              key={device.name}
              className={screenSize === device.name ? styles.active : ''}
              onClick={() => setScreenSize(device.name)}
              title={device.name.charAt(0).toUpperCase() + device.name.slice(1)}
            >
              {device.icon}
            </button>
          ))}
        </div>
        <div className={styles.placeholder}></div> {/* To balance the logo */}
      </header>

      <main className={styles.previewContainer}>
        <div className={`${styles.previewWindow} ${styles[screenSize]}`}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default ResponsivePreview;