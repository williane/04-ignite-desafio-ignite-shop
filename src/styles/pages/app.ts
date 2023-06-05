import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})

export const Cart = styled('div',{
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '3rem',
  width: '3rem',
  borderRadius: '6px',
  backgroundColor: '$gray800',
})

export const Pin = styled('div',{
position: 'absolute',
top: '-50%',
right: '-50%',
transform: 'translateX(-50%) translateY(50%)',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
width: '1.7rem',
height: '1.7rem',
backgroundColor: '$green500',
border: '3px solid $gray900',
borderRadius: '9999px',
fontSize: '0.875rem'
})



