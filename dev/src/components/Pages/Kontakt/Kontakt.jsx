import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import TextField from '@mui/joy/TextField';
import Textarea from '@mui/joy/Textarea';

const Box = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 679px) {
    display: block;
  }
`;

const Content = styled.div`
  background: #fff;
  padding: 0 20px 30px;
`;

const InlineLink = styled(Link)`
  color: #686;
  text-decoration: none;
`;

const SubmittedContent = styled.div`
  text-align: center;
  display: flex;
  height: 200px;
  margin-bottom: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  h1 {
    color :#9a9;
  }
`;

const inputStyle = {
  styleOverrides: {
    root: {
      borderRadius: '1px',
    },
  },
};

const formStyle = {
  styleOverrides: {
    root: {
      flex: '1',
      borderRadius: '1px',
      margin: '10px 10px 10px 0',
    },
  },
};

const buttonStyle = {
  styleOverrides: {
    root: {
      flex: '1',
      borderRadius: '1px',
      margin: '10px 10px 10px 0',
      background: "#9a9",
      color: 'white',
      '&:hover': {
        background: '#686',
      },
    },
  },
};

const mantineTheme = extendTheme({
  components: {
    JoyInput: inputStyle,
    JoyTextField: formStyle,
    JoyTextarea: formStyle,
    JoyButton: buttonStyle,
  }
});

const Kontakt = () => {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [emailIncorrect, setEmailIncorrect] = useState(false);
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    comment: '',
  });
  const [visible, setVisible] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const errors = {
    firstname: 'Vorname ist obligatorish!',
    lastname: 'Name ist obligatorish!',
    email: 'Email ist obligatorisch',
    emailIncorrect: 'Incorrect email',
    phone: '',
    comment: '',
  }

  const onChange = (e, func, field) => {
    if(field === 'email') {
      const filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if(e.target.value.length && !filter.test(e.target.value)) {
        error.email = errors.emailIncorrect;
        setEmailIncorrect(true);
      } else {
        error.email = '';
        setEmailIncorrect(false);
      }
    }
    error[field] = !e.target.value ? errors[field] : '';
    setError(error);
    func(e.target.value);
  }

  const errorHandler = () => {
    error.firstname = !firstname.length ? errors.firstname : '';
    error.lastname = !lastname.length ? errors.lastname : '';
    error.email = !email ? errors.email : emailIncorrect ? errors.emailIncorrect : '';
    setError(error);
  }
 
  const onSubmit = (e) => {
    e.preventDefault();
    errorHandler();
    setVisible(false);
    let counter = 0;
    Object.keys(error).forEach(key => {
      if(error[key].length) counter++;
    })
    console.log(counter);
    if(!counter) {
      document.getElementById('kontakt_submitted').value = 'true';
      document.getElementById('gform').submit();
      setSubmitted(true);
    }
  }

  useEffect(() => {
    if(!visible)
    setVisible(true);
  },[visible])

  if(!visible) {
    return <></>
  }

  const renderForm = () => (
    <form name="gform" id="gform" encType="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSej95Gy_9ssJRkxTddID663U3kE0_3XGXXS5auMcGNJ3xINJg/formResponse?" target="hidden_iframe" onSubmit={onSubmit}>
      <Box>
        <TextField
          size="md"
          autoComplete="given-name"
          placeholder="Vorname"
          name="entry.1183541095" id="entry.1183541095"
          error={!!error.firstname}
          value={firstname}
          onChange={e => onChange(e,setFirstname, 'firstname')}
          helperText={error.firstname}
        />
        <TextField
          size="md"
          autoComplete="family-name"
          placeholder="Name"
          name="entry.792893174" id="entry.792893174"
          value={lastname}
          error={!!error.lastname}
          onChange={e => onChange(e,setLastname, 'lastname')}
          helperText={error.lastname}
        />
      </Box>
      <Box sx={{
        display: 'flex'
      }}>
        <TextField
          size="md"
          autoComplete="email"
          placeholder="E-mailaddresse"
          name="entry.1950217878" id="entry.1950217878"
          value={email}
          error={!!error.email}
          onChange={e => onChange(e,setEmail, 'email')}
          helperText={error.email}
        />
        <TextField
          size="md"
          autoComplete="tel"
          placeholder="Telefon"
          value={phone}
          name="entry.421001964" id="entry.421001964"
          error={!!error.phone}
          onChange={e => onChange(e,setPhone, 'phone')}
          helperText={error.phone}
        />
      </Box>
      <Box>
        <Textarea 
          name="entry.2020080612" id="entry.2020080612"
          minRows={3}
          size="md"
          placeholder="Nachricht"
          onChange={e => onChange(e,setComment, 'comment')}
        >
          {comment}
        </Textarea>
      </Box>
      <div>
        Mit dem Senden diese Anfrage stimme ich zu, dass hausinaffoltern.online meine Daten wie in die&nbsp;<InlineLink to="/privacy">Datenschutzerklärung </InlineLink>&nbsp;beschrieben verarbeiten darf.
      </div>
      <Box>
        <Button type="submit">Anfrage senden</Button>
      </Box>
    </form>
  );

  return (
    <Content>
      <p>Falls Sie Interesse an einer Besichtigung haben, kontaktieren sie uns über das Kontaktformular.</p>
      <CssVarsProvider theme={mantineTheme}>
      {submitted ? <SubmittedContent><h1>Danke!<br />Ihre Nachricht ist zugeschickt.</h1></SubmittedContent> : renderForm()}
      </CssVarsProvider>
    </Content>
  );
};

export default Kontakt;
