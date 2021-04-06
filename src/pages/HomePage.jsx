import React, { useEffect, useState } from 'react'
import ChartsSection from '../components/home/ChartsSection'
import DataTable from '../components/home/DataTable'
import SearchForm from '../components/home/SearchForm'
import SearchResults from '../components/home/SearchResults'
import styles from '../sass/layout/components/home/home.module.scss'
export default function HomePage() {
    const [database, setDatabase] = useState({});
    const [selectedMobile, setSelectedMobile] = useState(null);

    useEffect(() => {
        console.log(selectedMobile);
    }, [selectedMobile]);

    useEffect(() => {
        setDatabase(JSON.parse(window.localStorage.getItem("database-think-loud")) || {})
    }, []);

    return (
        <div className={`container ${styles.home}`}>
            <div>
                <SearchForm />
                <DataTable database={database} setSelectedMobile={setSelectedMobile} />
                <SearchResults />
            </div>

            <div>
                <ChartsSection />
            </div>
        </div>
    )
}
