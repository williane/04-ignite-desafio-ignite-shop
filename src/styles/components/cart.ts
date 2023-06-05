import { styled } from "..";

export const CartContainer = styled('div',{
  position: 'absolute',
  top: '0',
  right: '0',
  zIndex: 10,

  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '30rem',

  backgroundColor: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

  padding: '3rem',

  strong:{
    marginTop: '1.5rem',
    fontSize: '$xl',
  }
})

export const CloseContainer = styled('div',{
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
  marginTop: '-1.5rem',
  marginLeft: '1.5rem',
})

export const CartProducts = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  width: '100%',
  height: '100%',

  marginTop: '2rem',
})

export const ProductsList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  height: '32rem',
})

export const ProductContainer = styled('div', {
  display: 'flex',
  width: '100%',
})

export const Product = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '6.3rem',
  height: '5.8rem',

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '8px',

  img: {
    width: '100%',
    height: '100%',
  }
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  marginLeft: '1.25rem',

  span:{
    fontSize: '$md',
    lineHeight: '160%',
    color: '$gray300',
  },

  strong:{
    marginTop: 'unset',
    fontSize: '$md',
    lineHeight: '160%',
  },

  button:{
    display: 'flex',
    justifyContent: 'flex-start',

    border: 'unset',
    marginTop: '0.5rem',
    backgroundColor: 'transparent',
    color: '$green500',

    fontSize: '1rem',
    fontWeight: 'bold',

    cursor: 'pointer'
  }

})

export const Subtotals = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  div:{
    display: 'flex',
    justifyContent: 'space-between',

    'span:nth-child(1)': {
      fontSize: '1rem',
      lineHeight: '160%',
    },

    'span:nth-child(2)': {
      fontSize: '$md',
      lineHeight: '160%',
    },

    strong:{
      margin: 'unset',
    },

    'strong:nth-child(1)': {
      fontSize: '$md',
      lineHeight: '160%',
    },

    'strong:nth-child(2)': {
      fontSize: '$xl',
      lineHeight: '140%',
    },
  }
})

export const  CheckoutButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',

  backgroundColor: '$green500',
  border: 'none',
  borderRadius: '8px',
  padding: '1.25rem 2rem',

  fontSize: '$md',
  fontWeight: 'bold',
  lineHeight: '160%',
  color: '$white',

  cursor: 'pointer',
})