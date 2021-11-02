import React from 'react';
import PropTypes from 'prop-types';

/**Mui imports */
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";


/**Formik & Yup imports */
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    }
);

const Loginform = ({ loged, fetching, onLogin }) => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <Formik
            // *** Initial values that the form will take
            initialValues={initialCredentials}
            // *** Yup Validation Schema ***
            validationSchema={loginSchema}
            // ** onSubmit Event
            onSubmit={async (values) => {
                onLogin(values.email, values.password)
            }}
        >
            {/* We obtain props from Formik */}

            {({ values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur }) => (
                <Container maxWidth="xs"><CssBaseline />
                    <Box
                        sx={{
                            marginTop: 12,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <Box
                            component="form"
                            sx={{ 
                                mt: 1,
                                width: "100%"
                            }}
                        >
                            <TextField
                                margin="normal"
                                type="email"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.email && Boolean(errors.email)}
                            />

                            {
                                errors.email && touched.email &&
                                (
                                    <ErrorMessage name="email" component='div' style={{ color: "red" }}></ErrorMessage>
                                )
                            }
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {/* Password Errors */}
                            {
                                errors.password && touched.password &&
                                (
                                    <ErrorMessage name="password" component='div' style={{ color: "red" }}  ></ErrorMessage>
                                )
                            }
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            {fetching ? (<p>LOADING...</p>) : null}
                            {isSubmitting ? (<p>Login your credentials...</p>) : null}
                        </Box>
                    </Box>
                </Container>
            )}
        </Formik>
    );
};


Loginform.propTypes = {
    loged: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
};


export default Loginform;
