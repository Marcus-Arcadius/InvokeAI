import { RootState } from 'app/store';
import { useAppDispatch, useAppSelector } from 'app/storeHooks';
import IAICheckbox from 'common/components/IAICheckbox';
import { setShouldDarkenOutsideBoundingBox } from 'features/canvas/store/canvasSlice';
import React from 'react';

export default function UnifiedCanvasDarkenOutsideSelection() {
  const shouldDarkenOutsideBoundingBox = useAppSelector(
    (state: RootState) => state.canvas.shouldDarkenOutsideBoundingBox
  );

  const dispatch = useAppDispatch();

  return (
    <IAICheckbox
      label="Darken Outside"
      isChecked={shouldDarkenOutsideBoundingBox}
      onChange={(e) =>
        dispatch(setShouldDarkenOutsideBoundingBox(e.target.checked))
      }
    />
  );
}
