import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

const Images = ( { data, itemsPerPage } ) => {
    const [ currentItems, setCurrentItems ] = useState( [] )
    const [ pageCount, setPageCount ] = useState( 0 )

    const [ itemOffset, setItemOffset ] = useState( 0 )

    useEffect( () => {
        const endOffset = itemOffset + itemsPerPage
        setCurrentItems( data.slice( itemOffset, endOffset ) )
        setPageCount( Math.ceil( data.length / itemsPerPage ) )
    }, [ itemOffset, itemsPerPage, data ] )

    // Invoke when user click to request another page.
    const handlePageClick = ( event ) => {
        const newOffset = (event.selected * itemsPerPage) % data.length
        setItemOffset( newOffset )
    }

    return (
        <>
            <div className="images">
                {
                    currentItems.map( image => <div key={ image.title } className="image">
                        <img src={ image.url } alt="title"/>
                    </div> )
                }
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={ handlePageClick }
                pageRangeDisplayed={ 5 }
                pageCount={ pageCount }
                previousLabel="< previous"
                renderOnZeroPageCount={ null }
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"
            />
        </>
    )
}

export default Images
