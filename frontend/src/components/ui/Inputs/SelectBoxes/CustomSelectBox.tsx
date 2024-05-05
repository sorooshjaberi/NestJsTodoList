import { Autocomplete, MenuItem, useTheme } from "@mui/material";
import clsx from "clsx";
import React, { ComponentProps, ReactNode, memo, useCallback } from "react";
import CustomTextField from "../TexFields/CustomTextField";
import NotAffectedRtl from "components/common/NotAffectedRtl";
import { PartialKey } from "models/utilTypes";
import LoadingAdornment from "../Labels/LoadingAdornment";
import VirtualizedList from "./VirtualizedList";

export type CustomSelectBoxItem = {
  value: string | number;
  label: ReactNode;
} & Record<string, any>;

type Props = PartialKey<
  ComponentProps<typeof Autocomplete<CustomSelectBoxItem, any, any, any, any>>,
  "renderInput"
> & {
  options: CustomSelectBoxItem[];
  label?: ReactNode;
  name?: string;
  textFieldProps?: Partial<ComponentProps<typeof CustomTextField>>;
  notAffectedRtl?: boolean;
  required?: boolean;
  virtualize? : boolean;
  onFlattenedChange?(
    flattenedValue: string | string[],
    ...args: Parameters<
      NonNullable<
        ComponentProps<
          typeof Autocomplete<CustomSelectBoxItem, any, any, any, any>
        >["onChange"]
      >
    >
  ): void;
};

const CustomSelectBox = (props: Props) => {
  const {
    textFieldProps,
    name,
    label,
    options,
    notAffectedRtl,
    onFlattenedChange,
    virtualize,
    ...autocompleteProps
  } = props;

  const { direction } = useTheme();

  const getOptionLabel = useCallback(
    (option) => {
      if (typeof option === "string") {
        //option is the value
        const label = options.find(
          (optionItem) => String(optionItem.value) === option,
        )?.label;
        return typeof label === "string" ? label : option;
      } else {
        //option is the value label object
        if (typeof option.label === "string") return option.label;
        return "";
      }
      // return option.label ?? option;
    },
    [options],
  );

  const renderInput = useCallback(
    (params) => (
      <CustomTextField
        {...{
          placeholder: autocompleteProps.placeholder,
          ...params,
          name,
          required: autocompleteProps.required,
          label,
          InputProps: {
            ...params.InputProps,
            endAdornment: (
              <>
                {autocompleteProps.loading && <LoadingAdornment />}
                {params.InputProps.endAdornment}
              </>
            ),
            ...textFieldProps?.InputProps,
          },
          ...textFieldProps,
        }}
      />
    ),
    [
      name,
      label,
      textFieldProps,
      autocompleteProps.placeholder,
      autocompleteProps.loading,
      autocompleteProps.required,
    ],
  );

  let autoComplete = (
    <Autocomplete
      options={options}
      getOptionLabel={getOptionLabel}
      loadingText="درحال بارگذاری..."
      ListboxComponent={virtualize ? VirtualizedList : undefined}
      {...autocompleteProps}
      disableClearable={
        autocompleteProps.disableClearable || autocompleteProps.loading
      }
      onChange={(...args) => {
        let flattenedValue;
        const value = args[1];
        if (value) {
          if (typeof value === "string") {
            flattenedValue = value;
          } else {
            if ("value" in value) {
              flattenedValue = value.value;
            } else if (Array.isArray(value)) {
              // eslint-disable-next-line array-callback-return
              const values = value.map((valueItem) => {
                if (typeof valueItem === "string") {
                  return valueItem;
                } else {
                  if ("value" in valueItem) {
                    return valueItem.value;
                  }
                }
              });
              flattenedValue = values;
            }
          }
        }
        onFlattenedChange?.(flattenedValue, ...args);
      }}
      renderOption={(params) => {
        return (
          <MenuItem dir={direction} {...params}>
            {(params as any).key}
          </MenuItem>
        );
      }}
      renderInput={renderInput}
      className={clsx("relative", textFieldProps?.className)}
    />
  );

  if (notAffectedRtl) {
    autoComplete = <NotAffectedRtl>{autoComplete}</NotAffectedRtl>;
  }
  return autoComplete;
};

export default memo(CustomSelectBox);
