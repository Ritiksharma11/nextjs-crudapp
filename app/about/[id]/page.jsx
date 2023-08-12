import React from 'react'

const DynamicPage = ({ params }) => {
    return (
        <div>This is a DynamicPage with id:{params.id}</div>
    )
}

export default DynamicPage