import React from 'react';
import Card from './Card';


const ArrayList = ({robots}) => {
  return (
          <div>
          {
            robots.map((user,i) => {
              return (
                      <Card id={user.id} name={robots[i].name} username={robots[i].username} email={robots[i].email} />
                    )
            })
          }
          </div>
  )
}

export default ArrayList;
