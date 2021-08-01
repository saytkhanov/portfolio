import React, { useState } from 'react'
import { EuiFlexGroup,EuiButton, EuiFlexItem, EuiPageTemplate, BodyContent, EuiText } from '@elastic/eui'
import { NavLink } from 'react-router-dom'




function Main () {

  return (
    <EuiPageTemplate style={{minHeight: 0}}>
      <EuiFlexGroup style={{borderBottom: '1px solid'}} >
         <EuiFlexItem >
           <div style={{display: 'flex', paddingTop: 70}}>
             <NavLink to='/'>
             <EuiButton style={{marginRight: 15}}>
               О себе
             </EuiButton>
             </NavLink>
             <NavLink to='/aboutMe'>
             <EuiButton style={{marginRight: 15}}>
               Проекты
             </EuiButton>
             </NavLink>
           </div>
         </EuiFlexItem>
        <EuiFlexItem>
          <EuiText>
            <h2 style={{ paddingTop: 65, textAlign: 'end', color: 'red' }}>
Portfolio
            </h2>
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPageTemplate>
  )
}

export default Main