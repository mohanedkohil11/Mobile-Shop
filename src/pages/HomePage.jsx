import React from 'react'
import ChartsSection from '../components/home/ChartsSection'
import DataTable from '../components/home/DataTable'
import SearchForm from '../components/home/SearchForm'
import SearchResults from '../components/home/SearchResults'
import styles from '../sass/layout/components/home/home.module.scss'
export default function HomePage() {
    return (
        <div className={`container ${styles.home}`}>
            <div>
                <SearchForm />
                <DataTable />
                <SearchResults />
            </div>

            <div>
                <ChartsSection />
            </div>
        </div>
    )
}
