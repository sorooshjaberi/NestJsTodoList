import {
  LocalizationProvider,
  LocalizationProviderProps,
} from "@mui/x-date-pickers";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import React, { memo } from "react";

type Props = LocalizationProviderProps<any, any>;

const MemoizedLocalizationProvider = (props: Props) => {
  return <LocalizationProvider dateAdapter={AdapterDateFnsJalali} {...props} />;
};

export default memo(MemoizedLocalizationProvider);
