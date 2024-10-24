import { createSelector } from "@reduxjs/toolkit";
import { selectTrucks } from "../truck/selectors";

export const selectLocationFilter = state => state.filters.location;
export const selectFormFilter = state => state.filters.form;
export const selectFeaturesFilter = state => state.filters.features;
export const selectFilters = state => state.filters;

export const selectFilteredTrucks = createSelector(
  [selectTrucks, selectLocationFilter, selectFormFilter, selectFeaturesFilter],
    (trucks, locationFilter, formFilter, featuresFilter) => {
    return trucks.filter(truck => {
      const matchesLocation = truck.location.toLowerCase().includes(locationFilter.toLowerCase());
      const matchesForm = formFilter ? truck.form === formFilter : true;
      const matchesFeatures = featuresFilter.every(feature => {
        if (feature === 'automatic') {return truck['transmission'] === 'automatic';}
        return truck[feature] === true;
      });
      return matchesLocation && matchesForm && matchesFeatures;
    });
  }
);
