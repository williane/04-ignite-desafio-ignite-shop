import { styled } from "..";

export const Cart = styled('button',{
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '3rem',
  width: '3rem',
  border: 'none',
  borderRadius: '6px',
  backgroundColor: '$gray800',
  color: '$white',
  cursor: 'pointer'
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
fontSize: '0.875rem',
color: '$white'
})