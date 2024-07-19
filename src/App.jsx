import React from "react"
import NoteTypes from "./components/NoteTypes"
import DisplayNotes from "./components/DisplayNotes"
import './app.css'
import { NoteContextProvider } from "./components/NoteContext"
import NoteTypeModal from "./components/NoteTypeModal"


export default function App() {
    return (
        <NoteContextProvider>
            <header className="header">
                <NoteTypeModal />
                <div className="container is-widescreen">
                    <NoteTypes />
                </div>
            </header>
            <div className="notewrap">

                <DisplayNotes />
            </div>
        </NoteContextProvider>
    )
}
