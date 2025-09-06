import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Entry from './components/Entry.jsx'
import data from './data.js'

function App() {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            // Simulate loading state for dramatic effect
            setTimeout(() => {
                setEntries(data);
                setLoading(false);
            }, 1500);
        } catch (err) {
            setError('Failed to load your amazing travel destinations');
            setLoading(false);
        }
    }, []);

    const entryElements = entries.map((entry) => {
        return (
            <Entry
                key={entry.id}
                entry={entry}
            />
        )
    });

    if (loading) {
        return (
            <div className="app">
                <Header />
                <main className="container">
                    <div className="loading">Preparing your Mediterranean adventure...</div>
                </main>
            </div>
        );
    }

    if (error) {
        return (
            <div className="app">
                <Header />
                <main className="container">
                    <div className="error">{error}</div>
                </main>
            </div>
        );
    }

    return (
        <div className="app">
            <Header />
            <main className="container" role="main">
                {entryElements.length > 0 ? entryElements : (
                    <div className="no-entries">Your Mediterranean journey awaits! 🌊✨</div>
                )}
            </main>
        </div>
    )
}

export default App
