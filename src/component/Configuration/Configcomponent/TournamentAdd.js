import React, { useState } from 'react';
import ConfigCard from '../ConfigCard/ConfigCard';

const TournamentAdd = () => {
  const [tournamentData, setTournamentData] = useState({
    title: '',
    entryFee: '',
    prizePool: '',
    maxPlayers: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTournamentData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Tournament Created:', tournamentData);
    // API call karo yaha
  };

  return (
    <div className="config-page" style={{margin:'20px',width:'90%'}}>
      <ConfigCard
        title="Create New Tournament"
        icon="fa-trophy"
        fields={[
          { label: 'Tournament Title', name: 'title' },
          { label: 'Entry Fee (₹)', name: 'entryFee', type: 'number' },
          { label: 'Prize Pool (₹)', name: 'prizePool', type: 'number' },
          { label: 'Maximum Players', name: 'maxPlayers', type: 'number' },
          { label: 'Start Date & Time', name: 'startDate', type: 'datetime-local' },
          { label: 'End Date & Time', name: 'endDate', type: 'datetime-local' },
        ]}
        data={tournamentData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        btnLabel="Create Tournament"
      />
    </div>
  );
};

export default TournamentAdd;
