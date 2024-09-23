import { useEffect, useState, useRef } from 'react';
import styles from './ShowerStatus.module.css';

const ShowerStatus = () => {
  const [showerData, setShowerData] = useState([]);
  const [selectedShower, setSelectedShower] = useState(null);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
  const [reserveFormVisible, setReserveFormVisible] = useState(false);
  const [reservationResult, setReservationResult] = useState(null);

  // Form inputs for reservation
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [duration, setDuration] = useState(15); // Default to 15 minutes

  const popoverRef = useRef(null);

  const pollShowerData = async () => {
    try {
      const response = await fetch('/api/showers');
      if (response.ok) {
        const data = await response.json();
        setShowerData(data);
      } else {
        console.error('Failed to fetch shower data');
      }
    } catch (error) {
      console.error('Error fetching shower data:', error);
    }
  };

  useEffect(() => {
    pollShowerData();
    const interval = setInterval(() => {
      pollShowerData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getRowStyle = (shower) => {
    if (shower.remainingTime < 5 && shower.remainingTime > 0) return styles.lowTime;
    if (!shower.online) return styles.offline;
    if (shower.underMaintenance) return styles.underMaintenance;
    if (shower.occupied) return styles.occupiedYes;
    return styles.unoccupied;
  };

  const handleRowClick = (shower, event) => {
    setSelectedShower(shower);
    setPopoverVisible(true);
    setPopoverPosition({
      top: event.clientY,
      left: event.clientX,
    });
  };

  const handleMaintenanceAction = async (action) => {
    const endpoint = action === 'complete' ? '/api/maintenance/complete' : '/api/maintenance/flag';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ showerId: selectedShower.id }),
      });

      if (response.ok) {
        console.log(`${action} maintenance action successful`);
        pollShowerData();
      } else {
        console.error(`Failed to ${action} maintenance`);
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setPopoverVisible(false);
  };

  const handleReserve = async () => {
    try {
      const response = await fetch('/api/reservation/reserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          phoneNumber,
          durationInMinutes: duration,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setReservationResult(data);
      } else {
        console.error('Failed to reserve shower');
      }
    } catch (error) {
      console.error('Error reserving shower:', error);
    }
  };

  return (
    <div className={styles['table-container']}>
      <h1 className={styles.header}>Shower Status</h1>
      <button className={styles.reserveButton} onClick={() => setReserveFormVisible(!reserveFormVisible)}>
        Reserve a Shower
      </button>
      {reserveFormVisible && (
        <div className={styles['reserve-form']}>
          <label>
            Duration:
            <select value={duration} onChange={(e) => setDuration(Number(e.target.value))}>
              <option value={15}>15 Minutes</option>
              <option value={30}>30 Minutes</option>
            </select>
          </label>

          <label>
            Email (optional):
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </label>

          <label>
            Phone Number (optional):
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter phone number"
            />
          </label>

          <button onClick={handleReserve}>Submit Reservation</button>

          {reservationResult && (
            <div className={styles['reservation-result']}>
              <h3>Reservation Confirmed!</h3>
              <p>Pin Code: {reservationResult.pinCode}</p>
              <p>Shower ID: {reservationResult.showerId}</p>
            </div>
          )}
        </div>
      )}

      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>Online</th>
            <th className={styles.th}>Under Maintenance</th>
            <th className={styles.th}>Occupied</th>
            <th className={styles.th}>Remaining Time</th>
          </tr>
        </thead>
        <tbody>
          {showerData.map((shower) => (
            <tr
              key={shower.id}
              className={`${styles.tr} ${getRowStyle(shower)}`}
              onClick={(event) => handleRowClick(shower, event)}
            >
              <td className={styles.td}>{shower.id}</td>
              <td className={styles.td}>{shower.online ? 'Yes' : 'No'}</td>
              <td className={styles.td}>{shower.underMaintenance ? 'Yes' : 'No'}</td>
              <td className={styles.td}>{shower.occupied ? 'Yes' : 'No'}</td>
              <td className={styles.td}>{shower.remainingTime}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {popoverVisible && selectedShower && (
        <div
          className={`${styles.popover} ${popoverVisible ? styles.visible : ''}`}
          style={{ top: `${popoverPosition.top}px`, left: `${popoverPosition.left}px` }}
          ref={popoverRef}
        >
          <button className={styles['close-popover']} onClick={() => setPopoverVisible(false)}>×</button>
          <div className={styles['popover-content']}>
            {!selectedShower.underMaintenance ? (
              <button onClick={() => handleMaintenanceAction('flag')}>Flag for Cleaning</button>
            ) : (
              <button onClick={() => handleMaintenanceAction('complete')}>Complete Maintenance</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowerStatus;
