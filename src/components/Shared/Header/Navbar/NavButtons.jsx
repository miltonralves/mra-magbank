import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, ButtonGroup, NavDropdown } from 'react-bootstrap'
import { LoginTypeContext } from '../../../../contexts/LoginTypeContext'
import { ConfirmButton } from '../../ConfirmButton/ConfirmButton'

export function NavButtons() {
  const navigate = useNavigate()
  const { setType, isLogged, setIsLogged } = useContext(LoginTypeContext)

  function handleNavigateToLogin(loginType) {
    setType(loginType)
    navigate('/login', { preventScrollReset: true })
  }

  function handleNavigateToHome() {
    setIsLogged(false)
    navigate('/', { preventScrollReset: true })
  }

  return (
    <>
      {isLogged ? (
        <ConfirmButton
          text="Sair"
          variant="outline-light"
          divClassName="flex-start"
          buttonStyle="five"
          handle={handleNavigateToHome}
        />
      ) : (
        <ButtonGroup className="w-320 flex-center">
          <Button variant="outline-light" className="h-30 py-md font-xs flex-center">
            <NavDropdown title="Acessar minha conta" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => handleNavigateToLogin('loginPF')}>
                Pessoa Física
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleNavigateToLogin('loginPJ')}>
                Pessoa Jurídica
              </NavDropdown.Item>
            </NavDropdown>
          </Button>
          <Button
            variant="outline-light"
            className="h-30 py-md font-xs flex-center"
            onClick={() => handleNavigateToLogin('createAccount')}
          >
            Abra sua conta
          </Button>
        </ButtonGroup>
      )}
    </>
  )
}
