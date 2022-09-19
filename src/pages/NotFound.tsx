import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Button, ContactGroupIcon } from '@fluentui/react-northstar';
import { useNavigate } from 'react-router-dom';

interface INotFoundProps { }

const NotFound: React.FC<INotFoundProps> = observer(() => {
    const navigate = useNavigate()

    const strCurrentUser = localStorage.getItem("user")

    return strCurrentUser === null ? (
        <React.Fragment>
            <h1>Nothing could not found</h1>
            <Button icon iconPosition="before" primary>
                <ContactGroupIcon xSpacing="after" />
                <Button.Content content="Login" onClick={() => {
                    navigate("/Login")
                }} />
            </Button>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <h1>Nothing could not found</h1> 
            <Button icon iconPosition="before" primary>
                <ContactGroupIcon xSpacing="after" />
                <Button.Content content="Homepage" onClick={() => {
                    navigate("/")
                }} />
            </Button>
        </React.Fragment>
    )

})


export default NotFound;