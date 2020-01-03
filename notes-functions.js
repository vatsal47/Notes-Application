// Read existing notes from localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Save the notes to localStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from the list
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

<<<<<<< HEAD
    // Setup the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', function () {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })
=======
    button.textContent = 'Remove'
    noteEl.appendChild(button)
    
>>>>>>> 1363578a90a6bf5b2bf00fcb4883b3f7ba040f3e

    // Setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
<<<<<<< HEAD
        textEl.textContent = 'Unnamed note'
=======
        textEl.textContent = 'Unnamed Recipe'
>>>>>>> 1363578a90a6bf5b2bf00fcb4883b3f7ba040f3e
    }
    noteEl.appendChild(textEl)

    noteEl.appendChild(textEl)

    return noteEl
}

// Render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}
