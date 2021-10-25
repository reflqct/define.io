import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import Identity from './component/Identity'
import { db } from './db/firebase'
import { collection, getDocs } from 'firebase/firestore'

function App() {
  const [definitions, setDefinitions] = useState([]);
  const refDb = collection(db, "definitions");

  useEffect(() => {
    const getDefinitions = async () => {
      const data = await getDocs(refDb);
      const toMap : any[] = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
      setDefinitions((toMap as any));
    }
  }, []);

  return (
    <div className="App">
      {definitions.map((definition: any) => {
        return (
          <Identity name={definition.name} description={definition.description}/>
        )
      })}
    </div>
  );
}

export default App;
