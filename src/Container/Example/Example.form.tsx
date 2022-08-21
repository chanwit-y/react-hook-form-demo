import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { number, object, string } from "yup";

type Props = {
  children: ReactNode;
};

const schema = object({
  id: number().min(9999999999999, "min 9999999999999"),
  name: string().required("is require"),
  gender: string(),
  address: string(),
  trackAddress: string().when(["address"], {
    is: (a: string) => {
      console.log(a);
      return a == "";
    },
    then: string(),
    otherwise: string().required("trackAddress"),
  }),
});

export const ExampleForm = ({ children }: Props) => {
  const form = useForm({
    mode: "all",
    reValidateMode: "onChange",
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: true,
    resolver: yupResolver(schema),
  });

  return <FormProvider {...form}>{children}</FormProvider>;
};
