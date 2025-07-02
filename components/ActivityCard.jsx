import React from 'react';
import styles from './ActivityCard.module.css';

const ActivityCard = ({ activity }) => {
  return (
    <div className={styles.card}>
      {/* ...existing card content... */}
      <div className={styles.participantsSection}>
        <h4 className={styles.participantsTitle}>Participants</h4>
        <ul className={styles.participantsList}>
          {activity.participants && activity.participants.length > 0 ? (
            activity.participants.map((participant, idx) => (
              <li key={idx} className={styles.participantItem}>
                {participant}
              </li>
            ))
          ) : (
            <li className={styles.noParticipants}>No participants yet.</li>
          )}
        </ul>
      </div>
      {/* ...existing card content... */}
    </div>
  );
};

export default ActivityCard;