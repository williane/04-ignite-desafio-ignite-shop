import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    }
  }
});

export const ImageWrapper = styled('div',{
  display: 'flex',
})

export const ImageContainer = styled('div', {
  width: '100%',
  Width: '8.75rem',
  height: '8.75rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '1000px',
  padding: '0.25rem',
  marginTop: '4rem',
  marginLeft: '-3.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:nth-child(1)': {
    marginLeft: 'unset'
  },

  img: {
    objectFit: 'cover',
  }
});