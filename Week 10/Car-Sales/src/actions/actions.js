export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export function addFeatureToCar(feature) {
  return {
    type: ADD_FEATURE,
    feature: feature
  };
}

export function deleteFeature(feature) {
  return {
    type: REMOVE_FEATURE,
    feature: feature
  };
}
