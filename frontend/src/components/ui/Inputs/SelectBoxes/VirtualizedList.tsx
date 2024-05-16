import { Box } from "@mui/material";
import React, {
  Children,
  PropsWithChildren,
  forwardRef,
  useEffect,
  useRef,
} from "react";
import { FixedSizeList } from "react-window";

type Props = {};

const VirtualizedList = forwardRef((props: PropsWithChildren<Props>, ref) => {
  const { children, ...other } = props;

  const itemHeight = 40;
  const boxMaxHeight = 200;

  const childrenCount = Children.count(children);

  const boxHeight = Math.min(childrenCount * itemHeight, boxMaxHeight);

  const listRef = useResetCache(childrenCount);

  return (
    <Box ref={ref}>
      <Box {...other} p="0 !important">
        <FixedSizeList
          ref={listRef}
          width="100%"
          overscanCount={10}    
          height={boxHeight}
          itemSize={itemHeight}
          itemCount={childrenCount}
        >
          {({ index, style }) => {
            const child = Children.toArray(children)[index];
            return <Box style={style}>{child}</Box>;
          }}
        </FixedSizeList>
      </Box>
    </Box>
  );
});

export default VirtualizedList;
function useResetCache(data: any) {
  const ref = useRef<FixedSizeList>(null);
  useEffect(() => {
    ref?.current?.scrollToItem(0);
  }, [data]);
  return ref;
}
