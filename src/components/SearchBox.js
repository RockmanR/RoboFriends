import React from 'react';

const SearchBox = ({searchfield, searchChage}) => {
  return(
    <div className='pa2'>
    <input onChange={searchChage} type='search' placeholder='Search Robots' className='pa3 ba b--green bg-lightest-blue' />
    </div>
  )
}

export default SearchBox;
