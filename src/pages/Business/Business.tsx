import './Business.css'

import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Button, Card, Container } from 'react-bootstrap'
import { BsFillSignStopFill } from 'react-icons/bs'

export default function Business() {

  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <div className='Business Page'>
      <h3>Business Page</h3>
      <br></br>

{
        (auth?.userDetails) && (auth.userDetails.isBusiness || auth.userDetails.isAdmin) ?
          <p>Welcome {auth.userDetails.name.first} 😊</p>
        :
          <Container className='px-5'>
            <Card>
              <Card.Header as="h6" className='py-3'><BsFillSignStopFill size={24} className='me-1' fill='darkred' style={{ marginTop: '-4px' }} /> Access Denied</Card.Header>
              <Card.Body>
                <Card.Text>
                  <p></p>
                  <p>Only an authorized <strong>business</strong> can view the content of this page.</p>
                </Card.Text>
                <p className='pt-3'>
                  <Button onClick={() => navigate('/signin')} className='mx-2' variant='outline-primary' size='sm'>Sign In</Button>
                  <Button onClick={() => navigate('/signup')} className='mx-2' variant='outline-primary' size='sm'>Sign Up</Button>
                </p>
              </Card.Body>
            </Card>
          </Container>
      }

    </div>
  )
}
