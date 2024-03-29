import styled from 'styled-components'

const Layout = styled.div`
  .footer-app {
    background: ${(props) => props.theme.colors.background};
    position: relative;
    top: auto;
    bottom: 0;
    width: 100%;
  }

  .FText {
    color: ${(props) => props.theme.colors.textColor};
  }
  .FBorder {
    border-top: 1px solid ${(props) => props.theme.colors.borderbox};
  }
`

const Footer: React.FC = () => {
  return (
    <Layout>
      <footer className="border-t border-accent-2 footer-app FBorder">
        <div className="py-6 flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 conten-f">
          <h3 className="text-2xl lg:text-2xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 FText">
            Mu-style Jewelry multi-vendor store
          </h3>
        </div>
      </footer>
    </Layout>
  )
}

export default Footer
