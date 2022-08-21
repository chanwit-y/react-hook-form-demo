import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { Controller, useFormContext, useFieldArray } from "react-hook-form";

export const Form = () => {
  const {
    control,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useFormContext();

  const { fields, append } = useFieldArray({ control: control, name: "list" });

  useEffect(() => {
    trigger();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item md={6}>
        <Controller
          name="id"
          control={control}
          defaultValue={0}
          render={({ field, fieldState: { error } }) => (
            <TextField
              fullWidth
              type="number"
              label="id"
              {...field}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Grid>
      <Grid item md={6}>
        <Controller
          name="name"
          control={control}
          defaultValue={""}
          render={({ field, fieldState: { error } }) => (
            <TextField
              fullWidth
              {...field}
              label="name"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Grid>
      <Grid item md={12}>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <Controller
            control={control}
            name="gender"
            defaultValue={"female"}
            render={({ field }) => (
              <RadioGroup {...field} defaultValue="female">
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            )}
          />
        </FormControl>
      </Grid>
      <Grid item md={6}>
        <Controller
          name="address"
          control={control}
          defaultValue={""}
          render={({ field, fieldState: { error } }) => (
            <TextField
              fullWidth
              multiline
              {...field}
              label="address"
              minRows={4}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Grid>
      <Grid item md={6}>
        <Controller
          name="billingAddress"
          control={control}
          defaultValue={""}
          render={({ field, fieldState: { error } }) => (
            <TextField
              fullWidth
              multiline
              {...field}
              label="Billing Address"
              minRows={4}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Grid>
      <Grid container md={12} display="flex" alignItems="center">
        <Grid item md={1}>
          <Button
            onClick={() => {
              append({ name: "" });
              trigger();
            }}
          >
            Add
          </Button>
        </Grid>
        <Grid item md={1}>
          <Typography>
            {errors && errors["list"] && errors["list"].message?.toString()}
          </Typography>
        </Grid>
      </Grid>
      <Grid item md={12}>
        {fields.map((f, i) => (
          <Grid item md={6}>
            <Controller
              name={`list.${i}.name`}
              control={control}
              defaultValue={""}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  fullWidth
                  label="name"
                  {...field}
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </Grid>
        ))}
      </Grid>
      <Grid item md={12}>
        {JSON.stringify(errors, undefined, 2)}
      </Grid>
      <Grid item md={12} gap={1} display="flex" justifyContent="center">
        <Button
          variant="contained"
          onClick={handleSubmit((data) => {
            console.log(data);
          })}
        >
          submit
        </Button>
        <Button onClick={() => reset()}>reset</Button>
      </Grid>
    </Grid>
  );
};
