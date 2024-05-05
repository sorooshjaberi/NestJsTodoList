import { ComponentProps } from "react";
import SelectBoxWithLabel from "../SelectBoxWithLabel";
import { isUndefined } from "lodash";
import { CustomSelectBoxItem } from "../CustomSelectBox";

export default function formikUrlValueResolver(
  formikValue: unknown,
  selectBoxProps: ComponentProps<typeof SelectBoxWithLabel>,
) {
  let value:
    | (string | CustomSelectBoxItem)[]
    | NonNullable<string | CustomSelectBoxItem>
    | undefined = undefined;
  let options: CustomSelectBoxItem[] = selectBoxProps.options;

  if (formikValue) {
    if (Array.isArray(formikValue)) {
      if (selectBoxProps.multiple) {
        value = formikValue
          .map((item) => {
            if (typeof item === "string") {
              const selectedItem = selectBoxProps.options.find(
                (option) => String(option.value) === String(item),
              );
              return selectedItem;
            } else {
              if (typeof item === "object") return item;
            }
            return undefined;
          })
          .filter((item) => !isUndefined(item)) as CustomSelectBoxItem[];
      } else {
        const firstValue = formikValue[0];
        if (typeof firstValue === "string") {
          const selected = selectBoxProps.options.find(
            (option) => String(option.value) === String(firstValue),
          );
          if (selected) {
            value = selected;
          }
        }
      }
    } else if (typeof formikValue === "string") {
      const selected = selectBoxProps.options.find(
        (option) => String(option.value) === String(formikValue),
      );
      if (selected) {
        if (selectBoxProps.multiple) {
          value = [selected];
        } else {
          value = selected;
        }
      }
    } else if (typeof formikValue === "object") {
      if ("label" in formikValue && "value" in formikValue)
        value = formikValue as any;
    }
  }
  if (selectBoxProps.loading && !options) {
    options = [];
  }
  return { value, options };
}
