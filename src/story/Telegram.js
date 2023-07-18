import React from "react";
import { useFormik } from "formik";
import { TextField, Button, Typography, Box, Select, MenuItem, CircularProgress, FormControl, InputLabel } from '@mui/material';
import * as Yup from 'yup';
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const Telegram = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit: (values) => {
      submit(values.email, values)
        .then(() => {
          if (response.type == 'error'){
            onOpen('error', response.message)
          }
          else {
            onOpen('success', response.message)
            formik.resetForm()
          }
        })
        .catch(() => onOpen('error', 'Servers cannot be reached!'))
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().required('Required').email('Invalid email address'),
      message: Yup.string().required("Required").min(25, "Must be at least ${min} characters")
    }),
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Contact me
      </Typography>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{ width: '100%', maxWidth: 500 }}
      >
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email Address"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ mb: 2 }}
        />
        {/* <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Type of enquiry</InputLabel>
          <Select
            label="Type of enquiry"
            id="type"
            name="type"
            value={formik.values.type}
            onChange={formik.handleChange}
          >
            <MenuItem value="hireMe">Freelance project proposal</MenuItem>
            <MenuItem value="openSource">Open source consultancy session</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl> */}
        <TextField
          fullWidth
          id="message"
          name="message"
          label="Your message"
          multiline
          rows={4}
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
          sx={{ mb: 2 }}
        />
        <Button color="primary" variant="contained" fullWidth type="submit" endIcon={formik.isSubmitting ? <CircularProgress size="1rem" /> : null}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Telegram;