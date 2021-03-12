import React, { useState, useEffect } from 'react';
import clogo from './carrier-corp-logo.png';
import logo from './logo.svg';
import './App.css';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listAmplifyNetbox3s } from './graphql/queries';
import { createAmplifyNetbox3 as createNbMutation, deleteAmplifyNetbox3 as deleteNbMutation } from './graphql/mutations';

const initialFormState = { systemIdentifier: 'TESTNETBOXID', clientId: 'TESTCLIENTID' }

function App() {
  const [netboxes, setNbs] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNbs();
  }, []);

  async function fetchNbs() {
    const apiData = await API.graphql({ query: listAmplifyNetbox3s });
    setNbs(apiData.data.listAmplifyNetbox3s.items);
  }

  async function createNb() {
    if (!formData.systemIdentifier || !formData.clientId) {
      await API.graphql({ query: createNbMutation, variables: { input: formData } });
      return;
    }
    await API.graphql({ query: createNbMutation, variables: { input: formData } });
    setNbs([ ...netboxes, formData ]);
    setFormData(initialFormState);
  }

  async function deleteNb({ id }) {
    const newNbArray = netboxes.filter(netbox => netbox.id !== id);
    setNbs(newNbArray);
    await API.graphql({ query: deleteNbMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <img src={clogo} className="center" alt="Carrier" />
      <img src={logo} className="App-logo" alt="logo" />
      <h1>QR Code Access Control Management Portal</h1>
      <h2>By A-Team</h2>
      <input
        onChange={e => setFormData({ ...formData, 'systemIdentifier': e.target.value})}
        placeholder="NetBox Identifier"
        value={formData.systemIdentifier}
      />
      <input
        onChange={e => setFormData({ ...formData, 'clientId': e.target.value})}
        placeholder="Client ID"
        value={formData.clientId}
      />
      <button onClick={createNb}>Add NetBox</button>
      <div style={{marginBottom: 30}}>
        {
          netboxes.map(netbox => (
            <div key={netbox.id || netbox.systemIdentifier}>
              <p><b>NetBox: </b>{netbox.systemIdentifier}, 
              {netbox.clientId}</p>
              <button onClick={() => deleteNb(netbox)}>Remove NetBox</button>
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
