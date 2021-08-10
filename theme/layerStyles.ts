const card = {
  borderRadius: 'lg',
  borderWidth: '1px',
  borderColor: 'primary.accent2',
  ".chakra-ui-dark &": {
    borderColor: 'dark.accent2',
  },
}

const subCard = {
  borderRadius: 'md',
  borderWidth: '1px',
  borderColor: 'primary.accent2',
  ".chakra-ui-dark &": {
    borderColor: 'dark.accent2',
  },
}

const selectedCard = {
  borderRadius: 'md',
  borderWidth: '1px',
  borderColor: 'primary.foreground',
  ".chakra-ui-dark &": {
    borderColor: 'dark.accent8',
  },
}

const elevatedCard = {
  ...card,
  boxShadow: 'geometric',
}

const cardFooter = {
  px: 8,
  py: 4,
  display: 'flex',
  justifyContent: 'flex-end',
  borderTopWidth: '1px',
  borderTopColor: 'primary.accent2',
  borderRadius: '0 0 7px 7px',
  ".chakra-ui-dark &": {
    borderTopColor: 'dark.accent2',
  },
}

const cardPadding = {
  p: 'base',
  pt: 6,
}

const line = {
  borderColor: 'primary.accent2',
  borderBottomWidth: '1px',
  ".chakra-ui-dark &": {
    borderColor: 'dark.accent2',
  },
}

const appContainer = {
  px: [4, 5, 5, 6],
  py: 6,
  mx: 'auto',
  maxW: 'container.lg',
}

const dropdown = {
  background: 'primary.background',
  borderRadius: 'md',
  position: 'absolute',
  top: 0,
  left: 0,
  boxShadow: 'large',
  ".chakra-ui-dark &": {
    background: 'dark.background',
  },
}

const elevateOnHover = {
  cursor: 'pointer',
  transition: '.333s all',
  _hover: {
    transition: '.18s all',
    boxShadow: 'cardHover',
    borderColor: 'primary.accent1',
  },
}

const staticSnippet = {
  p: 5,
  borderRadius: 'lg',
  borderColor: 'primary.accent2',
  boxShadow: 'card',
  bg: 'primary.background',
  borderWidth: '1px',
  ".chakra-ui-dark &": {
    bg: 'dark.background',
    borderColor: 'dark.accent2',
    boxShadow: 'none',
  },
}

const snippet = {
  ...staticSnippet,
  ...elevateOnHover,
}

const layerStyles = {
  appContainer,
  card,
  snippet,
  staticSnippet,
  selectedCard,
  subCard,
  cardFooter,
  cardPadding,
  dropdown,
  elevatedCard,
  elevateOnHover,
  line,
}

export default layerStyles
