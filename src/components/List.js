import React from 'react';
import styled from 'styled-components';

const Member = styled.div`
  border-radius: 15px;
  border: 2px solid white;
  padding: 0 3%;
  background-color: #282c34;
  color: white;
  margin-bottom: 5%;
`

const List = props => {
    const list = props.members;
    
    return (
        list.map(member => {
            return(
                <Member key={member.id}>
                    <h3>{member.name}</h3>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </Member>
            )
        })
    )
    

}

export default List;