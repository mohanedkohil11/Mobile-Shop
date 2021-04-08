import React, { useEffect, useState } from 'react'
import ChartsSection from '../components/home/ChartsSection'
import DataTable from '../components/home/DataTable'
import SearchForm from '../components/home/SearchForm'
import MobileDetails from '../components/home/MobileDetails'
import styles from '../sass/layout/components/home/home.module.scss'
export default function HomePage() {
    const [database, setDatabase] = useState([]);
    const [selectedMobile, setSelectedMobile] = useState(null);
    const [searchResults, setSearchResults] = useState(null);

    useEffect(() => {
        setDatabase(JSON.parse(window.localStorage.getItem("database-think-loud")) || [])
    }, []);

    return (
        <div className={`container ${styles.home}`}>
            <div >
                <SearchForm database={database} setSearchResults={setSearchResults} />
                <DataTable database={searchResults || database} setSelectedMobile={setSelectedMobile} />
                <MobileDetails selectedMobile={selectedMobile} />
            </div>

            <div>
                <ChartsSection database={database} />
            </div>
        </div>
    )
}
