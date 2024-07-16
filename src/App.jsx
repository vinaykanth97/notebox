import React from "react"
import NoteTypes from "./components/NoteTypes"
import DisplayNotes from "./components/DisplayNotes"
import './app.css'
import { NoteContextProvider } from "./components/NoteContext"


export default function App() {
    return (
        <NoteContextProvider>
            <div class="notewrap">
                <NoteTypes />
                <DisplayNotes />
            </div>
        </NoteContextProvider>
    )
}
