import React from "react"
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid black;
  width: max-content;
  padding: 2%;
`

const EditButton = styled.div`
  width: max-content;
  padding: 2%;
  border-radius: 4px;
  background-color: salmon;
  cursor: pointer;
`

export default function Card(props) {
  return (<div className="cards-wrapper">
    {props.cards.map((card, idx) => {
      return (
        <CardContainer key={idx}>
          <p className="name">{card.name}</p>
          <p className="email">{card.email}</p>
          <p className="role">{card.role}</p>
          <EditButton id={idx} onClick={e=>props.edit(e)}>Edit</EditButton>
        </CardContainer>
        )
      })
    }
    </div>
  );
}