import React from 'react';
import styled from 'styled-components';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import TextField from '@mui/joy/TextField';
import Textarea from '@mui/joy/Textarea';

const Box = styled.div`
  display: flex;
  width: 100%;
`;

const Content = styled.div`
  background: #fff;
  padding: 0 20px;
  width: 100%;
`;

const onSubmit = (e) => {
  e.preventDefault();
  console.log(e, document.getElementById('kontakt_submitted').value);
  document.getElementById('kontakt_submitted').value = 'true';
  console.log(e, document.getElementById('kontakt_submitted').value);
  document.getElementById('gform').submit();
}

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

const error = {
  
};

const Kontakt = () => {
  return (
    <Content>
      <p>Lorem ipsum</p>
      <CssVarsProvider theme={mantineTheme}>
        <form name="gform" id="gform" encType="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSej95Gy_9ssJRkxTddID663U3kE0_3XGXXS5auMcGNJ3xINJg/formResponse?" target="hidden_iframe" onSubmit={onSubmit}>
          <Box>
            <TextField
              size="md"
              autoComplete="given-name"
              placeholder="Vorname"
              name="entry.1183541095" id="entry.1183541095"
              error={error.firstname}
              helperText={error.firstname && "Vorname ist obligatorish!"}
            />
            <TextField
              size="md"
              autoComplete="family-name"
              placeholder="Name"
              name="entry.792893174" id="entry.792893174"
              error={error.lastname}
              helperText={error.lastname && "Name ist obligatorish!"}
            />
          </Box>
          <Box sx={{
            display: 'flex'
          }}>
            <TextField
              size="md"
              placeholder="E-mailaddresse"
              name="entry.1950217878" id="entry.1950217878"
              error={error.email}
              helperText={error.lastname}
            />
            <TextField
              size="md"
              placeholder="Telefon"
              name="entry.421001964" id="entry.421001964"
            />
          </Box>
          <Box>
            <Textarea name="entry.2020080612" id="entry.2020080612" minRows={3} size="md" placeholder="Nachricht" />
          </Box>
          <Box>
            <Button type="submit">Anfrage senden</Button>
          </Box>
        </form>
      </CssVarsProvider>
    </Content>
  );
};

export default Kontakt;
