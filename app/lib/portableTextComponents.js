// lib/portableTextComponents.js
export const portableTextComponents = {
    types: {
      image: ({ value }) => (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '3rem 0' }}>
          <img
            src={value.asset.url}
            alt={value.alt || 'Image'}
            style={{ maxWidth: '50vw', maxHeight: '50vh' }}
          />
        </div>
      ),
    },
    block: {
      h1: ({ children }) => <h1 style={{ fontSize: '2em', margin: '1em 0' }}>{children}</h1>,
      h2: ({ children }) => <h2 style={{ fontSize: '1.75em', margin: '1em 0' }}>{children}</h2>,
      h3: ({ children }) => <h3 style={{ fontSize: '1.5em', margin: '1em 0' }}>{children}</h3>,
      h4: ({ children }) => <h4 style={{ fontSize: '1.25em', margin: '1em 0' }}>{children}</h4>,
      blockquote: ({ children }) => (
        <blockquote style={{ margin: '1em 0', paddingLeft: '1em', borderLeft: '4px solid #ccc' }}>
          {children}
        </blockquote>
      ),
      normal: ({ children }) => <p style={{ margin: '1em 0' }}>{children}</p>,
    },
    marks: {
      link: ({ children, value }) => (
        <a href={value.href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
  };
  