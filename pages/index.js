import React from 'react'
import makeStyles  from '@material-ui/styles/makeStyles'
import { connect } from 'react-redux'
import { increment, decrement } from '../src/actions'
import { bindActionCreators } from 'redux'

import NavBar from '../src/components/navigation/NavBar'
import {  TopFrontPage , Offer, Class , Invitation, Cerfications,Testimony,PaymentsPlans, FAQ,Footer } from '../src/components/widgets/blocks';
import { Box } from '@mui/material'
const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 14
  }
})

const Index = ({
  value,
  from,
  action,
  actions: {
    increment,
    decrement
  }
}) => {
  const classes = useStyles()
  return (
    <section>
      <NavBar/>
      <Box
      className='home-box'>
        <TopFrontPage/>
        <Offer/>
        <Class/>
        <Cerfications/>
        <Testimony/>
        <FAQ/>
        <Footer/>
      </Box>
   </section> 
  )
}

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators({ increment, decrement }, dispatch) })
)(Index)
